"use client"
import { useState } from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBook
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'flowbite';

export default function Fab() {
    const [isHide, setHide] = useState(true);
    const modal = new Modal(document.getElementById('authentication-modal'),{});
    const newUser = new Modal(document.getElementById('newUser-modal'),{});
    const options = ['New className', 'New User'];
    return (
        <div className={"absolute bottom-10 right-10 flex flex-col items-end "}>
            <div className={"flex flex-col " + (isHide ? 'hidden': '')}>
            <div className="flex flex-row items-center justify-center mb-2">
                New Class
                <button
                         onClick={() => modal.show()}
                        className="flex flex-row items-center justify-center p-0 h-10 w-10 bg-indigo-900 rounded-full hover:bg-indigo-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none text-white p-3 ml-2">
                <FontAwesomeIcon icon={faBook} />
                </button>
            </div>
            <div className="flex flex-row items-center justify-center mb-2">
                New User
                <button
                    onClick={() => newUser.show()}
                        className="flex flex-row items-center justify-center p-0 h-10 w-10 bg-indigo-900 rounded-full hover:bg-indigo-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none text-white p-3 ml-2">
                <FontAwesomeIcon icon={faUser} />
                </button>
            </div>
            </div>
            <button onClick={() => setHide(!isHide)}
                    className={"p-0 w-10 h-10 bg-indigo-900 rounded-full hover:bg-indigo-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none sm:w-12 sm:h-12 "+ (isHide ? '' : 'rotate-45')}>
            <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z" />
            </svg>
            </button>
        </div>
       
    )
}