// import React from 'react'

import { redirect } from "react-router-dom";

function getAuthToken() {
    const token = localStorage.getItem('token');
  return (token)
}
export default getAuthToken;
 export function tokenLoader() {
  return (getAuthToken)
}
 export function checkAuthLoader(){
    const token =getAuthToken();
    if (!token) {
        return redirect('/auth')
    }
 }
// export function checkRole() {
//     const token =getAuthToken();
//     if(token.role === 'admin'){
         
//     }
// }
