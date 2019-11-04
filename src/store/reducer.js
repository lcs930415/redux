const initialState={
    counter:5,
    results:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                counter:state.counter+action.value
            };
        case "DECREMENT":
            return {
                ...state,
                counter:state.counter+action.value
            };
        case "ADD" :
            return {
                ...state,
                counter:state.counter+action.value
            };
        case "SUBTRACT" :
            return {
                ...state,
                counter:state.counter+action.value
            };
        case "STORE_RESULT":
            return {
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})
            };
            // let updated = Object.assign({},state);
            // updated.results=state.results.concat({id:new Date(),value:state.counter});
            // return updated;
    }
    return state;
}

export default reducer;