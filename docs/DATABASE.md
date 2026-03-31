# Database Schema

## Overview

The Event Landing Page uses PostgreSQL with Prisma ORM for type-safe data access and migrations.

## Models

### User
Admin user accounts for the dashboard
```
- id: String (UUID)
- email: String (unique)
- password: String (hashed)
- name: String
- role: String (default: "admin")
- createdAt: DateTime
- updatedAt: DateTime
```

### Event
Main event information
```
- id: String (UUID)
- name: String
- description: String
- date: DateTime
- location: String
- capacity: Int (default: 100)
- image: String (URL, optional)
- createdAt: DateTime
- updatedAt: DateTime
- schedules: Schedule[] (relation)
- gallery: Gallery[] (relation)
```

### Schedule
Time slots with assigned speakers
```
- id: String (UUID)
- time: String (HH:MM format)
- topic: String
- speakerId: String (FK)
- eventId: String (FK)
- createdAt: DateTime
- updatedAt: DateTime
- event: Event (relation)
- speaker: Speaker (relation)
```

### Speaker
Speaker profiles with contact and social media info
```
- id: String (UUID)
- name: String
- bio: String, optional
- photo: String (URL, optional)
- twitter: String (optional)
- linkedin: String (optional)
- instagram: String (optional)
- email: String (optional)
- createdAt: DateTime
- updatedAt: DateTime
- schedules: Schedule[] (relation)
```

### Attendee
Registered event attendees
```
- id: String (UUID)
- email: String (unique)
- firstName: String
- lastName: String
- phone: String (optional)
- company: String (optional)
- ticketId: String (optional, unique FK)
- status: String (registered|cancelled|attended, default: registered)
- createdAt: DateTime
- updatedAt: DateTime
- ticket: Ticket? (relation)
```

### Ticket
Digital tickets with QR codes
```
- id: String (UUID)
- code: String (unique, e.g., EVT-20260330-001234)
- qrCode: String (base64 encoded image, optional)
- attendeeId: String (unique FK)
- eventId: String (optional FK)
- status: String (valid|used|cancelled, default: valid)
- scanned: Boolean (default: false)
- scannedAt: DateTime (optional)
- createdAt: DateTime
- updatedAt: DateTime
- attendee: Attendee (relation)
```

### Gallery
Event photos and media
```
- id: String (UUID)
- title: String
- image: String (URL)
- eventId: String (FK)
- createdAt: DateTime
- updatedAt: DateTime
- event: Event (relation)
```

## Relationships

```
Event
├── has many Schedule
└── has many Gallery

Schedule
├── belongs to Event
└── belongs to Speaker

Speaker
└── has many Schedule

Attendee
└── has one Ticket

Ticket
└── belongs to Attendee
```

## Indexes

Optimized queries with the following indexes:
- `User.email` - For quick user lookup
- `Attendee.email` - Search by email
- `Attendee.status` - Filter by registration status
- `Schedule.eventId` - Schedule by event
- `Schedule.speakerId` - Schedule by speaker
- `Speaker.name` - Search speakers
- `Gallery.eventId` - Gallery by event
- `Ticket.code` - Ticket lookup
- `Ticket.attendeeId` - Reverse lookup

## Migration Workflow

```bash
# Make changes to schema.prisma

# Create a new migration
npm run migrate

# Apply migrations in production
npm run migrate:deploy

# View database in visual editor
npx prisma studio
```

## Data Validation

### Email
- Pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- Required for Attendee registration
- Unique constraint

### Ticket Code
- Format: `EVT-YYYYMMDD-XXXXXX`
- Automatically generated
- Unique constraint

### Attendee Status
- Values: `registered`, `cancelled`, `attended`
- Drives business logic for analytics

## Seeding

To populate with test data:

```bash
# Create seed file (when ready)
npx prisma db seed
```

## Constraints & Rules

1. **Cascade Deletes**: Deleting an Event cascades to Schedule and Gallery
2. **Unique Emails**: Attendees cannot register twice with same email
3. **One Ticket Per Attendee**: Ticket.attendeeId is unique
4. **Status Transitions**: Attendee status: registered → attended → cancelled
5. **QR Security**: Each ticket has unique code and QR

## Performance Considerations

- Indexes on frequently queried fields
- Pagination recommended for Attendee/Gallery lists
- Consider denormalizing speaker count in Event
- Archive old events for query performance

## Examples

### Get event with schedule and speakers
```javascript
const event = await prisma.event.findUnique({
  where: { id: eventId },
  include: {
    schedules: {
      include: { speaker: true }
    },
    gallery: true
  }
})
```

### Get attendee with ticket
```javascript
const attendee = await prisma.attendee.findUnique({
  where: { email },
  include: { ticket: true }
})
```

### Filter registered attendees
```javascript
const attendees = await prisma.attendee.findMany({
  where: { status: 'registered' },
  skip: (page - 1) * limit,
  take: limit
})
```
