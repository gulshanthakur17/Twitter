# Twitter Backend

This project is the backend of a Twitter-like social media application, responsible for handling various essential functionalities. It's built with Node.js and MongoDB and uses JSON Web Tokens (JWT) for secure user authentication.

### Features

- User profile
- User Authentication
- User should be able to create a post
    - The tweet cannot have more than 250 chars
    - Every tweet will be having support for image uploads
- Pagination on tweets
- Hashtag
- Like & Comment (comment on a comment)
- Image upload support for each tweet using Amazon S3

## Prerequisites

- Node.js and NPM installed on your system
- MongoDB installed on your system 

## Steps to follow

1.  Clone the repository:

    `git clone https://github.com/gulshanthakur17/Twitter.git`


2.  Install the dependencies:

        `cd twitter

    npm install`

3.  Configure environment variables:

    Create a `.env` file in the project root directory and set the following environment variables:

    ```PORT=4000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    AWS_REGION = <your-aws-region>
    AWS_SECRET_ACCESS_KEY=<your-aws-key>
    ACCESS_KEY_ID=<your-aws-id>
    BUCKET_NAME=<your-aws-bucket-name>

    ```

4.  Start the server:

    `npm start`