---
description: "Frontend development: Next.js 14, React 18, TailwindCSS. Use for component creation, routing, styling, and UI development."
applyTo: "apps/frontend/**/*.{js,jsx,ts,tsx,json,css,md}"
---

# Frontend Development Instructions

## Next.js 14 + React 18 Patterns

### Component Structure
```jsx
// ✅ Preferred: Functional component with hooks
export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // Side effects here
  }, [dependencies])

  return (
    <div className="component-classes">
      {/* JSX content */}
    </div>
  )
}

// ❌ Avoid: Class components
class ComponentName extends React.Component {
  // Not used in this project
}
```

### File Organization
```
apps/frontend/
├── app/                    # App Router pages
│   ├── layout.jsx         # Root layout (Header/Footer)
│   ├── page.jsx           # Home page (/)
│   ├── globals.css        # Global styles
│   └── [route]/           # Dynamic routes
│       ├── page.jsx       # Route page
│       └── loading.jsx    # Loading UI
├── components/            # Reusable components
│   ├── ComponentName.jsx  # One component per file
│   └── ui/                # Shared UI components
├── lib/                   # Utilities
│   ├── api.js            # API client functions
│   └── utils.js          # Helper functions
└── styles/                # Additional stylesheets
```

### Routing (App Router)
```jsx
// app/speakers/page.jsx
export default function SpeakersPage() {
  return (
    <div>
      <h1>Speakers</h1>
      {/* Page content */}
    </div>
  )
}

// Navigation
import Link from 'next/link'

<Link href="/speakers" className="nav-link">
  Speakers
</Link>
```

## Styling Conventions

### TailwindCSS Classes
```jsx
// ✅ Use utility classes directly
<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
  <h2 className="text-2xl font-bold mb-4">Title</h2>
  <p className="text-gray-600">Content</p>
</div>

// ✅ Custom color palette
<div className="bg-primary text-white">Primary button</div>
<div className="bg-secondary text-theme">Secondary element</div>
<div className="bg-surface">Surface background</div>
```

### CSS Custom Properties
```css
/* In globals.css */
:root {
  --clr-primary: #44749D;
  --clr-secondary: #C6D4E1;
  --clr-surface: #EBE7E0;
  --clr-text: #44749D;
  --clr-muted: #BDB8AD;
}

/* Usage in Tailwind */
.text-theme { color: var(--clr-text); }
.bg-theme { background-color: var(--clr-surface); }
```

### Responsive Design
```jsx
// ✅ Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>

// ✅ Breakpoint prefixes
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## State Management

### Simple State (Preferred)
```jsx
// ✅ useState for local component state
const [searchTerm, setSearchTerm] = useState('')
const [isLoading, setIsLoading] = useState(false)

// ✅ useEffect for side effects
useEffect(() => {
  fetchData()
}, [dependencies])
```

### API Integration
```jsx
// lib/api.js
const API_BASE = 'http://localhost:3001/api'

export async function getSpeakers() {
  const response = await fetch(`${API_BASE}/speakers`)
  return response.json()
}

// In component
const [speakers, setSpeakers] = useState([])

useEffect(() => {
  getSpeakers().then(setSpeakers)
}, [])
```

## Form Handling

### React Hook Form + Zod
```jsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
})

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

## Component Patterns

### Props Interface
```jsx
// ✅ Define prop types with JSDoc or TypeScript
/**
 * @param {Object} props
 * @param {string} props.title - The card title
 * @param {string} props.description - The card description
 */
export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```

### Conditional Rendering
```jsx
// ✅ Use ternary or && operators
{isLoading ? (
  <div>Loading...</div>
) : (
  <div>Data loaded</div>
)}

// ✅ Array mapping
{speakers.map(speaker => (
  <SpeakerCard key={speaker.id} speaker={speaker} />
))}
```

## Performance Best Practices

### Image Optimization
```jsx
import Image from 'next/image'

// ✅ Use Next.js Image component
<Image
  src={speaker.photo}
  alt={speaker.name}
  width={300}
  height={300}
  className="rounded-lg"
/>
```

### Code Splitting
```jsx
// ✅ Dynamic imports for large components
const AdminDashboard = dynamic(() => import('../components/AdminDashboard'), {
  loading: () => <div>Loading...</div>
})
```

## Accessibility

### Semantic HTML
```jsx
// ✅ Use proper semantic elements
<main>
  <section>
    <h1>Main heading</h1>
    <article>
      <h2>Article title</h2>
      <p>Content</p>
    </article>
  </section>
</main>
```

### ARIA Labels
```jsx
// ✅ Add labels for screen readers
<button aria-label="Close menu">
  <XIcon />
</button>

<img src="speaker.jpg" alt="John Smith speaking at conference" />
```

## Testing Guidelines

### Component Testing
```jsx
// __tests__/SpeakerCard.test.jsx
import { render, screen } from '@testing-library/react'
import SpeakerCard from '../components/SpeakerCard'

test('renders speaker name', () => {
  const speaker = { name: 'John Doe', bio: 'Expert' }
  render(<SpeakerCard speaker={speaker} />)

  expect(screen.getByText('John Doe')).toBeInTheDocument()
})
```

## Common Patterns

### Error Boundaries
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>
    }

    return this.props.children
  }
}
```

### Custom Hooks
```jsx
// hooks/useLocalStorage.js
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
```

## Development Workflow

### Adding New Features
1. Create component in `components/` directory
2. Add styles using Tailwind utilities
3. Test responsive design on different screen sizes
4. Add proper TypeScript types or JSDoc comments
5. Write unit tests if needed

### Code Quality
- Run `npm run lint` before committing
- Use Prettier for consistent formatting
- Follow React best practices and hooks rules
- Test components in different states (loading, error, success)