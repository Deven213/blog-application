# Blog Application

This is a simple blog application built using React.js for the frontend and Spring Boot for the backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Visuals](#visuals)
- [Contributing](#contributing)

## Features

**Create**: Users can create new blog posts by filling out a form with a title, content.

**Read**: Users can view existing blog posts, including their titles, content.

**Update**: Users can edit existing blog posts, modifying the title, content.

**Delete**: Users can delete unwanted blog posts.

## Technologies Used

**Frontend**: React.js

**Backend**: Spring Boot

**Database**: MySQL

**API Communication**: Axios


## Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Deven213/blog-application.git
    ```

2.  **Navigate to the Client Directory:**

    ```bash
    cd blog-application
    ```

3.  **Install Dependencies:**

    > For installation of client dependencies

    ```bash
    cd blog-frontend
    npm install
    ```

    > For installation of server dependencies

    It will download automatically if you have configured the java developing environment. So meaven dependency will automatically get started to install

4.  **Run the Application:**
    
    To run the frontend (client) part:
    ```bash
    npm start
    ```

    To run the backend part:

    > simply click on the Run button in the MainApplication file.


5.  **Access the Application:**
    - Open a web browser and go to `http://localhost:3000`.


## Visuals

### Home Screen

![Home Screen](./assets/home_screen.png)

### Add Blog Screen

![Add blog Screen](./assets/add_blog.png)

### Update Blog Screen

![Update blog Screen](./assets/update_blog.png)

### Delete Blog Screen

![Delete blog Screen](./assets/delete_blog.png)

### View Blog Screen

![View blog Screen](./assets/view_blog.png)

## Contributing

If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone your forked repository (`git clone https://github.com/Deven213/blog-application.git`).
3. Create a new branch for your feature or bug fix (`git checkout -b feature-name`).
4. Make your changes and commit them (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request on GitHub.
