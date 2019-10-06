const initialState = {
    index: 0
}
const reducer = (state = initialState, action) =>{
    const newState = {...state};

    switch (action.type){
        case "NEXT_IMAGE": {
            if (newState.index < 6){
                newState.index++;
            }
            break;
        }
        case "PREV_IMAGE": {
            if (newState.index > 0){
                newState.index--;
            }
            break;
        }
        default:
        break;
    }
    return newState;
}
export default reducer;