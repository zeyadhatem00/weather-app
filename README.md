# Weather App

A responsive weather dashboard built with React and TypeScript. It displays current weather conditions and a 7-day forecast for a searched city, with a clean interface, dark mode, and an animated 3D globe.

## Features

- Search for weather by city name.
- View current temperature, condition, and feels-like temperature.
- Check a 7-day forecast with high and low temperatures.
- View additional weather details, including humidity and sunrise/sunset times.
- Switch between light and dark themes.
- Responsive layout for desktop and mobile screens.
- Loading and error states for weather requests.
- Animated 3D globe as a visual element.

## Tech Stack

- **React 19** – UI development
- **TypeScript** – Type safety
- **Vite** – Development server and build tool
- **Tailwind CSS** – Styling
- **WeatherAPI** – Weather and forecast data
- **HeroUI** – UI components
- **Lucide React** – Icons
- **Cobe** – 3D globe visualization
- **Sonner** – Toast notifications

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Runs TypeScript checks and creates a production build. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint. |

## Weather Data

Weather information is provided by [WeatherAPI](https://www.weatherapi.com/). The app loads Cairo by default and allows users to search for another city.

> **API key security:** The current implementation includes the WeatherAPI key in the client-side service file. Client-side keys are visible to users. Before deploying this project publicly, replace the exposed key and route API requests through a secure backend or server-side proxy. Do not commit private credentials to the repository.

## Project Structure

```text
src/
├── components/
│   ├── Forcast/       # Weather dashboard and forecast UI
│   ├── GlobalMap/     # 3D globe section
│   ├── Spinner/       # Loading indicator
│   ├── WeatherIcon/   # Weather condition icons
│   └── ui/            # Reusable UI components
├── Services/          # Weather API requests
├── interface/         # TypeScript data interfaces
├── App.tsx            # Main application component
├── index.css          # Global styles
└── main.tsx           # Application entry point
```

## License

No license has been specified for this project yet.
