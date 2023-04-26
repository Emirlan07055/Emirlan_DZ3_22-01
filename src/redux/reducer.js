const initialState = {
    count: 0
}

export default function reducer(state = initialState,action) {
    switch (action.type){
        case "INCREMENT":
            return {
                count: state.count+1
            }
        case "DECREMENT":
            return {
                count: state.count > 0 ? state.count-1:0
            }
        default:
            return state
    }
}