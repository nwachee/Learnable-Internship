# Hotel-API
Used to Perform CRUD Functions on the Hotel Management System

## Tech Stack
- Node js
- Express
- Mongoose
- dotenv
- Joi
- Bcrypt
- passport
- cors
- morgan

## Installation
- Clone the [repo](https://github.com/nwachee/Learnable-Internship.git) 
- Run `npm install ` in your terminal to install packages in package.json
- Create a `.env file` and fill in values for the following variables: - `MONGO_URI`
- Finally run `npm start` in your terminal


### Endpoints
fetch a single room - `[GET]` : `api/v1/room/:id` 
Fetch all rooms - `[GET]` : `api/v1/room` 
update a room - `[PATCH]` : `api/v1/room/:id`
delete a room - `[DELETE]` : `api/v1/room/:id`
create a room - `[POST]` : `api/v1/room`
login a user - `[POST]` : `api/v1/user/login`
register a user - `[POST]` : `api/v1/user/register`


### Resources
- For mongoDb url use https://cloud.mongodb.com/v2/62decd80ebe1584627659bea#clusters to set up

