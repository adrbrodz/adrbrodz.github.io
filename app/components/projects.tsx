const Projects = () => {
    const projects = [
        {
            title: "Kamil Siemaszko — Muay Thai Trainer",
            link: "https://kamilsiemaszko.vercel.app/",
            behance: "https://www.behance.net/embed/project/233883997?ilo0=1",
        },
        {
            title: "Gabriela Potentas — Photography Portfolio",
            link: "https://www.gabrielapotentas.pl/",
            behance: "https://www.behance.net/embed/project/222793283?ilo0=1",
        },
        {
            title: "Gaja — Ezoteric Mobile App",
            behance: "https://www.behance.net/embed/project/222795407?ilo0=1",
        },
        {
            title: "rk-intranet — Internal Training Platform",
            behance: "https://www.behance.net/embed/project/216381351?ilo0=1",
        },
    ];

    return (
        <div id="projects" className="projects">
            <div>
                <p className="font-light text-lg mb-3">PROJECTS</p>
                <hr className="text-gray-300" />
            </div>
            {
                projects.map((project, id: number) =>
                    <div key={id} className="flex-row mx-auto w-min lg:my-10">
                        <p className="font-semibold ">{project.title}</p>
                        {
                            project.link &&
                            <p className="mt-3 underline font-light">
                                <a href={project.link} target="_blank">{project.link}</a>
                            </p>
                        }
                        <div className="iframe">
                            <iframe
                                className="sm:w-[25rem] xl:w-[30rem]"
                                src={project.behance}
                                allowFullScreen
                                allow="clipboard-write"
                                referrerPolicy="strict-origin-when-cross-origin" />
                        </div>
                    </div>
                )
            }
            <hr className="text-gray-300" />
        </div>
    )
}

export default Projects;