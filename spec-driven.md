# Event Landing Page - Specification Driven Development

## Project Overview

This project is a full-stack landing page for AI workshops and conferences. It supports attendee registration, ticketing, speaker management, photo galleries, and an admin dashboard. The application is designed to handle up to 100 attendees with features like QR code tickets, schedule management, and responsive design.

## Target Audience

The landing page is directed at:
- Students
- Teachers
- Disseminators (educators and promoters of AI knowledge)

## Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: TailwindCSS
- **Authentication**: JWT

## Architecture

The architecture follows a horizontal scaling approach, allowing for potential deployment to cloud platforms. The monorepo structure separates frontend and backend applications for better maintainability.

### Folder Structure

The current folder structure will be maintained:
```
event-landing/
├── apps/
│   ├── frontend/          # Next.js 14 app (port 3004)
│   │   ├── app/           # App Router pages
│   │   ├── components/    # Reusable React components
│   │   └── tailwind.config.js
│   └── backend/           # Express.js API (port 3001)
│       ├── src/routes/    # API endpoints
│       ├── prisma/        # Database schema & migrations
│       └── .env           # Environment variables
├── docs/                  # Documentation
└── package.json           # Root dependencies & scripts
```

## Data Model

The data model is centralized using PostgreSQL. It will be designed to support connections to both Supabase and Google Cloud. The model will include a configuration flag (true/false) to switch between providers.

### Core Models

- **Event**: Basic event information
- **Attendee**: Registration details
- **Speaker**: Speaker profiles
- **Schedule**: Event schedule items
- **Gallery**: Photo gallery
- **Admin**: Administrative users

## Development Plan

The development will be orchestrated by a primary agent that coordinates specialized agents for each component:
- **Frontend Agent**: Handles UI/UX development with Next.js and TypeScript
- **Backend Agent**: Manages API endpoints, authentication, and server logic
- **Database Agent**: Designs and implements Prisma schemas and migrations
- **Testing Agent**: Creates and runs validation tests
- **Deployment Agent**: Handles cloud scaling and deployment configurations

### Agent Orchestration

The primary agent will:
1. Analyze requirements and generate detailed plans
2. Assign tasks to specialized agents
3. Review outputs for spec compliance
4. Coordinate integration and testing
5. If any agent generates content outside specifications, the primary agent will query for clarification before proceeding

## Validation Process

Before any code is executed or moved to production:
1. Input/output validation tests will be run
2. Spec compliance checks will be performed
3. Integration tests will validate component interactions
4. Manual review for hallucination or out-of-spec generation

## Specification Updates

The specification document will be updated only after:
- Pull request acceptance
- Successful validation and testing
- Approval from project stakeholders

## Improvements

### Light/Dark Mode Toggle

Implement a global light and dark mode toggle with the following requirements:
- **Toggle Button**: Round button positioned consistently across all pages
- **Scope**: Changes the entire application's theme, not just individual tabs
- **Color Palette**: Strictly use the predefined color palette for both modes
- **Persistence**: User preference saved and restored on subsequent visits
- **Accessibility**: Ensure proper contrast ratios in both modes

### Color Palette

Define a consistent color palette for light and dark modes:
- Primary colors
- Secondary colors
- Text colors
- Background colors
- Accent colors

## Next Steps

1. Review and approve this specification
2. Initialize development with agent orchestration
3. Begin with core architecture implementation
4. Implement light/dark mode feature
5. Proceed with component development and testing
