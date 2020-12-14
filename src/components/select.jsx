import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import {useDispatch, useSta} from 'react-redux'
const Select = (props)=>{
    const dispatch = useDispatch()
    const [filter, setFilter] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const changeFilter = (filter)=>{
        setFilter(filter)
        setDropdown(false);
        dispatch({ type:"FILTER_BY_REGION", payload:filter})
    }
    return(
        <div className="input-group">
            <input placeholder="select region" defaultValue={filter} className="input select" onClick={()=>setDropdown(d=>!d)}/>
            <span className="icon right">
                <FaAngleDown onClick={() => setDropdown(d => !d)} style={{cursor:'pointer'}}/>
            </span>
            {
                (dropdown) && <div className="list">
                    <span className="list-item" onClick={() => changeFilter("All")}>All</span>
                    <span className="list-item" onClick={() =>changeFilter("Africa")}>Africa</span>
                    <span className="list-item" onClick={() => changeFilter("America")}>America</span>
                    <span className="list-item" onClick={() => changeFilter("Asia")}>Asia</span>
                    <span className="list-item" onClick={() => changeFilter("Europe")}>Europe</span>
                    <span className="list-item" onClick={() => changeFilter("Oceania")}>Oceania</span>
                </div>
            }
        </div>
    )
}

export default Select