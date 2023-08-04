import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import { useRef, useState } from "react";

const Portfolio = () => {
  const [TypeProyect, setTypeProyect] = useState("web");
  const web = useRef(null);
  const ios = useRef(null);

  const handleTypeProyect = (e) => {
    const element = e.target;
    if (element === web.current) {
      ios.current.classList.remove("activeType");
      web.current.classList.add("activeType");
    } else {
      web.current.classList.remove("activeType");
      ios.current.classList.add("activeType");
    }
    setTypeProyect(e.target.textContent);
  };

  const ProjectList = () =>
    projectData.map((project, i) => {
      return project.type === TypeProyect ? (
        <Project
          key={i}
          id={project.id}
          title={project.title}
          technologies={project.technologies}
          image={project.image}
          color={project.bgcolor}
          github={project.github}
          deployed={project.deployed}
          description={project.description}
          type={project.type}
        />
      ) : null;
    });

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" />
      <div className="typeProyect">
        <p
          onClick={handleTypeProyect}
          className="hover-underline-animation activeType"
          ref={web}
        >
          web
        </p>
        <p
          ref={ios}
          onClick={handleTypeProyect}
          className="hover-underline-animation"
        >
          ios
        </p>
      </div>
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
