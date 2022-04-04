import { Place } from '../../places'

export type FilterState = Record<string, boolean>

// util to create filter states given a list of strings represented the types to filter by
// ex: { 'date': true, 'education': false, 'life': true }
export const createFilterStates = (filtersList: string[]) => {
    const filterObject: FilterState = {}
    filtersList.forEach((filter) => {
        if (!filterObject[filter]) {
            filterObject[filter] = true
        }
    })
    return filterObject
}

// util to filter a list of Place data given filter states
export const filter = (list: Place[], filterStates: FilterState) => {
    const activeFilters: string[] = []

    // find which filters are active
    Object.entries(filterStates).forEach(([key, val]) => {
        if (val) activeFilters.push(key)
    })

    // filter out data associated with un-checked filters
    const nextFilteredResult = list.filter((place) =>
        activeFilters.includes(place.type)
    )
    return nextFilteredResult
}
