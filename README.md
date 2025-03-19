# Centralized Task Manager

A task management application that allows users to **add, update, delete, and mark tasks as completed**. Built using **React, Node.js, Express, and MongoDB**.

## Features
- Add a new task (Title, Description)
- Mark a task as completed
- Edit a task
- Delete a task
- View all tasks
- Mobile responsive UI
- Navigation with React Router

## Tech Stack
### Frontend
- React.js
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB instance)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/RahulRS15/centralized-task-manager.git
   cd centralized-task-manager/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` (or the specified Vite port).

## API Endpoints
| Method | Endpoint      | Description          |
|--------|--------------|----------------------|
| GET    | `/`     | Get all tasks       |
| POST   | `/`     | Create a new task   |
| PUT    | `/:id`  | Update a task       |
| DELETE | `/:id`  | Delete a task       |

## Deployment
### Frontend
- Deploy on **Vercel** or **Netlify**

### Backend
- Deploy on **Render**, **Railway**, or any cloud platform

## Additional Notes
- Ensure MongoDB Atlas is properly configured for data persistence.
- API documentation can be provided via Postman collection.




