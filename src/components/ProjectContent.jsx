import React, { useContext } from 'react';
import { ModalContext } from '../context';
import Done from './project/Done';
import OnProgress from './project/OnProgress';
import ProjectAddEditModal from './project/ProjectAddEditModal';
import Revised from './project/Revised';
import Todo from './project/Todo';

// ProjectContent component is the main container for the project board
export default function ProjectContent() {
  const { showModal, setShowModal } = useContext(ModalContext);
  
  return (
    <>
      {showModal && (<ProjectAddEditModal />)}
      <div className="mx-auto max-w-7xl p-6">
      
      {/* Header section with title and Add button */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        
        {/* Add button for creating new tasks/projects */}
        <div className="flex space-x-2">
          <button
            onClick={()=>setShowModal(true)}
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
            {/* Plus icon for Add button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>

      {/* Main content section for project status columns */}
      <div className="-mx-2 mb-6 flex flex-wrap">
        {/* Todo column */}
        <Todo />

        {/* On Progress column */}
        <OnProgress />

        {/* Done column */}
        <Done />

        {/* Revised column */}
        <Revised />
      </div>
    </div>
    </>
    
  );
}
