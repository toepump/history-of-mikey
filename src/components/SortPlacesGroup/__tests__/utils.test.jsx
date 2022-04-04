import { sortPlaces } from '../utils'

// test data sorted chronologically
const chronologicalFakePlaces = [
    {
        title: 'B',
        description: 'test1',
        date: new Date('1994-04-17'),
        coordinates: [-121.91, 36.6177],
        type: 'life',
    },
    {
        title: 'C',
        description: 'test2',
        date: new Date('2010-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'work',
    },
    {
        title: 'A',
        description: 'test3',
        date: new Date('2022-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'education',
    },
]

// test data sorted alphabetically
const alphabeticalFakePlaces = [
    {
        title: 'A',
        description: 'test3',
        date: new Date('2022-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'education',
    },
    {
        title: 'B',
        description: 'test1',
        date: new Date('1994-04-17'),
        coordinates: [-121.91, 36.6177],
        type: 'life',
    },
    {
        title: 'C',
        description: 'test2',
        date: new Date('2010-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'work',
    },
]

describe('SortPlacesGroup utils', () => {
    test('sortPlaces util should correctly sort lists of places.', () => {
        // sort alphabetically
        const sortedAlphabetically = sortPlaces(chronologicalFakePlaces, 'title')
        expect(sortedAlphabetically).toEqual(alphabeticalFakePlaces)

        // sort chronologically
        const sortedChronologically = sortPlaces(sortedAlphabetically, 'date')
        expect(sortedChronologically).toEqual(chronologicalFakePlaces)
    })
})