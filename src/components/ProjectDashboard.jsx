import Header from "./Header";
import ProjectContent from "./ProjectContent";

export default function ProjectDashboard(){
    return (
        <main class="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
            <ProjectContent />
        </main>
    );
}
