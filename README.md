
# Mausam – A Weather Dashboard

![Header GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVieG94NHM0YnRtejltOXQxN3R4MXZocWkxdnlkbGQxaGp2MXNydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6b9VSLCKfU85n7xhLG/giphy.gif)

A modern, responsive weather dashboard that delivers real-time conditions, temperature, humidity, wind, and more—powered by OpenWeather and built for a seamless experience across devices.

## About This Project
Mausam is a clean and intuitive weather app that enables users to:
- Search any city and instantly view current weather
- See temperature in Celsius, with humidity, wind speed, and descriptions
- Enjoy a responsive UI optimized for desktop and mobile
- Experience fast load times and reliable data via a Node/Express backend or direct API proxy

## Tech Stack
- Frontend: React (Vite), Tailwind (optional), Vercel deployment
- Backend: Node.js, Express.js, Render deployment
- External API: OpenWeather
- Package Manager: npm

## Key Features
- Real-Time Weather: Fetches live data from OpenWeather
- City Search: Query by city name
- Metric Units: Celsius output by default
- Clean UI: Simple, responsive interface
- Deploy-Ready: Frontend on Vercel, backend on Render

## Live Demo
- Frontend: https://mausam-a-weather-dashboard.vercel.app/
- Backend: Hosted on Render

## API Integration
Mausam uses the OpenWeather endpoint:
```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
```
- q: City name
- appid: Your OpenWeather API key
- units: metric for Celsius

You can consume this API directly from the frontend or via a backend proxy route for improved security and rate limit handling.

## Installation & Setup

Prerequisites
- Node.js (v14+)
- npm
- OpenWeather API key

1. Clone the repository
```
git clone https://github.com/ANUBHAV-03042004/mausam-a-weather-dashboard.git
cd mausam-a-weather-dashboard
```

2. Setup Backend
```
cd backend
npm install
```
Create an .env file:
```
PORT=5000
OPENWEATHER_API_KEY=your_openweather_api_key
NODE_ENV=development
```
Start backend:
```
npm start
```
Backend runs at http://localhost:5000

3. Setup Frontend
```
cd ../frontend
npm install
```
Create a .env file:
```
VITE_BACKEND_URL=http://localhost:5000
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```
Start frontend:
```
npm run dev
```
Frontend runs at http://localhost:3000

## Project Structure

Root
- route/
- server.js
- package.json
- package-lock.json
- public/

Frontend
- src/
- index.html
- vite.config.js
- package.json
- eslint.config.js
- README.md

Backend
- server.js
- route/
- package.json
- .gitignore

Note: The app uses Express and Node for backend, and React (Vite) for frontend as per your repository layout.

## Usage Guide
- Open the app
- Enter a city name (e.g., “Lucknow”)
- View current weather, temperature (°C), humidity, and wind speed
- Search different cities for quick comparisons

## API Endpoints
- GET /api/weather?city=CityName  
  Returns weather data for the provided city (proxying to OpenWeather).  
  Example:
  ```
  /api/weather?city=Lucknow
  ```

If directly calling OpenWeather from the frontend, ensure your API key is securely managed. Using a backend proxy is recommended to avoid exposing your key.

## Deployment
- Frontend on Vercel: https://mausam-a-weather-dashboard.vercel.app/
- Backend on Render: Connect your backend repo, set environment variables (OPENWEATHER_API_KEY, PORT), and deploy.

Environment Variables on Render
- OPENWEATHER_API_KEY
- PORT (e.g., 5000)
- NODE_ENV (production)

Environment Variables on Vercel
- VITE_BACKEND_URL (Render backend URL)
- VITE_OPENWEATHER_API_KEY (optional if calling OpenWeather directly from frontend—prefer proxy)

## Contributing
Contributions are welcome!
- Add enhancements (forecast view, hourly breakdown)
- Improve UI/UX (themes, animations)
- Strengthen backend (caching, rate limiting)
- Report bugs and open issues

Steps:
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push: `git push origin feature/NewFeature`
5. Open a Pull Request

## Acknowledgments
- OpenWeather – for weather data
- Vercel – for frontend hosting
- Render – for backend hosting
- React, Express, Node.js – core technologies

---

![Footer GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW95MHQ0bmhrbTBiajNmbDFsODB6NWo5OXIxNHhqeGF3amU4OTdydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3gAO9yx102EYTUG5E6/giphy.gif)

Go Mausam! Stay informed, stay prepared.
