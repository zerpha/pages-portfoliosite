import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navComponent'
import HomeComponent from './components/homeComponent'
import SkillsComponent from './components/skillsComponent'
import ProjectsComponent from './components/projectsComponent'
import HobbiesComponent from './components/hobbiesComponent'
import ContactComponent from './components/contactsComponent'

function App() {
  return (
    <div className="App">
        <NavComponent />
        <HomeComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <HobbiesComponent />
        <ContactComponent />
    </div>
  );
}

export default App;
