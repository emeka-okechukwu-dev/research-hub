<a name="readme-top"></a>

# Research Hub

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setting-up-and-running-the-application">Setting Up and Running the Application</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

### Introduction

Research Hub is a comprehensive web application that facilitates research, collaboration among researchers, and access to support resources. This project was originally developed in PHP, HTML, CSS, JavaScript, and MySQL, and it has now been converted into a MERN stack application (MongoDB, Express.js, React, Node.js) for improved scalability and functionality.

You can find the original PHP version of this project [here](https://github.com/emeka-okechukwu-dev/research-hub-php).

<p>Check out the deployment of the project <a href="https://research-hub-project.vercel.app" target="_blank">here</a>.</p>

### Features

#### Researchers

- Manage research from hypothesis to publication
- Collaborate with other researchers
- View public ongoing and published research
- View a list of vetted grants
- View upcoming events and the latest news
- Manage user profile

#### Administrators

- Manage grants, events, and news
- View a list of researchers
- Manage admin user profile

### Built With

- React (TypeScript)
- Node.js
- Express.js
- MongoDB
- HTML
- CSS
- Bootstrap
- Font Awesome

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

Make sure you have the following software and tools installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (You can install it locally or use a cloud-hosted MongoDB service)

### Setting Up and Running the Application

1. Clone the repository

   Open your terminal and run the following command:

   ```sh
   git clone https://github.com/emeka-okechukwu-dev/research-hub.git
   ```

2. Create a MongoDB Database

   Before proceeding, you need to create a MongoDB database named 'researchhubdb' and a collection named 'adminusers.' You can follow the MongoDB tutorial on [how to create a database](https://www.mongodb.com/basics/create-database) to set up the database.

3. Start the backend server

   Navigate to the backend directory:

   ```sh
   cd backend
   ```

   Create a `.env` file with the following details:

   ```sh
   SECRET_KEY=your_super_secret_key
   ATLAS_URI=your_mongodb_atlas_uri
   PORT=5001
   ```

   Install backend dependencies:

   ```sh
   npm install
   ```

   Start the backend server:

   ```sh
   node index.js
   ```

4. Start the frontend server

   Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

   Create a `.env` file with the following details:

   ```sh
   REACT_APP_BACKEND_URL=http://localhost:5001
   REACT_APP_FRONTEND_URL=http://localhost:3000
   REACT_APP_RESEARCHER_ONE_EMAIL=your_researcher_one_email
   REACT_APP_RESEARCHER_ONE_PASSWORD=your_researcher_one_password
   REACT_APP_RESEARCHER_ONE_FIRST_NAME=your_researcher_one_first_name
   REACT_APP_RESEARCHER_ONE_LAST_NAME=your_researcher_one_last_name
   REACT_APP_RESEARCHER_TWO_EMAIL=your_researcher_two_email
   REACT_APP_RESEARCHER_TWO_PASSWORD=your_researcher_two_password
   REACT_APP_RESEARCHER_TWO_FIRST_NAME=your_researcher_two_first_name
   REACT_APP_RESEARCHER_TWO_LAST_NAME=your_researcher_two_last_name
   REACT_APP_ADMIN_EMAIL=your_admin_email
   REACT_APP_ADMIN_PASSWORD=your_admin_password
   REACT_APP_ADMIN_FIRST_NAME=your_admin_first_name
   REACT_APP_ADMIN_LAST_NAME=your_admin_last_name
   ```

   Install frontend dependencies:

   ```sh
   npm install
   ```

   Start the frontend development server:

   ```sh
   npm start
   ```

5. Access the application

   Open a web browser and go to:

   ```sh
   http://localhost:3000/
   ```

   You should now be able to access the application locally.

   Note: When you access the application for the first time, click on the appropriate button in the 'Select Dashboard' section to populate the database with the user details that were set in the `.env` file in the frontend. This step is necessary to set up user profiles and access the full functionality of the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Every contribution is appreciated. If you have an idea for improving the project, please fork the repository and create a pull request or open an issue with the tag 'enhancement' to share your suggestion.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Emeka Okechukwu - chuks.egkedu@gmail.com

[Portfolio](https://emeka-okechukwu-dev.github.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
