## Task Management App

A task management web application with full CRUD functionality. It allows users to create, view, edit, and delete tasks.

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

1. **Node.js**
2. **MongoDB** (for the backend)
---

## Cloning the Repository

1. Open your terminal/command prompt.
2. Run the following command to clone the repository:

```bash
git clone https://github.com/your-username/task-management-app.git
```

Navigate to the project directory:

```bash
cd task-management-app
```

## Installing Dependencies

### Backend (Node.js + Express + MongoDB)

Navigate to the backend directory:

```bash
cd backend
```

Install the necessary dependencies for the backend:

```bash
npm install
```

### Frontend (React)

Navigate to the frontend directory:

```bash
cd frontend
```

Install the necessary dependencies for the frontend:

```bash
npm install
```

## Running the Application Locally

### Backend

Navigate to the backend directory (if you're not already there).

Run the server:

```bash
npm start
```

This will start the backend server on http://localhost:3000.

### Frontend

Navigate to the frontend directory (if you're not already there).

Run the development server:

```bash
npm run dev
```

This will start the frontend server on http://localhost:5173.

## Configuration

**Backend:**

* Ensure your MongoDB instance is running locally or you're connected to MongoDB Atlas.
* If using MongoDB locally, make sure the `MONGO_URI` environment variable is correctly set. You can create a `.env` file in the backend directory with the following:

```
MONGO_URI=mongodb://localhost:27017/taskmanagement
```

**Frontend:**

* The frontend is set to communicate with the backend on http://localhost:3000. If your backend is hosted elsewhere, you can change the API URL in the frontend code (typically in the `src/api.js` or similar file).

## Usage

Open your browser and go to http://localhost:5173. You should see the task management app. You can create, edit, and delete tasks.

## Sample Outputs

![image](https://github.com/user-attachments/assets/d05d5ff1-b15a-4717-93bd-7120ee4369a6)

Edit any of your particular task : 

![image](https://github.com/user-attachments/assets/9426bbbc-72f4-4b20-9c88-b7e5e47becbe)

![image](https://github.com/user-attachments/assets/4478fcd8-0991-4294-976b-2131aea85b97)

See the changes in your mongoDB database : 

![image](https://github.com/user-attachments/assets/1f55f998-fe48-4ca2-8bae-1f0abc341112)

Delete any of your tasks : 

![image](https://github.com/user-attachments/assets/e2829dce-f56b-449a-a869-507c3168afe7)

Create new tasks : 

![image](https://github.com/user-attachments/assets/51294fac-7710-45e7-9311-50d6d666a300)

![image](https://github.com/user-attachments/assets/0560034d-320c-4623-b0a2-706deaad0559)

![image](https://github.com/user-attachments/assets/2b646c67-19ea-4640-9b9a-e16934cbed4b)







