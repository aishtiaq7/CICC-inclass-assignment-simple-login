# Project Setup

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/current)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [LiveServer](https://github.com/ritwickdey/vscode-live-server-plus-plus) (VS Code Extension)

Then <strong>either</strong> CLONE or Download the repository. 


## To Run the Server: 

1. Navigate to Server directory: <br>`cd server`
2. Open in VSCODE
3. Install the dependencies by running <br> `npm install`
4. Spin up the server using *Nodemon* <br> `npm start`


## To Run the Client: 

1. Navigate to Client directory: <br>`cd client`
2. Open in VSCODE
3. Rigt click on `index.html` and open with *Live Server* (once you install the extension)


<hr>
<br>

# Assignment Details


For this assignment, you are required to add an onclick listener for two buttons: login and register. The onclick handler function should retrieve the values of the input fields and invoke their respective endpoints.

For instance, the login button should capture the values of the email and password fields and initiate a fetch call to the backend, which is defined at http://localhost:3000/. Handle alert messages for both successful and failed attempts for both the login and register buttons.

You do not need to modify any files in the index.html or server code (app.js). Your task is solely to implement the functionality in the script.js file within the client folder.

