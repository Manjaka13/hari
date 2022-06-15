import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectEmpty from "./ProjectEmpty";
// import { useProject } from "../hooks/useProject";

/*
	Displays list of projects
*/

const projects = [
	{
		name: "Namanagasycar",
		date: "2015",
		description: "Jonathan's Namanagasy website were one of my first projects, it was originally designed with HTML/CSS and currently using NextJS.",
		image: "/assets/projects/namanagasycar.jpg",
		link: {
			github: "https://github.com/Manjaka13/namanagasycar",
			link: "https://namanagasycar.vercel.app"
		},
		tag: ["react", "next", "typescript", "sass", "node", "express", "mongo"],
	}
];

const ProjectList = () => {
	const mappedProjects = projects.map((project) => (
		<ProjectCard project={ project } key={ uuidv4() } />
	));

	return (
		<Fragment>
			{/*<ProjectEmpty />*/}
			<div className="project-list container">
				<div className="list w-100 pd-t-20 pd-b-20">
					{ mappedProjects }
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectList;
