import { Place, SortableKeys } from '../../places'

/* 
    util to sort a list of places by provided sortKey
    TODO: make this more generic as well...right now SortableKeys limits to hardcoded sort keys
*/
export const sortPlaces = (list: Place[], sortKey: SortableKeys) => {
    return list.sort((p1: Place, p2: Place) => {
        const a = p1[sortKey]
        const b = p2[sortKey]
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0
    })
}
