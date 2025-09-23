# InsightLine Frontend

A React-based frontend for the InsightLine railway management system.

## Technology Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Query** - Data fetching

## Authentication

The frontend includes a complete authentication system ready for backend integration:

### Demo Credentials (Frontend Only)
- **Email:** user@gmail.com
- **Password:** user123

### Authentication Features
- JWT token management
- Persistent login state
- Protected routes
- User context management
- Logout functionality

### Backend Integration
The authentication system is prepared for backend integration. See `src/lib/api.ts` for API utilities and `src/contexts/AuthContext.tsx` for authentication logic.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (TopBar, Sidebar, etc.)
│   ├── features/        # Feature-specific components
│   └── ui/             # Reusable UI components
├── contexts/           # React contexts (Auth, etc.)
├── hooks/              # Custom hooks
├── lib/                # Utilities and API functions
├── pages/              # Page components
└── types/              # TypeScript type definitions
```

## Notes

- This is a frontend-only implementation
- Backend will be developed separately in Node.js
- All API calls are mocked for development
- Ready for backend integration when available
