# Will-you-read-me
# Node.js Challenge: Professional README Generator

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

# IMPORTANT

Some of the technologies we use in this course (GraphQL and MERN) don't work well with Node.js v18, so you you'll need to ensure that you're using Node.js v16. Please follow the instructions outlined in the Node Installation Guide on the Full-Stack BlogLinks to an external site. to ensure that you're using Node.js v16. Once these problems have been resolved in the future, you'll be able to use Node.js v18 as your runtime environment.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer packageLinks to an external site.. Review the Professional README GuideLinks to an external site. as a reminder of everything that a high-quality, professional README should contain.

# IMPORTANT

In order to install inquirer, please use npm i inquirer@8.2.4.

The application will be invoked by using the following command:

node index.js
Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video and add it to the README of your project.

# IMPORTANT

Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

Before you start, clone the starter codeLinks to an external site..

# User Story
AS A developer

I WANT a README generator

SO THAT I can quickly create a professional README for a new project

# Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README