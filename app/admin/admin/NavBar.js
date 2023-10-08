"use client"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars
} from "@fortawesome/free-solid-svg-icons";
import './admin.css'
import Logo from "@/app/components/logo";
import { useState } from "react";

export default function NavBar({setActive}) {
    const [isHide, setHide] = useState(true);

    function handleMenu(id) {
        setActive(id);
        document.querySelector('.active').classList.remove('active');
        document.getElementById(id+"Item").classList.add('active');
    }

    return (
        <nav className="bg-indigo-900 flex flex-col items-center text-white pt-5 pb-5 pl-3 pr-3">
            <div style={{"width": "100%"}} id="navCont" className="flex flex-col justify-between items-center sm:flex-row">
                <div className="flex flex-row items-center justify-between " style={{width: '100%'}}>
                    <div className="flex flex-row items-center">
                        <Logo height={30} width={30}/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">ClassVT</span>
                    </div>
                    <div onClick={() => setHide(!isHide)} className="tn bg-indigo-900 text-white block sm:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                <div className={"menu sm:block "+(isHide ? 'hidden' : '')}>
                    <ul className="flex flex-col sm:flex-row items-center">
                        <li onClick={()=>handleMenu('Home')} className="active" id="HomeItem"><a href="#home">Home</a></li>
                        <li id="ClassesItem" onClick={()=>handleMenu('Classes')}><a href="#Classes">Classes</a></li>
                        <li id="TeachersItem" onClick={()=>handleMenu('Teachers')}><a href="#teachers">Teachers</a></li>
                        <li id="StudentsItem" onClick={()=>handleMenu('Students')}><a href="#students">Students</a></li>
                    </ul>
                </div>
                
            </div>
           
           
        </nav>
    )
}