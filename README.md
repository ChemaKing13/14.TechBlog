# TechBlog! 💻 <span>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


TechBlog is a web application that allows users to share and discuss technology-related blog posts. Users can create an account, log in, create new posts, comment on existing posts, and interact with other users. The application is built using Node.js, Express.js, Sequelize ORM, and Handlebars templating engine.

## Table of Contents

- [Built with](#buitwith)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)


## Built with 🛠️

- ![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
- ![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
- ![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
- ![Handlebars](https://img.shields.io/badge/Handlebars-4.x-yellow)
- ![MySQL](https://img.shields.io/badge/MySQL-8.x-blue)

## Installation 

1. Clone the repository: `git clone https://github.com/your-username/tech-blog.git`
2. Navigate to the project directory: `cd tech-blog`
3. Install the dependencies: `npm install`
4. Set up the database:
   - Create a `.env` file based on the provided `.env.example` file.
   - Configure the database settings in the `.env` file.
   - Run database migrations: `npx sequelize-cli db:migrate`
   - (Optional) Seed the database with sample data: `npx sequelize-cli db:seed:all`
5. Start the application: `npm start`

## Usage

- Access the application in a web browser at `http://localhost:3001`.
- Register a new account or log in with an existing one.
- Create new blog posts, comment on posts, and interact with other users.
- Manage your posts from the dashboard.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -m "Add a new feature"`.
4. Push to the branch: `git push origin my-feature`.
5. Submit a pull request.

## License 

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Deployed App
Check out the deployed app [here](https://calm-mesa-92198-1a0c8f2e67f9.herokuapp.com/).
