# Card Status API

This project is designed to create an API for fetching the status of a user's card using either the provided phone number or card ID. The API is implemented using Node.js and Express, and MongoDB is utilized as the database to store information related to the cards.

## Technologies Used And Reasons

- **Node.js**: Selected for the backend server due to its event-driven, non-blocking architecture, which efficiently handles multiple concurrent requests.
- **Express.js**: Chosen as a minimal and flexible web application framework for Node.js, simplifying the definition of routes and handling HTTP requests. It aids in organizing backend code and managing various types of requests, promoting scalability as the project grows.
- **MongoDB**: A NoSQL database selected for its ability to store data in a flexible, JSON-like format. Given the diverse and evolving data structures of card status information from CSV files, MongoDB's schema-less nature accommodates this variability seamlessly.
- **EJS (Embedded JavaScript)**: Employed for rendering dynamic HTML content on the server side. EJS templates facilitate the creation of HTML pages displaying card status information, offering seamless integration of JavaScript within HTML for an effective user presentation.


## Getting Started

1. Clone the repository:

   ```CMD
   git clone https://github.com/ayushman-s-rathore/zywa-assignment.git
   cd zywa

   ```

2. Install dependencies:

   ```CMD
   npm install

   ```

3. Set up MongoDB:

   - Ensure you have MongoDB installed and running.
   - Update the MongoDB connection string in .env file.
   - Example: MONGODB_URI=mongodb://127.0.0.1:27017/'your_connection_string'

4. Run MongoDB

5. Run Script to parse CSV Data:

   ```CMD
   node parse/parseData.js

   ```

6. Run the Express Server:

   ```CMD
   nodemon src/app.js
   ```
   This will start the server, and you should see a message indicating that it's running on a specific port (default is 3000).

## Possible Improvements

- **Input Validation**: Implement more robust input validation for phone numbers and card IDs.
- **Authentication and Authorization**: Add authentication and authorization mechanisms to secure the API.
- **Testing**: Integrate testing frameworks for unit testing and API testing.
- **UI Enhancement**: Build a frontend application to give user a better understanding of their card status by listing all actions taken by Zywa to deliver their card.
