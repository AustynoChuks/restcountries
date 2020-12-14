import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
export const Header = (props)=>{
    let mode = useSelector(state=>state.mode)
    let dispatch = useDispatch();
    const changeMode = ()=>{
        let m = (mode == "dark")? "light":"dark";
        dispatch({type:"CHANGE_MODE", payload:m})
        document.body.className = m+"-mode"
    }
    return(
        <div className="header">
            <div className="container">
                <div className="row space-between">
                    <div className="left">
                        <h3>Where in the world?</h3>
                    </div>
                    <div className="right">
                        <button onClick={changeMode}>
                        {
                                (mode == "dark") ? <h3><FaMoon /> Dark Mode</h3> : <h3><FaSun /> Light Mode</h3>
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}