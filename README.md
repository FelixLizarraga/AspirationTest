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
- Adding css styling
- I could add on the button, that is shown for opening or closing related topics, that every click triggers going to the API so that very time you open the related topics you'll have the related topics button again as an option so you can open the next topic everytime, this will result in a tree that will grow dinamically.

### General comments
About unit testing, I'm aware that the tests are not sufficient, but because of the time assigned to this task I decided to make the basic tests to have more time focusing on the code. 

But this is what is missing to test:
- Search button enables when writing on the form
- When I press search to expect one value on the API response
- To validate that when the search entry is not valid that a "No response" tag is shown
- Topics get rendered on page and topics are mapped correctly

For future improvements I added an extraline, I didn't do that previously because I considered that the code didn't need any change con code structure or refactoring.

Regarding Apollo, you are correct, I did google how to integrate the Github GraphQL API but I did it because I didn't quite understood the API's documentation and it was consuming the assessment time. Nevertheless, I'm currently working with GraphQL and Apollo, integrated with to different APIs (contentful and PALMS) which use 2 diferrrent type of methods for fetching information.

I'm writing this feedback because at this moment I can't work on improving the actual project but I did want you to know what are my comments about your feedback.

Thanks for the opportunity.