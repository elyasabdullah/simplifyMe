# SimplifyMe

SimplifyMe is a productivity app designed to help users organize their activities and simplify their daily routines. With a focus on user experience and efficiency, SimplifyMe offers features for managing various types of activities and grouping related tasks together.

## Technologies Used

### Frontend

- **React with TypeScript**: Building user interfaces with type safety and better development experience.
- **Redux Toolkit**: State management library for predictable state containers in JavaScript apps.
- **RTK Query**: Data fetching and caching library for Redux apps.
- **styled-components**: Styling library for React applications, offering a CSS-in-JS solution.
- **Yup and Formik**: Form validation and form handling libraries for React forms.

### Backend

- **Node.js**: Server-side JavaScript runtime environment for building scalable network applications.
- **Express.js**: Web application framework for Node.js, providing a robust set of features for web and mobile applications.
- **MongoDB**: NoSQL database for storing flexible and scalable data.
- **JWT (JSON Web Tokens)**: Authentication mechanism for secure transmission of information between parties.

## Features

- **Activity Management**: Users can add, update, delete, and retrieve activities with details such as date, time, and type (daily, weekly, general).
- **Grouping Activities**: SimplifyMe allows users to group related activities together, making it easier to manage and organize tasks.
- **Group Names**: Users can manage group names to categorize and label their activities effectively.
- **Authentication**: SimplifyMe provides user authentication features, including login and signup functionality, to secure user data and access.
  In the app we use OTP to verify the user email

## Usage

1. **Login or Sign Up**: Users can create an account or log in to their existing account to access SimplifyMe.
2. **Add Activities**: Users can add new activities, specifying details such as date, time, type, and group affiliation.
3. **Manage Activities**: Users can update, delete, and retrieve activities based on their preferences and needs.
4. **Grouping**: Users can create and manage group names to organize their activities efficiently.
5. **Stay Organized**: SimplifyMe helps users stay organized and focused by providing a streamlined approach to managing their tasks and activities.

## Installation

To run SimplifyMe locally, follow these steps:
- Clone the repository: `git clone <repository-url>`
- Create .env files inside both the frontend and backend folders and add the required variables for the frontend you need to add VITE_APP_API_URL
  and for the backend you need to add the following variables:
  - ACCESS_TOKEN_SECRET
  - REFRESH_TOKEN_SECRET
  - DATABASE_URI
  - EMAIL_FROM
  - NO_REPLY_EMAIL_ADDRESS
  - POSTMARK_SERVER_TOKEN
### Running the frontend
- Navigate to the project directory: `cd SimplifyMe/frontend`
- Install dependencies frontend: `npm install`
- Run the frontend: `npm run dev`
### Running the backend
- Navigate to the project directory: `cd SimplifyMe/backend`
- Install dependencies frontend: `npm install`
- Run the frontend: `npm run dev`

## Feedback

We welcome any feedback or suggestions for improving SimplifyMe. Please feel free to open an issue or submit a pull request with your ideas or contributions.

Thank you for using SimplifyMe! We hope it helps simplify and organize your life effectively.
