# MERN Backend Project README

This README provides an overview of a MERN (MongoDB, Express.js, React, Node.js) tech stack for the backend project. This project includes controllers, data storage, models, routes, scripts, and testing collections. It is designed to manage workout data.

## Project Structure

.
├── controllers
│ └── workoutController.js
├── data
│ ├── benchpress.json
│ ├── pullups.json
│ ├── pushups.json
│ └── updatepushups.json
├── models
│ └── workoutModel.js
├── newman_collections
│ └── backend.json
├── package-lock.json
├── package.json
├── routes
│ └── workouts.js
├── scripts
│ ├── create-benchpress.sh
│ ├── create-pullups.sh
│ ├── create-pushups.sh
│ ├── delete-workout-by-id.sh
│ ├── get-http-response-code.sh
│ ├── get-workouts.sh
│ └── update-workout-by-id.sh
└── server.js


### Project Components

- **controllers**: This folder contains the controllers responsible for handling HTTP requests and interacting with the data models.

- **data**: Data storage for workout-related JSON files. These files likely contain workout data that can be used for testing and seeding the database.

- **models**: MongoDB schema models for workouts. These define the structure of the data stored in the database.

- **newman_collections**: This folder contains collections of API requests for automated testing using Newman. It's a handy tool for testing the backend API.

- **routes**: Define API routes and their associated controller methods.

- **scripts**: Shell scripts for manual testing using JSON data files. These scripts might be used for testing specific API endpoints or performing data manipulation tasks.

- **server.js**: The entry point of your Node.js application, where you set up the Express server and configure routes.

- **package.json** and **package-lock.json**: Configuration files for Node.js and npm packages used in this project.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the necessary Node.js packages defined in `package.json`.

2. **Database Setup**: Ensure you have a MongoDB instance running and configure the connection in `server.js` or in an environment variable.

3. **Start the Server**: Run `npm start` to start the Express server.

## API Endpoints

The API endpoints are defined in the `routes/workouts.js` file. Here's an example of how you might structure your API:

- **GET `/api/workouts`**: Retrieve a list of all workouts.
- **GET `/api/workouts/:id`**: Retrieve a specific workout by ID.
- **POST `/api/workouts`**: Create a new workout.
- **PUT `/api/workouts/:id`**: Update a workout by ID.
- **DELETE `/api/workouts/:id`**: Delete a workout by ID.

## Manual Testing

The `scripts` folder contains shell scripts for manual testing. You can use these scripts to interact with your API using the JSON data files from the `data` folder. For example:

- `create-benchpress.sh`: Creates a new bench press workout.
- `get-workouts.sh`: Retrieves a list of all workouts.
- `update-workout-by-id.sh`: Updates a workout by its ID.
- `delete-workout-by-id.sh`: Deletes a workout by its ID.
- `get-http-response-code.sh`: Retrieves the HTTP response code for a specific API request.

Ensure you have appropriate permissions to execute shell scripts.

## Automated Testing

The `newman_collections` folder contains collections of API requests for automated testing using Newman. You can run these collections using the Newman command-line tool.

Example command to run a collection:

```bash
newman run newman_collections/backend.json
```

 ## Contribution Guidelines
If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Create a pull request with a clear description of your changes.

## License
This project is licensed under the [LICENSE_NAME] License.

## Author
Ricardo Ribeiro




