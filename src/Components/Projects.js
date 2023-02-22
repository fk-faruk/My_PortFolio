import React from "react";
import { Card } from "flowbite-react";
import { Project } from "Portfolio";

const fff = Project;

const ddd = fff.map((sin) => {
  return sin.name;
});
console.log(ddd);

const Projects = () => {
  return (
    <>
      <div className="max-w-sm" id="project">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          {Project.map((single) => {
            return (
              <>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {single.name}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {single.content}
                </p>
              </>
            );
          })}
        </Card>
      </div>
    </>
  );
};

export default Projects;
