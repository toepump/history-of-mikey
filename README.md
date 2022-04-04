## Introduction!

Hi! My name is Michael Kentaro Cho!

## Getting Started

1. run `npm install` to get dependencies
2. run `npm start` to start the development server at `localhost:3000`
3. run `npm test` to run all unit tests in interactive watch mode
4. run `npm run coverage` to get a test coverage report
    - note: hit `a` to run all tests and get a better coverage report

## Checklist

-   [x] `create-react-app` with `typescript`
-   [x] create a javascript object representing dates, locations, and types for filtering
-   [x] display the list of dates, locations, etc. in a React component
-   [x] add a map using `mapbox`
-   [x] when you click an item on the list, fly the map to the location and display the metadata/notes
-   [x] add previous/next buttons to step through the destinations
-   [x] sort the list by time or alphabetically
-   [x] add filters to show only the data based on selected types
-   [x] make typescript interfaces for the components to make sure data is consistent
-   [x] unit tests using `jest` + `react-testing-library`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Runs the same script as `npm test` above, but with the added `--coverage` flag to execute a code-coverage test and report results back.

_NOTE_: the test runner is launched in interactive watch mode by default. Follow the output instructions in the terminal to quit, run all tests, only failed tests, etc.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
