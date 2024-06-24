import { projects } from "../../data.js";
import "./projects.css";

const Projects = () => {

    return (
        <>
            <div className="project-body">
                <div class="container mt-5">
                    <div class="card-outer">
                            {
                                projects.map((it, idx) => {
                                    return (
                                        <>
                                            <div class="card" key={idx}>
                                                <img src={it.image} class="card-img-top" alt="Card Image 1" />
                                                <div class="card-body">
                                                    <h5 class="card-title">{it.title}</h5>
                                                    <p class="card-text">{it.description}</p>
                                                    <a href={it.link} class="btn btn-primary">See Project</a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;