### Project Setup Guide

Welcome to your new project setup! Follow these steps to get started:

1. **NodeJS Installation (version 12.11.x):**
   - Install NodeJS 12.11.x in your home directory by following these steps:
     - Open your terminal.
     - Execute the following commands:
       ```bash
       curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
       sudo bash nodesource_setup.sh
       sudo apt install nodejs -y
       ```
     - Verify the installation by checking the NodeJS and npm versions:
       ```bash
       nodejs -v
       npm -v
       ```
     - Expected output:
       ```
       v12.11.1
       6.11.3
       ```

2. **Installing Project Dependencies:**
   - Navigate to your project directory.
   - Run the following command to install Jest, Babel, and ESLint:
     ```bash
     npm install
     ```

3. **Configuration Files:**
   - Ensure the following configuration files are added to your project directory:
     - `package.json`: Contains scripts for linting (`lint`, `check-lint`), development (`dev`), testing (`test`, `full-test`), and dependencies (`devDependencies`).
     - `babel.config.js`: Configures Babel presets to target the current version of NodeJS.
     - `.eslintrc.js`: Configures ESLint settings including environment (`es6`, `jest`), rules (`no-console`, `no-shadow`, etc.), and extensions (`airbnb-base`, `plugin:jest/all`).

4. **Final Steps:**
   - After setting up configuration files and installing dependencies, ensure everything is working correctly:
     - Run `npm test` to execute Jest tests.
     - Run `npm run lint` to lint your JavaScript files.
     - Run `npm run dev` for your development environment setup using Babel.

5. **Get Coding!**
   - You're all set! Start coding your project with confidence using Jest for testing, Babel for transpiling, and ESLint for code quality checks.

This setup guide provides a foundation for your project using NodeJS 12.11.x with essential tools for modern JavaScript development. Happy coding!