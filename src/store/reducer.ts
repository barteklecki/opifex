import {
    AppState,
    ADD_PART_TO_LIST,
    DELETE_PART_FROM_LIST,
    EDIT_PART_FROM_LIST,
    INFO_PART_FROM_LIST,
    PartsActionTypes,
} from './types';

const initiallState = {
    partsList: [
        {id: 0, name: 'Part1', qty: 1},
        {id: 1, name: 'Part2', qty: 1},
        {id: 2, name: 'Part3', qty: 1},
    ],
}

const reducer = (state: AppState = initiallState, action: PartsActionTypes): AppState => {
    switch( action.type ) {
        case ADD_PART_TO_LIST:
            let newId = 1 + Math.max.apply(Math, state.partsList.map(function(obj) { return obj.id; }));
            if (!state.partsList.length) {
                newId = 0;
            }
            return {
                ...state,
                partsList: state.partsList.concat(
                    {id: newId, name: `Part${newId+1}`, qty: 1}
                )
            };
        case DELETE_PART_FROM_LIST:
            const newPartsList = state.partsList.filter( element => element.id !== action.payload.id )
            return {
                ...state,
                partsList: newPartsList
            };
        case EDIT_PART_FROM_LIST:
            console.log(`[ Edit part id=${action.payload.id} ]`);
            return {
                ...state
            };
        case INFO_PART_FROM_LIST:
            console.log(`[ Info about part id=${action.payload.id} ]`);
            return {
                ...state
            };

    };
    return state;
}

export default reducer;