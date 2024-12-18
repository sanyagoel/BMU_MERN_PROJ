## Task Management App

A task management web application with full CRUD functionality. It allows users to create, view, edit, and delete tasks.

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

1. **Node.js**
2. **MongoDB** (for the backend)
3. **Postman Documentation for Backend APIs** (optional)
   https://volunteer-app.postman.co/workspace/volunteer-app-Workspace~d1bfea61-5c43-4c4e-bd98-f6c40da7e030/collection/35004049-222c1645-8bce-41ce-a976-1b8fa3767f4c?action=share&creator=35004049
---

## Cloning the Repository

1. Open your terminal/command prompt.
2. Run the following command to clone the repository:

```bash
git clone https://github.com/sanyagoel/BMU_MERN_PROJ.git

```

Navigate to the project directory:

```bash
cd BMU_MERN_PROJ

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
* If using MongoDB locally, make sure the `MONGOOSE_PATH` environment variable is correctly set. You can create a `.env` file in the backend directory with the following:

```
MONGOOSE_PATH = "mongodb://localhost:27017/mern_proj_final"
```

**Frontend:**

* The frontend is set to communicate with the backend on http://localhost:3000. If your backend is hosted elsewhere, you can change the API URL in the frontend code (typically in the `src/api.js` or similar file).

## Usage

Open your browser and go to http://localhost:5173. You should see the task management app. You can create, edit, and delete tasks.

## Sample Outputs

![image](https://github.com/user-attachments/assets/9e98c125-8133-43b3-9d02-3671e62cb57c)


Edit any of your particular task : 

![image](https://github.com/user-attachments/assets/c78c3168-7de8-4290-b200-00d656731224)

![image](https://github.com/user-attachments/assets/54788b1e-9fd7-4551-81ed-bb62cd2319d7)


See the changes in your mongoDB database : 

![image](https://github.com/user-attachments/assets/126eb9df-5bb4-4a2a-b389-a5aa563b1a7f)


Delete any of your tasks : 

![image](https://github.com/user-attachments/assets/d839977f-b9ae-40a8-a67b-c9d5fadf7dea)


Create new tasks : 

![image](https://github.com/user-attachments/assets/27102035-5807-460d-84ca-17832f33d061)

![image](https://github.com/user-attachments/assets/0560034d-320c-4623-b0a2-706deaad0559)

![image](https://github.com/user-attachments/assets/2b646c67-19ea-4640-9b9a-e16934cbed4b)


**Filter Tasks**

See all the completed tasks : 

![image](https://github.com/user-attachments/assets/d6bd8644-ebcd-47e8-a5e5-18026f0b43a1)

See all the incomplete tasks : 

![image](https://github.com/user-attachments/assets/a5edf970-7fde-499c-998f-886a428b1188)








