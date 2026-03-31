# Event Landing Page - API Documentation

## BASE URL

```
http://localhost:3001/api
```

## Authentication

JWT Bearer token in Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints (To be implemented)

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "Backend is running ✅"
}
```

### Auth Endpoints
```
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/register (admin only)
```

### Event Endpoints
```
GET /api/event
GET /api/event/:id
POST /api/event (admin only)
PUT /api/event/:id (admin only)
DELETE /api/event/:id (admin only)
```

### Schedule Endpoints
```
GET /api/schedule
GET /api/schedule/:id
POST /api/schedule (admin only)
PUT /api/schedule/:id (admin only)
DELETE /api/schedule/:id (admin only)
```

### Speaker Endpoints
```
GET /api/speakers
GET /api/speakers/:id
POST /api/speakers (admin only)
PUT /api/speakers/:id (admin only)
DELETE /api/speakers/:id (admin only)
```

### Attendee Endpoints
```
POST /api/attendees (registration)
GET /api/attendees/:email
PUT /api/attendees/:email
DELETE /api/attendees/:email
```

### Ticket Endpoints
```
GET /api/tickets/:id
POST /api/tickets (generate)
PUT /api/tickets/:id (scan/validate)
```

### Gallery Endpoints
```
GET /api/gallery
GET /api/gallery/:id
POST /api/gallery (admin only)
DELETE /api/gallery/:id (admin only)
```

### Admin Endpoints
```
GET /api/admin/attendees (list all)
GET /api/admin/reports (analytics)
GET /api/admin/tickets (ticket management)
```

## Response Format

Success (200):
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

Error (4xx/5xx):
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Models

### Event
- id: String (UUID)
- name: String
- description: String
- date: DateTime
- location: String
- capacity: Int
- image: String (URL)

### Speaker
- id: String (UUID)
- name: String
- bio: String
- photo: String (URL)
- twitter: String
- linkedin: String
- instagram: String

### Schedule
- id: String (UUID)
- time: String
- topic: String
- speakerId: String (FK)
- eventId: String (FK)

### Attendee
- id: String (UUID)
- email: String (unique)
- firstName: String
- lastName: String
- phone: String
- company: String
- status: String (registered|cancelled|attended)

### Ticket
- id: String (UUID)
- code: String (unique)
- qrCode: String
- attendeeId: String (FK)
- status: String (valid|used|cancelled)
- scanned: Boolean
- scannedAt: DateTime

### Gallery
- id: String (UUID)
- title: String
- image: String (URL)
- eventId: String (FK)

## Error Codes

- `INVALID_CREDENTIALS` - Login failed
- `UNAUTHORIZED` - Missing or invalid token
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `VALIDATION_ERROR` - Input validation failed
- `DUPLICATE_EMAIL` - Email already registered
- `SERVER_ERROR` - Internal server error

## Rate Limiting

- Registration endpoint: 10 requests per minute per IP
- API endpoints: 100 requests per minute per IP
- Admin endpoints: 50 requests per minute per token

## CORS

Allowed origins (configurable):
- http://localhost:3000 (development)
- Production domain (to be configured)

## Pagination

List endpoints support pagination:
```
GET /api/attendees?page=1&limit=20
```

Response:
```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```
