## Introduction!

Hello! My name is Michael Kentaro Cho. I'm a frontend engineer at BAE Systems where I work on the Geospatial Exploitation Product (GXP).

For this project I decided to make a list of places featuring some life milestones and hobbies of mine! I tried to keep it interesting and brief, I promise!

## Getting Started

1. run `npm install` to get dependencies
2. run `npm start` to start the development server at `localhost:3000`
3. run `npm test` to run all unit tests in interactive watch mode
4. run `npm run coverage` to get a test coverage report

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


## Approach

My goal was to check all the boxes in the checklist above, but specifically to try to do so in as simply as possible.

I wanted to:
- be able to keep track of as little state as possible at the top level.
- create a declarative React `<Map />` component (wrapping `mapbox-gl`) that could simply receive a `visiblePlaces` prop to render markers for, and also a `currentPlace` prop to know which place to fly to.
- let the rest of the components (clickable cards, filter buttons, sort toggle) just control manipulations on those two Map properties.

## Some Notes

1. At first it was a bit challenging to integrate `mapbox-gl` with `React`. React generally discourages manual DOM manipulations in favor of staying in the React Virtual DOM as much as possible. It took some extra thought to avoid using a wrapper library and figure out how to make sure the DOM and Virtual DOM were cooperating when adding/removing dynamic markers/popups.

2. I'm not totally satisfied with the way some components ended up. In particular, I think the filter and sort related components could be better structured so that it becomes easier to separate components into generic and app-specific ones. I did consider adding a provider/context (or even redux) to help clean up some of these interfaces, but in the end decided not to worry about it so much.

3. While I was able to include some unit tests for most components, I ran into issues while trying to test components that rendered `mapbox-gl`'s Map. I've run into this before at my job (for a different library) and found it to be tricky. The issues are related to Jest not having access to a real DOM (canvas specifically) and also issues with testing WebGL without special mocking libraries. For the sake of this project, I left out unit testing for these problem components. I would be curious to learn any good approaches for getting around these issues.

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
