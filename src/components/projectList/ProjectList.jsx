import React from 'react'
import "./projectList.scss"
const ProjectList = ({id,title,active,setSelected}) => {
    return (
        <li onClick={()=>setSelected(id)} className={active ? "portfolioList active":"portfolioList"}>
            {title}
        </li>
    )
}

export default ProjectList
