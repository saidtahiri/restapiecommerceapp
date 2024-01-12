# restapiecommerceapp
 REST API - Mongo, Express and NodeJS Ecommerce App


# E-commerce App using MongoDB, Express.js, and Node.js

This is a simple e-commerce application built using the MEN (MongoDB, Express.js, Node.js) stack. It allows users to Create,Read,update And Delete Products

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)



## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   
   git clone https://github.com/saidtahiri/restapiecommerceapp.git

2.Install dependencies:

 cd ecommerce-app
 npm install

3.Configure environment variables:

Create a .env file in the root directory and set the required environment variables.
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
[Other variables]

4.Run the application:
 npm start

 The app will be accessible at http://localhost:3000.

 5.Project Structure

 ecommerce-app/
|-- controllers/
|-- models/
|-- routes/
|-- config/
|-- views/
|-- public/
|-- app.js
|-- .env
|-- [Other files and directories]

6.API Endpoints
Document the available API endpoints and their functionalities.

GET /api/products: Get all products.
GET /api/products/:id: Get a specific product by ID.
POST /api/products/ To Insert a Product

7.Technologies Used
MongoDB
Express.js
Node.js

8.Contributing
Contributions are welcome! See the Contribution Guidelines for details.

9.Development Status
This project is under active development.

Please note that the codebase is subject to changes, and new features are regularly added. If you're interested in contributing, make sure to check for the latest updates and open issues.

Feel free to reach out to us if you have any questions or suggestions!