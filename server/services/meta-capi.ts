import { createHash } from "crypto";

export interface LeadEventData {
  email: string;
  phone?: string | null;
  firstName: string;
  lastName: string;
  userAgent?: string;
  ipAddress?: string;
  eventSourceUrl?: string;
  eventId: string;
}

/**
 * SHA-256 hash a value after normalizing (lowercase, trimmed)
 */
function hashSha256(value: string): string {
  const normalized = value.toLowerCase().trim();
  return createHash("sha256").update(normalized).digest("hex");
}

/**
 * Normalize phone number: strip non-digits, add +1 country code if needed
 */
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // If 10 digits (US number without country code), add +1
  if (digits.length === 10) {
    return "+1" + digits;
  }
  // If 11 digits starting with 1, format as +1
  if (digits.length === 11 && digits.startsWith("1")) {
    return "+" + digits;
  }
  // Otherwise return with + prefix if not already there
  return phone.startsWith("+") ? phone : "+" + digits;
}

/**
 * Check if Meta CAPI is configured with required environment variables
 */
export function isMetaCapiConfigured(): boolean {
  return !!(process.env.META_PIXEL_ID && process.env.META_ACCESS_TOKEN);
}

/**
 * Send a Lead event to Meta Conversions API
 * Fire-and-forget pattern: errors are logged but don't block the response
 */
export function sendLeadEvent(data: LeadEventData): void {
  if (!isMetaCapiConfigured()) {
    console.warn("Meta CAPI: Missing META_PIXEL_ID or META_ACCESS_TOKEN");
    return;
  }

  // Only send events from production domain
  if (!data.eventSourceUrl?.includes("ashtonvalephoto.com")) {
    console.log("Meta CAPI: Skipping event from non-production domain");
    return;
  }

  const pixelId = process.env.META_PIXEL_ID!;
  const accessToken = process.env.META_ACCESS_TOKEN!;

  const userData: Record<string, any> = {
    em: [hashSha256(data.email)],
    fn: [hashSha256(data.firstName)],
    ln: [hashSha256(data.lastName)],
  };

  if (data.phone) {
    const normalizedPhone = normalizePhone(data.phone);
    userData.ph = [hashSha256(normalizedPhone)];
  }

  if (data.ipAddress) {
    userData.client_ip_address = data.ipAddress;
  }

  if (data.userAgent) {
    userData.client_user_agent = data.userAgent;
  }

  const eventPayload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: data.eventId,
        action_source: "website",
        event_source_url: data.eventSourceUrl,
        user_data: userData,
      },
    ],
  };

  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

  // Fire and forget - don't await, catch errors and log them
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventPayload),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Meta CAPI error response:", response.status, errorText);
      } else {
        console.log("Meta CAPI: Lead event sent successfully for", data.eventId);
      }
    })
    .catch((error) => {
      console.error("Meta CAPI: Failed to send Lead event:", error.message);
    });
}
