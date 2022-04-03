import { Place } from "../../places"

export type FilterState = Record<string, boolean>

export const createFilterStates = (filtersList: string[]) => {
    const filterObject: FilterState = {}
    filtersList.forEach((filter) => {
        if (!filterObject[filter]) {
            filterObject[filter] = true
        }
    })
    return filterObject
}

export const filter = (list: Place[], filterStates: FilterState) => {
    const activeFilters: string[] = []
    Object.entries(filterStates).forEach(([key, val]) => {
        if (val) activeFilters.push(key)
    })

    const nextFilteredResult = list.filter((place) =>
        activeFilters.includes(place.type)
    )
    return nextFilteredResult
}