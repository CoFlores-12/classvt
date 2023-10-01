import Image from "next/image"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faBook
} from "@fortawesome/free-solid-svg-icons";


export default function ItemList({src, name, description, due, isDone}) {
    return (
        <div className="itemMain">
            <div className={"logo " + (isDone ? "done" : "pending")}>
                <FontAwesomeIcon icon={faBook} />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="data">
                <div className="date">
                    <p>{due.split(',')[0]}</p>
                    <p>{due.split(',')[1]}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}