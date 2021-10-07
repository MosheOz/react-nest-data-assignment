import { DataActionsTypes } from "../types/actions.types";
import { IDataState } from "../types/data.state.interface";

export const initialData = {
    results: [],
    resultsToDisplay: [],
    rsultsToHighlight: '',
};

const dataReducer = (state: IDataState = initialData, action: { type: DataActionsTypes, payload: any }) => {
    switch (action.type) {
        case DataActionsTypes.ON_NEW_RESULTS:
            return {
                ...state,
                results: action.payload,
            };
        case DataActionsTypes.GET_RESULTS:
            let resultsToDisplay = state?.results.slice();
            resultsToDisplay = resultsToDisplay.splice(action.payload * 10, 10);

            return {
                ...state,
                resultsToDisplay,
            }

        case DataActionsTypes.HIGHLIGHT:
            return {
                ...state,
                rsultsToHighlight: action.payload,
            }
        default:
            return state
    }
}

export default dataReducer;