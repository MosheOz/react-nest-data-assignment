import { DataActionsTypes } from "../types/actions.types"

export const onNewResults = (results: any) => {
    return {
        type: DataActionsTypes.ON_NEW_RESULTS,
        payload: results,
    }
}

export const getResults = (amount: number) => {
    return {
        type: DataActionsTypes.GET_RESULTS,
        payload: amount,
    }
}

export const onSearchHiglight = (text: string) => {
    return {
        type: DataActionsTypes.HIGHLIGHT,
        payload: text,
    }
}
