import { useState } from 'react';
import './App.css';
import ProjectBook from './ProjectBook';
import { ModalContext, ProjectContext } from './context';

function App() {
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ProjectContext.Provider value={{ projectData, setProjectData }}>
        <ModalContext.Provider value={{ showModal, setShowModal }}>
          <ProjectBook />
        </ModalContext.Provider>        
      </ProjectContext.Provider>     
    </>
  );
}

export default App;
