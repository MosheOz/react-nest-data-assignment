import { SearchActionsTypes } from "../types/actions.types";
import { ISearchState } from "../types/search.state.interface";

export const initialData = {
    queriesSaved: [],
    toggleQueriesContainer: false,
};

const searchReducer = (state: ISearchState = initialData, action: { type: SearchActionsTypes, payload: any }) => {
    switch (action.type) {
        case SearchActionsTypes.ON_NEW_QUERY:
            return {
                ...state,
                queriesSaved: [...state.queriesSaved, action.payload],
            };
        case SearchActionsTypes.GET_QUERIES:
            return state?.queriesSaved;
        case SearchActionsTypes.TOGGLE_QUERIES_CONTAINER:
            return {
                ...state,
                toggleQueriesContainer: !state.toggleQueriesContainer
            }
        default:
            return state
    }
}

export default searchReducer;