# Financial Dashboard Application

A modern React-based financial dashboard application featuring a comprehensive dashboard and user settings management.

## Features

### Dashboard

- Financial cards overview
- Transaction history
- Weekly activity charts
- Expense statistics with interactive charts
- Money transfer functionality
- Real-time data visualization using Recharts

### Settings

- Profile management
- User preferences configuration
- Security settings
- Profile image upload
- Form validation using React Hook Form

### Performance Optimizations

- Lazy loading for main pages (Dashboard and Settings)
- Code splitting for better initial load time
- Loading indicators for better user experience
- Optimized bundle size through dynamic imports

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (version 14.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   └── LoadingSpinner.tsx  # Loading indicator for lazy-loaded components
  ├── pages/
  │   ├── Dashboard.tsx  # Main dashboard component (lazy loaded)
  │   └── Settings.tsx   # Settings management (lazy loaded)
  ├── types/         # TypeScript type definitions
  ├── services/      # API services
  ├── mock/          # Mock data for development
  └── config/        # Configuration files
```

## Usage

### Dashboard Page

The dashboard provides:

- Financial overview cards
- Interactive charts for expense tracking
- Transaction history
- Money transfer functionality
- Weekly activity monitoring

### Settings Page

The settings page allows users to:

- Edit profile information
- Upload profile pictures
- Manage preferences
- Configure security settings
