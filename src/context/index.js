import { createContext } from 'react';

// Create a context for project-related data
const ProjectContext = createContext("");
const ModalContext = createContext("");

// Export the ProjectContext for use in other components
export {
    ModalContext, ProjectContext
};

