import React from 'react'
import ProjectDashboard from './components/ProjectDashboard'
import Sidebar from './components/Sidebar'

export default function ProjectBook() {
  return (
    <div class="flex h-screen">
        <Sidebar />
        <ProjectDashboard />
    </div>
  )
}
