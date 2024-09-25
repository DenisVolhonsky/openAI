```markdown
# OpenAI Testing Project

This is a project for testing the OpenAI API. The repository contains a simple frontend and backend part of the application.

## Description

The application allows you to input any text query and get a response from the OpenAI API. The frontend is built using React, while the backend is developed with Node.js, Express, and Axios for communication with the OpenAI API.

## How to Run the Project

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your-openai-api-key
   ```

4. Start the server:
   ```bash
   npm start
   ```

   Alternatively, you can run the backend with the command `not-server.js`:
   ```bash
   node not-server.js
   ```

### Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

### Usage

Open your browser and go to [http://localhost:3000](http://localhost:3000). Enter a text query in the input field and submit it. The response from the OpenAI API will be displayed on the screen.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express, Axios
- **API**: OpenAI API
```
