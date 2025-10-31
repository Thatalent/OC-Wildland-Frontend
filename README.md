# OC Wildland Frontend

A modern React application for monitoring and managing Orange County's wildland areas. Built with React, TypeScript, Vite, Material-UI, Tailwind CSS, and Apollo GraphQL.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Material-UI (MUI)** for component library
- **Tailwind CSS** for utility-first styling
- **Apollo Client** for GraphQL data management
- **React Router** for navigation

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd OC-Wildland-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your GraphQL endpoint:
```
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
Opens the application at `http://localhost:3000` with hot reload enabled.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── lib/               # Configuration files (Apollo, theme)
├── graphql/           # GraphQL queries, mutations, and types
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Styling

This project uses a combination of:
- **Material-UI** for pre-built components
- **Tailwind CSS** for utility classes and custom styling
- **MUI Theme** for consistent design tokens

Tailwind's preflight styles are disabled to avoid conflicts with MUI components.

## 🔗 GraphQL Integration

The application is set up with Apollo Client for GraphQL integration. Update the queries in `src/graphql/queries.ts` to match your GraphQL schema.

Example usage:
```typescript
import { useQuery } from '@apollo/client'
import { GET_WILDLANDS } from '../graphql/queries'

const { loading, error, data } = useQuery(GET_WILDLANDS)
```

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service.

## 📝 Environment Variables

- `VITE_GRAPHQL_ENDPOINT` - GraphQL API endpoint
- `VITE_API_BASE_URL` - Base URL for REST APIs (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the terms specified in the LICENSE file.
