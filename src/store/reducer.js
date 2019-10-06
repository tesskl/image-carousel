const initialState = {
    index: 4
}
const reducer = (state = initialState, action) =>{
    const newState = {...state};

    switch (action.type){
        case "NEXT_IMAGE": {
            newState.index++;
            break;
        }
        case "PREV_IMAGE": {
            newState.index--;
            break;
        }
    }
    
    return newState;
}
export default reducer;