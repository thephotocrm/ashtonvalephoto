# Ashton Vale Photo & Video - Wedding Photography Platform

## Overview

Ashton Vale Photo & Video is a full-stack web application for a wedding photography and videography service. The platform allows couples to browse photographers, view portfolios, read reviews, and submit inquiries for their wedding day. Built with React on the frontend and Express on the backend, it features a modern, elegant design focused on showcasing photography work and converting visitors into customers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router

**UI Components & Styling**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) for utility-first styling with custom design tokens
- Custom CSS variables for theming (primary colors, fonts, spacing)
- **Google Fonts**: Lato (sans-serif) and Playfair Display (serif) for typography hierarchy

**State Management**
- **TanStack Query (React Query)** for server state management and API data fetching
- Local component state with React hooks for UI interactions
- Custom query client with configured defaults (no refetch on window focus, infinite stale time)

**Form Handling**
- **React Hook Form** with **Zod** resolvers for type-safe form validation
- Integration with shadcn/ui form components

**Key Design Patterns**
- Component composition with reusable UI components in `/client/src/components/ui`
- Feature components in `/client/src/components` (Hero, Navigation, etc.)
- Page-based routing in `/client/src/pages`
- Shared schema validation between frontend and backend via `/shared` directory

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API
- HTTP server created with Node's built-in `http` module
- Middleware: JSON body parsing, URL encoding, custom logging

**API Design**
- RESTful endpoints under `/api` prefix
- Resource-based routing for inquiries (`/api/inquiries`)
- Centralized error handling with Zod validation errors
- Request/response logging with timestamp and duration tracking

**Database Layer**
- **Drizzle ORM** for type-safe database queries
- **Neon Serverless PostgreSQL** as the database provider
- Schema defined in `/shared/schema.ts` for sharing between client and server
- Storage abstraction layer (`/server/storage.ts`) implementing `IStorage` interface for testability

**Data Models**
- **Users**: Basic authentication schema (id, username, password)
- **Inquiries**: Wedding inquiry form submissions with status tracking
- **Photographers**: Photographer profiles with location and availability
- **Portfolio Items**: Gallery items categorized by type (wedding, engagement, etc.)
- **Reviews**: Customer testimonials with ratings

**Build Process**
- Custom build script using `esbuild` for server bundling
- Vite for client bundling
- Selective dependency bundling (allowlist for frequently used packages)
- Separate production and development environments

### Development Environment

**Replit Integration**
- Custom Vite plugins for Replit-specific features:
  - Runtime error modal overlay
  - Cartographer (development tool)
  - Dev banner
  - Meta images plugin for OpenGraph tags

**Development Server**
- Vite dev server running on port 5000
- Express server with Vite middleware in development mode
- Hot module replacement via WebSocket (`/vite-hmr`)
- Static file serving in production from `dist/public`

### External Dependencies

**Core Framework Dependencies**
- `express` - Web server framework
- `react` & `react-dom` - UI library
- `vite` - Build tool and dev server
- `typescript` - Type safety
- `drizzle-orm` - Database ORM
- `@neondatabase/serverless` - PostgreSQL database client

**UI Component Libraries**
- `@radix-ui/*` - Headless UI primitives (30+ component packages)
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library
- `embla-carousel-react` - Carousel/slider component

**Data Fetching & Validation**
- `@tanstack/react-query` - Server state management
- `zod` - Schema validation
- `drizzle-zod` - Zod schema generation from Drizzle schemas
- `@hookform/resolvers` - Form validation integration

**Routing & Navigation**
- `wouter` - Lightweight client-side routing

**Date Handling**
- `date-fns` - Date utility library

**Development Tools**
- `tsx` - TypeScript execution for development server
- `drizzle-kit` - Database migration and schema management
- Custom Replit Vite plugins for enhanced development experience

**Database**
- PostgreSQL via Neon Serverless
- Database URL configured via `DATABASE_URL` environment variable
- Connection pooling handled by Neon's serverless driver

**Asset Management**
- Images stored in `/attached_assets/generated_images/`
- Vite alias `@assets` for importing static assets
- Public assets served from `/client/public/`

## Pricing Strategy

**Current Package Pricing (Luxury Market Aligned)**

Complete Experience Collections:
- **The Bespoke Collection**: $15,995 (Flagship - 6 weddings/year)
  - 12 hours coverage, 5 artists + lighting assistant, 3hr rehearsal dinner, 16×16 leather album
  - Feature Film (15-20 min), Full Documentary Film, Same-Day Edit, Fine Art Print Box, Canvas Collection (5 pieces)
- **The Estate Collection**: $11,495 (12 weddings/year)
  - 10 hours coverage, 4 artists, 14×14 leather album
  - Full Documentary Film, Same-Day Edit, Canvas Collection (3 pieces), 4-week editing
- **The Signature Collection**: $7,495 (18 weddings/year)
  - 8 hours coverage, 4 artists (2nd cinematographer 4 hrs), 12×12 linen album
  - Full Ceremony + Reception Documentary, One 16×20 Canvas Print, No Same-Day Edit
- **The Editorial Suite**: $5,495 (30 weddings/year)
  - 8 hours photo/cinema, associate photo 4 hrs only, NO second cinematographer
  - Highlight Film (2-3 min), Ceremony Documentary only, 10×10 linen album

Photography Only:
- **Photography Premier**: $3,995 (lead + associate 6 hrs, engagement mini-session, 10×10 album)
- **The Atelier**: $3,195 (lead only, digital gallery)

Cinematography Only:
- **Cinematic Premier**: $4,495 (lead + associate 6 hrs, full documentary, social teaser, next-day teaser)
- **The Documentary**: $3,495 (lead only, 2-3 min highlight, ceremony documentary)

**Film Terminology (Standardized)**
- Highlight Film (3-5 min): Short artistic recap (2-3 min for Editorial/Documentary)
- Feature Film (15-20 min): Extended documentary (Bespoke exclusive)
- Full Documentary Film: Complete ceremony + reception documentation
- Same-Day Edit: 3-5 min film premiered at reception (Bespoke & Estate)
- Social Teaser (60 sec): Quick social clip

**Album Differentiation Strategy**
- Bespoke: 16×16 leather-bound with archival box
- Estate: 14×14 leather-bound
- Signature: 12×12 linen-bound
- Editorial/Premier/Documentary: 10×10 linen album

**Artist Matching**
- All packages use "Curator-Matched" artist selection (curation over choice)

**Add-Ons**
- Engagement Session: $895 (included in Bespoke & Estate)
- Second Photographer: $795 (4 hours)
- Second Cinematographer: $1,295 (6 hours, included in Bespoke/Estate/Signature)
- Same-Day Edit: $1,495 (included in Bespoke & Estate)
- Next-Day Teaser: $395 (60-second social clip)
- Aerial Cinematography: $495
- Rehearsal Dinner: $1,495 (2 hours small team, included in Bespoke full team)
- Heirloom Album Upgrade: $695 (upgrade to leather-bound)
- Parent Album Set: $795 (two 8×8 linen, included in Bespoke/Estate/Signature)
- Rush Delivery: $995 (2-week turnaround, included in Bespoke)

**Style Quiz Recommendations**
- Connoisseur → Bespoke ($15,995)
- Visionary → Estate ($11,495)
- Romantic/Modernist → Signature ($7,495)
- Storyteller → Editorial ($5,495)