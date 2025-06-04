import React from "react";

function Projects() {
  const projectData = [
    {
      title: "React Space",
      description:
        "Handy tool to create amazing AR components in a React app, with redux integration via middleware",
      image: "/react-space.jpg",
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥",
      image: "/react-scroll.jpg",
    },
    {
      title: "Photo Gallery",
      description:
        "A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      image: "/photo-gallery.jpg",
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      image: "/event-planner.jpg",
    },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#155c2f", // dark green
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2 className="text-white fw-bold mb-4">Featured Projects</h2>
        <div className="row g-4">
          {projectData.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src={project.image}
                  className="card-img-top rounded-top-4"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-sm btn-outline-dark">
                    See more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
