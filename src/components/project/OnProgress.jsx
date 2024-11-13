import React, { useContext, useState } from 'react';
import { ProjectContext } from '../../context';
import { dateFormatter } from './../../util';

export default function OnProgress({deleteTask, handleEditTask}) {
    // Retrieve project data from the ProjectContext
    const { projectData } = useContext(ProjectContext);
    // Filter projects with the category 'done' and sort by due date in descending order initially
    const baseData = projectData.filter(project => project.category === 'inprogress');
    const [lowToHighSort, setLowToHighSort] = useState(false);
  
    // Sort function for updating order based on sort direction
    const handleSorting = () => {
      setLowToHighSort(prevState => !prevState); // Toggle the sort order
    };
  
    // Sort the filtered data based on the current state (ascending or descending)
    const filteredProjectData = lowToHighSort
      ? baseData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      : baseData.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-yellow-500 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">On Progress ({filteredProjectData.length})</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                    onClick={handleSorting}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l9 0" />
                    <path d="M4 12l7 0" />
                    <path d="M4 18l7 0" />
                    <path d="M15 15l3 3l3 -3" />
                    <path d="M18 6l0 12" />
                  </svg>
                </div>

                {filteredProjectData.map(project => (
                <div key={project.id} className="mb-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex justify-between">
                    <h4 className="mb-2 flex-1 font-semibold text-yellow-500">
                    {project.taskName}
                    </h4>
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 cursor-pointer text-zinc-300"
                        onClick={() => deleteTask(project.id)}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path
                          d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                        />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                      <svg
                        className="h-4 w-4 cursor-pointer text-zinc-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={()=>handleEditTask(project)}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-zinc-200">
                  {project.description}
                  </p>

                  <p className="mt-6 text-xs text-zinc-400">{dateFormatter.format(new Date(project.dueDate))}</p>
                </div>
                ))}


              </div>
            </div>
  )
}
