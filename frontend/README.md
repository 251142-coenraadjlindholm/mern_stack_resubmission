# Manchester United Task Manager

A React-based task manager with Manchester United branding. The app connects to an Express and MongoDB backend so you can create, view, and delete tasks from a single dashboard.

## Features

- Add tasks with a task name, description, and priority.
- View all saved tasks from the backend.
- Delete tasks from the list.
- See priority styling for Low, Medium, and High items.
- Uses a Manchester United logo and club colors throughout the UI.

## Project Structure

- `frontend/` contains the React app.
- `backend/` contains the Express API and MongoDB model.
- The frontend talks to the API at `http://localhost:5000/tasks`.

## Prerequisites

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection string

## Setup

### 1. Install backend dependencies

From the `backend` folder:

```bash
npm install
```

Create a `.env` file in `backend/` if you want to override the default database connection:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

If `MONGO_URI` is not set, the server falls back to `mongodb://127.0.0.1:27017/taskmanager`.

### 2. Start the backend

From the `backend` folder:

```bash
npm run dev
```

or

```bash
npm start
```

### 3. Install frontend dependencies

From the `frontend` folder:

```bash
npm install
```

### 4. Start the frontend

From the `frontend` folder:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

In the `frontend` folder, you can run:

- `npm start` - Runs the React app in development mode.
- `npm test` - Launches the test runner.
- `npm run build` - Builds the app for production into the `build` folder.
- `npm run eject` - Copies the CRA build configuration into the project.

In the `backend` folder, you can run:

- `npm start` - Starts the API with Node.
- `npm run dev` - Starts the API with Nodemon for development.

## API Endpoints

The backend exposes these routes:

- `GET /tasks` - Fetch all tasks.
- `POST /tasks` - Create a new task.
- `DELETE /tasks/:id` - Delete a task by id.

Each task contains:

- `taskName`
- `description`
- `priority` (`Low`, `Medium`, or `High`)

## Notes

- The frontend expects the backend to be available at `http://localhost:5000`.
- If you change the backend host or port, update `API_URL` in `frontend/src/App.js`.
- The app currently focuses on add, list, and delete task management.
