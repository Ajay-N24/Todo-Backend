# Todo Backend Application
This is a Node.js backend application for managing a Todo list with user authentication. Users must sign up or sign in to create and manage their todo lists. The application supports CRUD operations on todos, searching, tagging, and pagination. User information and todo lists are stored in MongoDB, and authentication tokens are used for secure access.

## Features
User Authentication:
- Sign up and sign in.
- Authentication token generation using user credentials.

## Todo Management:

- Create, update, delete, and view todos.
- View a list of todos with pagination.
- View a specific todo.
- Search todos based on a search string.
- Tag todos as pinned or favorite.<br/><br/>
## Tech Stack
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database.
- Mongoose: ODM for MongoDB.
- JWT: JSON Web Token for authentication.
- bcrypt: Library for hashing passwords

## Getting Started

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.

### Installation
1. Clone the repository:
```
git clone https://github.com/yourusername/todo-backend.git
cd todo-backend
```
2. Install dependencies:
```
npm install
```
3. Create a .env file:
```
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_jwt_secret
```
4. Start the server:
```
npm start
```
The server will be running on http://localhost:5000.
