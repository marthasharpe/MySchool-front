import { dummyData } from '../dummyData.js';
// import { GET_DATA } from '../actions/actionCreators';

const rootReducer = (state = dummyData, action) => {
    switch (action.type) {
        // case GET_DATA:
        //     return {
        //         ...state,
        //         resources: [...action.data],
        //     }
        default:
            return state
    }
}

export default rootReducer;