# How to run app & test
run "yarn install" on the terminal

Add a .env document with the name of the variable REACT_APP_GITHUB_TOKEN with the github token of the user

run "yarn start" to have the app running on localhost

run "yarn test" to run the app tests, also you can run "npx jest --coverage" to generate the code coverage report


# Dev Notes
I used jest for code coverage report and the react testing-library for tests
Used for coding functional components and the use of useState hooks for controlling the components
Used GraphQL to connect to the Github API and retrieve the information
I used props to identify the parent and children for the use of the "Open related topics" button

# Future improvements
Adding css styling
