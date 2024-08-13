# Car Dealer Application

## Overview

This Next.js application provides a user-friendly interface for filtering and displaying vehicle models based on type and model year. It utilizes Tailwind CSS for styling and incorporates best practices for responsive design and accessibility. The application consists of two main pages: a Filter Page and a Result Page.

## Features

1. **Filter Page:**

   - Allows users to select a vehicle type and model year.
   - Fetches vehicle types from an external API.
   - Disables the "Next" button until both selections are made.

2. **Result Page:**

   - Displays a list of vehicle models based on the selected vehicle type and model year.
   - Fetches vehicle models using the selected vehicle type and model year from an external API.

3. **Static Generation:**

   - Utilizes Next.js's `generateStaticParams` to pre-render pages at build time.

4. **Suspense for Data Fetching:**
   - Implements React's `Suspense` component for handling loading states during data fetching.

## Installation

### Prerequisites

- Node.js (v19.x or later)
- npm or yarn

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MykhailoIvchenko/car-dealer-app.git
   cd car-dealer-app
   ```

2. **Install Dependencies:**
   npm install

# or

yarn install

# or

bun install

2. **Environment Variables:**
   Create a .env.local file in the root directory.
   Add any required environment variables.

3. **Run the application:**

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

- **`components/`:** Contains components which are not pages.
- **`services/`:** Services for getting and handling data.
- **`utils/`:** Types, constants, and enums.
- **`hooks/`:** Custom hooks for data receiving and managing state.
