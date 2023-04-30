# E-commerce Back End Using Object-Relational Mapping (ORM)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Link to GitHub Repository: 
To view the GitHub repository for this project, please visit the following link: https://github.com/mackenzie-wentworth/orm-e-commerce


## Description
For this week's Challenge, I was given a starter code to build the back end of a e-commerce website using Object-Relational Mapping (ORM). As part of the existing code, I was tasked to configure an `Express.js` API so that it connects to `Sequelize` and interacts with a `MySQL` database.  

---

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```


## Installation
1. To set up your environment, please begin by making sure you have the following already installed:

    * An open source code editor, such as [VS Code](https://code.visualstudio.com/)
    * [Git Bash](https://www.educative.io/answers/how-to-install-git-bash-in-windows) or [Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) (to use in [Git](https://github.com/git-guides/install-git) command line)
    * [Node.js](https://nodejs.org/en)
    * [MySQL](https://www.mysql.com/)
    * [Insomnia](https://docs.insomnia.rest/insomnia/install)

2. Next, you will need to clone this [repository](https://github.com/mackenzie-wentworth/orm-e-commerce). From GitHub, copy the `SSH URL` and use the `git clone` command to paste the SSH URL to your terminal clipboard. 

    ```bash
        git clone [github ssh url]
    ```

3. Open the cloned repository in VS Code. Within VS Code, open a new integrated terminal and type the following `npm` command to install the [Node Package Manager](https://www.npmjs.com/):

    ```bash
        npm init -y
    ```

4. Next, type in the following `npm` command to install [Node Modules](https://docs.npmjs.com/cli/v8/commands/npm-install):

    ```bash
        npm i
    ```

---

## Usage
To demonstrate the functionality of the application's back end and API configuration, this project features application testing using [Insomnia](https://docs.insomnia.rest/insomnia/install).

**NOTE**: Before viewing and testing the back end in Insomnia, please be sure to do the following steps in VS Code:

1. Rename the `.env.EXAMPLE` file to `.env`. Then, set up the new `.env` file using your `MySQL` credentials.
2. Open a new integrated terminal from the root directory. To connect to the MySQL database and `SOURCE` schema, type the following `mysql` commands and enter your MySQL password when prompted:

    ```bash
        mysql -u root -p
    ```

    ```bash
        SOURCE db/schema.sql;
    ```

    ```bash
        quit
    ```
3. In the same terminal, type the following `node` command to seed test data from the database:

    ```bash
        node seeds/index.js
    ```

4. Now you are ready to invoke the application! In the same terminal, please type the following `npm` command:

    ```bash
        npm start
    ```

5. You should see a response in your terminal that reads, "App listening on port 3001! 🚀"

6. You are now ready to start testing the back end of the database using **Insomnia**!

### *Video Demonstration:*
[Watch demo video here!](https://user-images.githubusercontent.com/122484637/235378020-27a2e05b-0b26-44ae-a5cf-9f4886f65d43.webm)

---

## Questions?
If you have any questions, please see my contact information below to reach me for inquiries:
* **GitHub**: mackenzie-wentworth, at https://github.com/mackenzie-wentworth
* **Email**: mwentworth28@gmail.com


## License
This project is covered under the [MIT License](./LICENSE). For more details, please click the license button under 'Badges' at the top of the page.
