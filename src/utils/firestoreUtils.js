import { db } from '../utils/firebaseConfiguracion'
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async (idCat) => {
    let q
    if (idCat) {
        q = query(collection(db, "productos"), where('categoriaId', '==', parseInt(idCat)))
    } else {
        q = query(collection(db, "productos"))
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const firestoreFetchOn = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}