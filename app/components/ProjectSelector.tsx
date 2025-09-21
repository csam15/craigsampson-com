"use client";

import { useState } from "react";

export default function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState<string | null>("FSD");

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
  };

  return (
    <>
      <div className="flex flex-col sm:items-end gap-3 font-space text-xl lg:text-2xl 2xl:text-3xl text-primary">
        <div>
          <button
            className={`Project-selector-buttons ${selectedProject === "FSD" ? "bg-gray text-accent border-gray" : ""}`}
            onClick={() => handleProjectSelect("FSD")}
          >
            Full Stack Developer
          </button>
        </div>
        <div>
          <button
            className={`Project-selector-buttons ${selectedProject === "ET" ? "bg-gray text-accent border-gray" : ""}`}
            onClick={() => handleProjectSelect("ET")}
          >
            Electronics Technician
          </button>
        </div>
        <div>
          <button
            className={`Project-selector-buttons ${selectedProject === "CA" ? "bg-gray text-accent border-gray" : ""}`}
            onClick={() => handleProjectSelect("CA")}
          >
            Calligraphy Artist
          </button>
        </div>
      </div>
      <div className="h-screen border-2 border-background-secondary mt-4 w-full sm:w-[calc(100%-6rem)]">
        {selectedProject === "FSD" && (
          <div>
            <h2>Full Stack Developer</h2>
            <p>Details about the Full Stack Developer project...</p>
          </div>
        )}
        {selectedProject === "ET" && (
          <div>
            <h2>Electronics Technician</h2>
            <p>Details about the Electronics Technician project...</p>
          </div>
        )}
        {selectedProject === "CA" && (
          <div>
            <h2>Calligraphy Artist</h2>
            <p>Details about the Calligraphy Artist project...</p>
          </div>
        )}
      </div>
    </>
  );
}
