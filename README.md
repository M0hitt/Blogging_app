# Blogging_app

personalised blogging site

### Project Structure

- `/frontend`: Contains the React frontend code.
- `/backend`: Contains the Node.js server code.

### Installation and Setup

1. Install Node.js by downloading it from the official website.
2. Install MySQL server and create a database.
3. Clone the project repository from GitHub.
4. Navigate to the `/frontend` folder and run `npm install` to install frontend dependencies.
5. Navigate to the `/backend` folder and run `npm install` to install server dependencies.

### Configuration

- Server Configuration:
  - Set environment variables for server port and database connection details.
  - Modify `backend/src/config/dbConfig.js` accordingly.

- Database Configuration:
  - Modify `config/dbConfig.js` with your MySQL database credentials.

### Database Schema

- `posts` table:
  - `id` (INT): Primary key.
  - `title` (text): title of the posts.
  - `content` (text): content of the posts.
  - `created_at` (VARCHAR): Encrypted password.

### Installation and Running

1. Start the MySQL server and create the database.
2. Navigate to the `/frontend` folder and run `npm start` to start the React frontend.
3. Navigate to the `/backend` folder and run `node .\index.js` to start the Node.js server.

### Error Handling

- Error responses will have appropriate status codes and error messages.

### Security

- prevents SQL injection attacks.

### Troubleshooting

- If encountering issues with database connection, verify credentials in the `config/dbConfig.js` file.

### Acknowledgments

- This project uses the following libraries:
  - React
  - Node.js
  - MySQL
  - Express


### for deployment
frontend -- run `npm run build` in \frontend and use any hosting platform to host the front end.
backend -- use any cloud service platform to host backend.
