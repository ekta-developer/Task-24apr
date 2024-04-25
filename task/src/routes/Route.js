import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import User_list from '../pages/User_list';
import SignUp from '../pages/SignUp';
const Router=()=>{
    return (
        <>
         <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path='/user-list' element={<User_list/>}></Route>
            <Route path='/register' element={<SignUp/>}></Route>
         </Routes>
         </BrowserRouter>
        </>
    )
}

export default Router;