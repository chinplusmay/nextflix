# 🎬 Nextflix

A modern Netflix clone built with React, featuring AI-powered movie recommendations using OpenAI's GPT API and real-time movie data from TMDB.

## ✨ Features

### 🎥 Core Features
- **Browse Movies**: Discover movies across multiple categories
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- **Movie Trailers**: Watch official movie trailers directly on the platform
- **Responsive Design**: Optimized for all screen sizes with Tailwind CSS

### 🤖 AI-Powered Search
- **GPT Integration**: Intelligent movie search powered by OpenAI
- **Smart Recommendations**: Get personalized movie suggestions based on natural language queries
- **Multi-language Support**: Search in multiple languages (English, Hindi, Spanish, French, German)

### 🔐 Authentication
- **Firebase Authentication**: Secure user login and registration
- **Protected Routes**: Authenticated user experience
- **User Profiles**: Personalized user avatars

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: Firebase
- **AI Integration**: OpenAI API
- **Movie Data**: TMDB API
- **Hosting**: Firebase Hosting
- **Icons**: React Icons

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- TMDB API key
- OpenAI API key

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/chinplusmay/nextflix
cd nextflix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your API keys:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
```

**API Keys Setup:**

- **TMDB API**: Get your key from [TMDB](https://www.themoviedb.org/settings/api)
- **OpenAI API**: Get your key from [OpenAI Platform](https://platform.openai.com/api-keys)
- **Firebase**: Create a project at [Firebase Console](https://console.firebase.google.com/)

### 4. Run the application

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextflix/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── GptMoviesSuggestions.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── SecondaryContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   ├── hooks/
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   └── useUpcomingMovies.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── configSlice.js
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   ├── gptSlice.js
│   │   ├── languageConstants.js
│   │   ├── movieSlice.js
│   │   ├── openai.js
│   │   ├── userSlice.js
│   │   └── validate.js
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── firebase.json
└── package.json
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App

## 🔑 Key Features Explained

### GPT Movie Search
The GPT-powered search allows users to ask for movie recommendations in natural language. For example:
- "Show me some action movies with car chases"
- "Romantic comedies from the 2000s"
- "Movies similar to Inception"

The system uses OpenAI's GPT to understand the query and returns relevant movie suggestions.

### Custom Hooks
- `useNowPlayingMovies`: Fetches currently playing movies
- `usePopularMovies`: Fetches popular movies
- `useTopRatedMovies`: Fetches top-rated movies
- `useUpcomingMovies`: Fetches upcoming releases
- `useMovieTrailer`: Fetches movie trailers from YouTube

### State Management
Redux Toolkit is used for efficient state management with slices for:
- User authentication state
- Movie data
- GPT search results
- UI configuration
- Language preferences

## 🌐 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations. Key features:
- Responsive design
- Custom color schemes
- Hover effects and transitions
- Optimized for performance

## 🧪 Testing

The project includes testing setup with:
- Jest
- React Testing Library
- User Event Testing

Run tests with:
```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Your Name - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data API
- [OpenAI](https://openai.com/) for GPT integration
- [Firebase](https://firebase.google.com/) for authentication and hosting
- [Netflix](https://netflix.com/) for design inspiration

## 📧 Contact

For any questions or suggestions, feel free to reach out!

---

**Note**: This is a learning project and is not affiliated with Netflix, Inc.
