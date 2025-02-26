Sales Assessment Project

Project Overview

This is a Node.js-based project using Express and MySQL (Sequelize ORM) to manage sales data. The application provides APIs to handle customers, products, and orders efficiently.

Tech Stack

Backend: Node.js, Express.js

Database: MySQL with Sequelize ORM

Tools: Nodemon, Postman for API testing

Features

Customer Management (CRUD operations)

Product Management (CRUD operations)

Order Management (CRUD operations)

Database Integration with Sequelize ORM

Installation & Setup

1. Clone the repository

git clone https://github.com/karan1611/sales-assesment.git

2. Navigate to the project folder

cd sales-assesment

3. Install dependencies

npm install

4. Set up environment variables

Create a .env file in the root directory and add the following:

DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_NAME=salesdb
DB_HOST=127.0.0.1
DB_DIALECT=mysql
PORT=5000

5. Run database migrations (if using Sequelize CLI)

npx sequelize-cli db:migrate

6. Start the server

npm run dev

The server will run on http://localhost:5000.

API Endpoints

Customer Routes

GET /customers - Get all customers

GET /customers/:id - Get customer by ID

POST /customers - Create a new customer

PUT /customers/:id - Update customer details

DELETE /customers/:id - Delete a customer

Product Routes

GET /products - Get all products

GET /products/:id - Get product by ID

POST /products - Add a new product

PUT /products/:id - Update product details

DELETE /products/:id - Delete a product

Order Routes

GET /orders - Get all orders

GET /orders/:id - Get order by ID

POST /orders - Place a new order

PUT /orders/:id - Update order details

DELETE /orders/:id - Cancel an order

Contribution

Feel free to fork this repository and create pull requests for improvements!

Author
Karan
