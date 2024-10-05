import { useParams } from "react-router-dom";
import gitIcon from "./../img/icons/gitHub-black.svg"
import {projects} from "./../helpers/projectList"
import img from "./../img/projects/02-big.jpg"
import { log } from "console";

const PRoject = () => {
    // const {id} = useParams()
    // const projeckt = projects[id]
    
    return (     <main className="section">
        {/* <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projeckt.title}</h1>

                <img src={projeckt.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <a href="https://github.com/" className="btn-outline">
                    <img src={gitIcon} alt=""/>
                    GitHub repo
                </a>

            </div>
        </div> */}
    </main> );
}
export default PRoject;