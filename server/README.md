# AfroVoice Backend

This is the backend server for the AfroVoice application, an Amharic audio transcription service.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   ```

## Running the Server

### Development mode
```
npm run dev
```
This will start the server with nodemon, which automatically restarts when file changes are detected.

### Production mode
```
npm start
```

## API Endpoints

- **GET /** - Test endpoint, returns "AfroVoice backend is running"

## Project Structure

```
server/
├── routes/            # Express route handlers
├── controllers/       # Business logic for routes
├── config/            # DB config, middleware
├── .env               # Environment variables
├── server.js          # Entry point
├── package.json       # Dependencies
└── README.md          # Documentation
```

## Future Implementations

- Database integration for storing transcriptions
- Authentication system
- File upload functionality for audio files
- Integration with transcription services
