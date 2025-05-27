# Profile Explorer

A React application built with Vite that allows users to view profiles and explore their addresses on an interactive map interface.

## Features

- **Profile Display**: View a collection of profiles with photos, names, descriptions and addresses
- **Interactive Mapping**: Click "Summary" to view location details
- **Search & Filter**: Search profiles by name, description or location
- **Admin Panel**: Add, edit and delete profiles with admin toggle
- **Profile Details**: Detailed view with contact information and interests
- **Responsive Design**: Mobile-friendly interface
- **Loading Indicators**: Smooth loading states for better UX
- **Form Validation**: Robust form validation with error handling

## Setup Instructions

### 1. **Create the Project Structure**

```bash
npm create vite@latest profile-map-app -- --template react
cd profile-map-app
```

### 2. **Install Dependencies**

```bash
npm install
npm install lucide-react
npm install tailwindcss @tailwindcss/vite
```

### 3. **Configure the Vite Plugin**

Edit your `vite.config.ts` (or `vite.config.js`):

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 4. **Import Tailwind in CSS**

In your main CSS file (e.g., `src/index.css` or `src/main.css`), add:

```css
@import "tailwindcss";
```

### 5. **Start the Development Server**

```bash
npm run dev
```

## Features Implementation

### Core Requirements 
- Profile Display with essential information
- Interactive mapping component using OpenStreetMap with Leaflet
- Summary button functionality
- User-friendly experience
- Profile data management (CRUD)
- Search and filter functionality
- Responsive design
- Error handling and validation
- Loading indicators
- Profile details view