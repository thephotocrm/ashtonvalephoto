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
- **The Bespoke Collection**: $14,495 (Flagship - 8 weddings/year)
  - 12 hours coverage, 5 artists, full rehearsal dinner, 16×16 leather album
- **The Estate Collection**: $10,495 (15 weddings/year)
  - 10 hours coverage, 4 artists, 14×14 leather album
- **The Signature Collection**: $6,995 (25 weddings/year)
  - 8 hours coverage, dual cinematography, 12×12 linen album
- **The Editorial Suite**: $4,995 (30 weddings/year)
  - 8 hours coverage, single cinematographer, 10×10 album

Photography Only:
- **Photography Premier**: $3,695 (with associate)
- **The Atelier**: $2,895 (lead only)

Cinematography Only:
- **Cinematic Premier**: $3,995 (with associate, includes social teaser)
- **The Documentary**: $3,195 (lead only, includes highlight film)

**Film Terminology (Standardized)**
- Highlight Film (3-5 min): Short artistic recap
- Feature Film (15-20 min): Extended documentary (Bespoke exclusive)
- Full Wedding Film: Complete ceremony + reception documentation
- Same-Day Edit: Highlight premiered at reception (Bespoke & Estate)
- Social Teaser (60 sec): Quick social edit, next-day delivery

**Album Differentiation Strategy**
- Bespoke: 16×16 leather-bound with archival box
- Estate: 14×14 leather-bound
- Signature: 12×12 linen-bound
- Editorial/Premier: 10×10 signature album

**Artist Matching**
- All packages use "Curator-Matched" artist selection (curation over choice)

**Add-Ons**
- Engagement Session: $895 (included in Bespoke & Estate)
- Second Photographer: $595 (6 hours)
- Second Cinematographer: $995 (6 hours, included in Bespoke/Estate/Signature)
- Same-Day Edit: $1,495 (included in Bespoke & Estate)
- Social Teaser: $395 (included in Cinematic Premier)
- Aerial Cinematography: $495
- Rehearsal Dinner: $1,295 full evening (included in Bespoke)
- Parent Album Set: $695 (included in Bespoke/Estate/Signature)
- Rush Delivery: $695 (included in Bespoke)

**Style Quiz Recommendations**
- Connoisseur → Bespoke ($14,495)
- Visionary → Estate ($10,495)
- Romantic/Modernist → Signature ($6,995)
- Storyteller → Editorial ($4,995)