import { SearchActionsTypes } from "../types/actions.types"

export const onNewQuery = (query: string) => {
    return {
        type: SearchActionsTypes.ON_NEW_QUERY,
        payload: query,
    }
}

export const getQueries = () => {
    return {
        type: SearchActionsTypes.GET_QUERIES,
    }
}

export const onToggleQueriesContainer = () => {
    return {
        type: SearchActionsTypes.TOGGLE_QUERIES_CONTAINER,
    }
}