import React from "react";
import { useState,useEffect } from "react";
import ProjectList from "../projectList/ProjectList";
import { projectInfoAll,projectInfoFrontEnd,projectInfoBackEnd,projectInfoReact,other } from "../../projectsInfo";
import "./projects.scss";
const Projects = () => {
    const [selected, setSelected] = useState("all");
    const [projectType,setProjectType]=useState([])
	const list = [
		{
			id: "all",
			title: "All",
		},
		{
			id: "reactProject",
			title: "React Project",
		},
		{
			id: "frontEndProject",
			title: "FrontEnd Project",
		},
		{
			id: "backEndProject",
			title: "BackEnd Project",
		},
		{
			id: "other",
			title: "Other",
		},
    ];
    useEffect(() => {

        if (selected === "all") {
            setProjectType(projectInfoAll)
            
        }
        else if (selected === "reactProject") {
            setProjectType(projectInfoReact)
        }
        else if (selected === "frontEndProject") {
            setProjectType(projectInfoFrontEnd)
        }
        else if (selected === "backEndProject") {
            setProjectType(projectInfoBackEnd)
        }
        else {
            setProjectType(other)
        }
    }, [selected])
	return (
		<div id='projects' className='projects'>
			<h1>Projects</h1>
			<ul>
				{list.map((item) => (
					<ProjectList
						key={item.id}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
						title={item.title}
					/>
				))}
			</ul>
			<div className='container'>
				{projectType.map((project) => (
					<div className='item' key={project.id}>
						<a href={project.url}>
							<img src={project.img} alt={ project.title}/>

                        </a>
                      <a href={project.url}><h3>{project.title}</h3></a>  


					</div>
				))}
				
			</div>
		</div>
	);
};

export default Projects;
