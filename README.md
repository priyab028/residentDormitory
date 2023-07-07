
# React Resident Dormitory
This is a React application that implements a resident directory for a dormitory. The application allows users to search for and add residents to the dormitory based on their name and joining date. The application also provides error messages for cases where the student is not a verified student or their validity has expired.

![](https://hrcdn.net/s3_pub/istreet-assets/DyxnWZZfQtoe9d6OG9hEwA/Screen%20Recording%202020-06-25%20at%209.45.30%20PM.gif)

## Components
The application consists of the following components:

Search: This component provides input fields for entering the student's name and joining date. It also includes a button to add the student to the dormitory.

ResidentsList: This component displays the list of residents in the dormitory.

Error: This component is shown in case of an error, such as when the student is not a verified student or their validity has expired.

## Functionality
The application implements the following functionality:

When the user enters a student's name and joining date and clicks the "Add" button, the application performs the following checks:

It checks if the student's name exists in the list of verified students.
It calls the checkValidity function to validate the joining date against the student's validity date.
If the student is a verified student and the joining date is valid, the student is added to the list of residents in the dormitory.

If the student is not a verified student, an error message is displayed: "Sorry, <NAME> is not a verified student!"

If the student's validity has expired, an error message is displayed: "Sorry, <NAME>'s validity has expired!"

After adding each student, the input fields in the Search component are cleared.

## Test Cases
The application includes unit tests to ensure the correctness of its implementation. The tests cover various scenarios, including adding a verified student, adding a non-verified student, and adding a student with an expired validity.

## Running the Application

To run the application, follow these steps:


1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command in the project directory:

```bash
npm install
```
3. Start the application by running the following command:

```bash
npm start
```

4. Open your web browser and visit http://localhost:8000 to access the application.

## File Structure

The relevant files for this application are organized as follows:

src/App.js: This file contains the main logic and components of the application.

src/utils.js: This file includes the checkValidity function used to validate the joining date against the student's validity date.

src/studentsList.js: This file holds the list of verified students.

src/App.test.js: This file contains the unit tests for the application.

Feel free to explore and modify the code to understand and enhance the functionality of the application.

## Environment
React Version: 16.13.1
Default Port: 8000
