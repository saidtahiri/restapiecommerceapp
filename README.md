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



## Prerequisites<br>

Before you begin, ensure you have met the following requirements:<br>

- Node.js installed<br>
- MongoDB installed and running<br>

## Getting Started<br>

Follow these steps to get the project up and running on your local machine:<br>

1. Clone the repository:<br>

   ```bash<br>
   
   git clone https://github.com/saidtahiri/restapiecommerceapp.git

2.Install dependencies: <br>

 cd ecommerce-app <br>
 npm install <br>

3.Configure environment variables:<br>

Create a .env file in the root directory and set the required environment variables. <br>
PORT=3000 <br>
MONGODB_URI=mongodb://localhost:27017/ecommerce <br>
[Other variables] <br>

4.Run the application:<br>
 npm start<br>

 The app will be accessible at http://localhost:3000. <br>

 5.Project Structure <br>

 ecommerce-app/ <br>
|-- controllers/ <br>
|-- models/ <br>
|-- routes/ <br>
|-- config/ <br>
|-- views/ <br>
|-- public/ <br>
|-- app.js <br>
|-- .env <br>
|-- [Other files and directories] <br>

6.API Endpoints <br>
Document the available API endpoints and their functionalities. <br>

GET /api/products: Get all products. <br>
GET /api/products/:id: Get a specific product by ID. <br>
POST /api/products/ To Insert a Product <br>

7.Technologies Used <br>
MongoDB<br>
Express.js <br>
Node.js <br>

8.Contributing <br>
Contributions are welcome! See the Contribution Guidelines for details. <br>

9.Development Status <br>
This project is under active development. <br>

Please note that the codebase is subject to changes, and new features are regularly added. If you're interested in contributing, make sure to check for the latest updates and open issues.<br>

Feel free to reach out to us if you have any questions or suggestions!<br>
