import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"
import app from "../../FirebaseConfig"



const db = getFirestore(app)



export const ADD_USER = (user) => {
    return async (dispatch) => {
        try {
            await addDoc(collection(db, 'login'), {
                email: user.email,
                password: user.password,
            })
            dispatch({
                type: 'addrecord'
            })
        }
        catch (err) {
            dispatch({
                type: 'adderror',
                payload: 'err'
            })
        }
    }
}


export const VIEW_USER = () => {
    return async (dispatch) => {
        try {

            const data = collection(db, 'login')
            const userList = await getDocs(data);
            const record = userList.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                type: 'viewuser',
                payload: record
            })

        } catch (err) {
            dispatch({
                type: 'viewerr',
                payload: err
            })
        }
    }
}


export const DELETE_USER = (id) => {
    return async (dispatch) => {
        try {
            let deleteData = await doc(db,'login',id);
            await deleteDoc(deleteData);
            alert("delete sucessfully..");

            dispatch({
                type: "delete",
                payload: id
            })
        } catch (err) {
            dispatch({
                type: "deleteerr",
                payload: err
            })
        }
    }
}


export const EDIT_USER = (user) => {
    return async(dispatch) => {
        try {
            let update = await doc(db,'login',user.id);
            await updateDoc(update, {
                email: user.email,
                password: user.password,
                status: user.status,
            });
            dispatch({
                type: 'edit',
                payload: user
            })
        } catch (err) {
            dispatch({
                type: 'editerr',
                payload: err
            })
        }
    }
}


export const FilterRecord = (status, search, sort) => {
    return async (dispatch) => {
        try {
            const data = collection(db, 'login');
            const userList = await getDocs(data);
            let all = userList.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            let filtered = all;

            if (status) {
                filtered = filtered.filter(val => val.status === status);
            }
            if (search) {
                filtered = filtered.filter(val => val.email.toLowerCase().includes(search.toLowerCase()));
            }
            if (sort === "asc") {
                filtered.sort((a, b) => a.email.localeCompare(b.email));
            } else if (sort === "dsc") {
                filtered.sort((a, b) => b.email.localeCompare(a.email));
            }

            dispatch({ 
                type: 'filterrecord', 
                payload: filtered
             });
        } catch (err) {
            dispatch({
                 type: 'filtererr',
                  payload: err 
                });
        }
    };
};
