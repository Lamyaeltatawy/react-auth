// import React from 'react'
import { redirect } from 'react-router-dom';

const actions = () => {
    localStorage.removeItem('token');
    return (redirect('/'))
}

export default actions ;
