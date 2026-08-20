Support Ticket Management API

A beginner-friendly REST API built with Node.js and Express.js for managing internal IT support tickets.

This project was built as a practical exercise to understand how a real backend application can be structured using Express Routers, MVC architecture, middleware, authentication/authorization, validation, and error handling.

«Project Status: Completed — V1
Database: Hard-coded data / in-memory data
Authentication: Simulated using request headers
Frontend: Not included»

---

🎯 Project Purpose

The purpose of this project is to simulate a small internal IT support system.

Employees can create support tickets for problems such as:

- Laptop issues
- Network/VPN problems
- Software problems
- Access problems
- Other IT-related issues

Support engineers can then view, update, assign, and manage those tickets.

---

🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- MVC Architecture
- Express Router
- Express Middleware
- In-memory / hard-coded data

---

🏗️ Project Architecture

The project follows an MVC-style architecture.

Request
   ↓
Router
   ↓
Middleware
   ↓
Controller
   ↓
Model / Data
   ↓
Response

Folder Structure

src/
│
├── controllers/
│   ├── tickets.controller.js
│   └── users.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── ticket.middleware.js
│
├── models/
│   ├── comments.model.js
│   ├── tickets.model.js
│   └── users.model.js
│
├── routers/
│   ├── tickets.route.js
│   └── users.route.js
│
└── app.js

Responsibilities

Routers

Responsible for defining API endpoints and connecting requests to the appropriate middleware/controller.

Middleware

Responsible for tasks that need to happen before the controller, such as authentication, validation, and error handling.

Controllers

Responsible for handling the request and implementing the application's business logic.

Models

Currently contain the hard-coded application data.

app.js

Responsible for configuring the Express application and registering routers and middleware.

---

🔐 Authentication

This version does not use real authentication such as JWT.

Instead, authentication is simulated using a request header.

Example:

x-user-id: 103

The middleware checks whether the user exists and whether the user has the required role.

For example, only a user with:

role: SUPPORT_ENGINEER

can perform support-engineer operations.

This was intentionally implemented this way because the main purpose of V1 was to understand middleware and authorization flow before introducing a real authentication system.

---

🎫 Ticket Status

Tickets can have the following statuses:

OPEN
IN_PROGRESS
RESOLVED

The API validates the status before updating a ticket.

---

📡 API Endpoints

Tickets

Method| Endpoint| Description
GET| "/api/tickets"| Get all tickets
GET| "/api/tickets/:id"| Get a specific ticket
POST| "/api/tickets"| Create a new ticket
PUT| "/api/tickets/:id"| Update a ticket
PATCH| "/api/tickets/:id/status"| Update ticket status
PATCH| "/api/tickets/:id/assign"| Assign ticket to support engineer
DELETE| "/api/tickets/:id"| Delete a ticket
POST| "/api/tickets/:id/comments"| Add a comment to a ticket

Users

Method| Endpoint| Description
GET| "/api/users/:userId/tickets"| Get tickets belonging to a user

---

🔄 Example Request Flow

For example:

PATCH /api/tickets/1002/assign
x-user-id: 103

The request flows through the application like this:

Client
  ↓
Express Router
  ↓
Authentication Middleware
  ↓
Ticket Middleware
  ↓
Ticket Controller
  ↓
Ticket Model/Data
  ↓
Response

The authentication middleware checks the requesting user.

If the user is not authorized:

401 Unauthorized

The request does not continue to the controller.

If the user is authorized:

next()

The request continues to the next middleware/controller.

---

❌ Error Handling

The project includes centralized error handling middleware.

This allows errors to be handled consistently instead of repeating error-response logic inside every controller.

The project also includes a middleware for handling requests to routes that do not exist.

For example:

GET /api/something-that-does-not-exist

will return an appropriate "404" response.

---

📦 Data

The project currently uses hard-coded data instead of an external database.

The main data entities are:

Users
Tickets
Comments

This was intentional for V1 so that the focus could remain on understanding:

- Express
- Routing
- MVC
- Middleware
- Controllers
- Business logic
- Request/response handling

---

🚀 Getting Started

1. Clone the repository

git clone <your-repository-url>

2. Navigate into the project

cd <project-folder>

3. Install dependencies

npm install

4. Start the server

npm start

Or, if you have a development script:

npm run dev

The API will then be available at:

http://localhost:<PORT>

---

🧪 Testing

The API can be tested using tools such as:

- Postman
- Insomnia
- Thunder Client
- curl

Example:

GET /api/tickets

Example authentication header:

x-user-id: 103

---

🧠 What I Learned

This project helped me understand how different parts of an Express application work together.

Express Router

I learned how to separate routes into different files instead of keeping all routes inside "app.js".

MVC

I learned how to separate routing, business logic, and data responsibilities.

Middleware

This project significantly improved my understanding of middleware.

I implemented middleware for things such as:

- Authentication/authorization
- Request validation
- Error handling
- Unknown route handling

PATCH

I also learned how "PATCH" can be used when only part of a resource needs to be updated.

For example:

PATCH /api/tickets/1002/status

{
  "status": "IN_PROGRESS"
}

Instead of replacing the entire ticket, only the required property is changed.

---

🚧 Current Limitations

This is a learning project and is not intended for production use.

Current limitations include:

- No external database
- No real authentication
- No JWT
- No frontend
- No automated tests
- No production deployment
- Data is stored in memory/hard-coded files

---

🔮 Possible Future Improvements

Future versions could introduce:

V2

- MongoDB or PostgreSQL
- Real authentication
- JWT
- Role-based authorization
- Automated testing
- Pagination
- Better search/filtering

V3

- Frontend dashboard
- Email notifications
- File attachments
- Production deployment
- Logging and monitoring

---

👨‍💻 Project Goal

This project was built as a hands-on backend learning project.

The main goal was not simply to make the API work, but to understand why backend applications are structured into routers, middleware, controllers, and models/data layers.

---

📌 Project Status

Completed — Version 1

Core ticket management functionality is implemented and working.

The dashboard/analytics functionality was intentionally left out of V1 because it introduces additional aggregation concepts that will be explored in a future project.

---