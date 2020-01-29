export const GET_DATA = 'GET_DATA';

export const getData = (data) => {
    return {
        type: GET_DATA,
        data
    }
    // return (dispatch) => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         dispatch({
        //             type: GET_DATA,
        //             data
        //         })
        //     })
    // }
}