import { Place } from '../../places'

export const sort = (list: Place[], sortKey: string) => {
    let newList: Place[] = []
    switch (sortKey) {
        case 'title': {
            newList = list.sort((a, b) =>
                a.title > b.title ? 1 : -1
            )
            break
        }
        case 'date': {
            newList = list.sort((a, b) =>
                a.date > b.date ? 1 : -1
            )
            break
        }
        default: {
            break
        }
    }
    return newList
}