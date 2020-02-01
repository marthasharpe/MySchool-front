import { db } from '../firebase';

export const SET_SUBJECTS = 'SET_SUBJECTS';

export const setSubjects = () => {
    return (dispatch) => {
        db.collection('subjects').get()
            .then(res => res.docs.forEach(doc => {
                dispatch({
                    type: SET_SUBJECTS,
                    payload: doc.data()
                })
            }
        ))
    }
}