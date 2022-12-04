import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetchOn } from '../utils/firestoreUtils';

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOn(idItem)
            .then(response => setDato(response))
            .catch(err => console.log(err));

    }, [])

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;