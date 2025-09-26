# Rang-e-Umeed (Colors of Hope) - Climate Art Initiative

## Overview

Rang-e-Umeed is a climate-art initiative website that empowers displaced women and climate refugees in Pakistan through traditional art techniques. The platform showcases natural dye-making workshops, mural therapy sessions, and community art projects. Built as a full-stack web application with a React frontend and Express backend, it serves as both an informational portal and resource hub for the initiative's activities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui components for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Typography**: Google Fonts integration (Libre Baskerville, Poppins, DM Sans, Fira Code, Geist Mono)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for server bundling, Vite for client bundling

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations`
- **Development Storage**: In-memory storage implementation for development/testing

### Development and Build Tools
- **Bundler**: Vite with React plugin and runtime error overlay
- **Package Manager**: npm with lockfile version 3
- **TypeScript**: Strict mode enabled with path mapping for clean imports
- **Code Quality**: ESNext modules with bundler resolution
- **Development Server**: Integrated Vite dev server with HMR support

### Project Structure
- **Monorepo Structure**: Client (`/client`), server (`/server`), and shared (`/shared`) directories
- **Asset Management**: Static assets served from `/attached_assets` with Vite alias
- **Path Aliases**: Clean import paths using `@/` for client components and `@shared/` for shared code

### External Dependencies

#### UI and Styling
- **Radix UI**: Complete suite of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant API for component styling
- **Embla Carousel**: Touch-friendly carousel component

#### Backend Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage

#### Development Tools
- **Replit Integration**: Cartographer and dev banner plugins for Replit environment
- **Date Handling**: date-fns for date manipulation and formatting
- **Form Handling**: React Hook Form with Hookform resolvers and Zod validation
- **Query Management**: TanStack React Query for API state management