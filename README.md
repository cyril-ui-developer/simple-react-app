
## Simple React App integration Req / Res API
 A simple React app that allows for creating, updating, and viewing a user record using the https://reqres.in/ API.

##Technology Stack
1. React - User interface development
2. HTML5 / CSS3 - Page markup and styling
3. JavaScript/ES6 - Core language
4. Redux - Predictable state management
3. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



![Simple React App Data Flow Diagram](./src/images/simplereactapp.png)
## How to run your code
## Setup project
1. Clone the repository
2. Change to the root of the project directory, and execute `npm install`. This process will take some time, so be patient!

### In the project directory, you can run:

 `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Reasoning behind your technical choices.
1. React is a popular JavaScript library for building user interfaces. React makes it painless to create interative UIs and it's  component-based. Implemented React to build stateful and stateless components.
The components are encapsulated and they manage their state. Component can be compose to build complex UIs. For scenarios were components tree or hierarcy are very deep, the state of the application could become unpredictable and difficult to manage. Props are passed down from parent to child through intermediate children who don't need the data. Redux was introduced to solve these problems. According to Redux official website, "Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently". Implemented Redux to pass data to components witout going through intermediate children. 
2. Used ESLint to discover code problems without executing it. Created linting rules and formatters for coding standards and best practices. 
3. Used Git hook with Husky - for every commit, the hooks will run eslint first, if there is/are no linting error(s), then commmit will pass else fail. Only properly linted code are pushed to the repository. 
4. Redux-Thunk - Basic Redux store allows only simple synchronous updates. Redux-Thunk middleware extends the store and was used to write async logic that interacts with the store.
5. Jest and Enzyme are popular unit testing tools for React application

## Trade-offs you might have made, anything you left out, or what
##you might do differently if you were to spend additional time on the project.
1. Improve user experience and interface - design high fidelity mockup, use Material-UI and  CSS preprocessor like SSAS
2. Implement React Router for component navigation
3. Write more test cases
4. Middleware library - use Redux-saga instead of Redux-thunk to write asynchronous code that looks synchronous
5. Reselect - use reselect, a memorized selector function for writing more concise logic
6. Lodash - use lodash for utility tasks like object manipulation 
## (Ideally) Link to to the hosted application
## (Optional) Link to other code you’re particularly proud of.
1. https://github.com/cyril-ui-developer/react_redux_readable_app
2. https://github.com/cyril-ui-developer/angular-space-launch-app


