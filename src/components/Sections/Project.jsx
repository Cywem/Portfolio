import './Project.css';
import ProjectCard from '../UI/ProjectCard';
import kwiseSkeleton from '../../assets/images/kwise_skeleton.svg';
import kitsuneSkeleton from '../../assets/images/kitsune_skeleton.svg';

const Project = () => {
  return (
    <section className="project-section" id="projects">

      <div className='project-header'>
        <div className='project-header-container'>

          <div className='header-divider'></div>
          <div className='header-title-container'>
            <h2 className='header-title'>I MAKE PROJECTS</h2>
            <h2 className='header-title'>FEEL <span id='title-alive'>alive</span></h2>
            <p className='header-subtitle'>Selected projects</p>
          </div>
          
          <div className='marquee-wrapper'>
            <div className='marquee-gradient-left'></div>
            <div className='marquee-gradient-right'></div>
            <div className='marquee-track'>
              <ul className='marquee-content'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
              <ul className='marquee-content' aria-hidden='true'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='project-content'>
        <div className='project-content-container'>

          <div className='project-grid'>
            <ProjectCard
              title="K-Wise"
              category="AI System"
              date="Nov 2025"
              status="In progress"
              categoryColor="#66EECC"
              svgSrc={kwiseSkeleton}
              onClick={() => console.log('K-Wise clicked')}
            />
            <ProjectCard
              title="Kitsune"
              category="Prototype"
              date="Sept 2025"
              status="Completed"
              categoryColor="#FF6B6B"
              svgSrc={kitsuneSkeleton}
              onClick={() => console.log('Kitsune clicked')}
            />
            <ProjectCard
              title="HUBITS"
              category="Management System"
              date="In progress"
              status="In progress"
              categoryColor="#4ECDC4"
              onClick={() => console.log('HUBITS clicked')}
            />
            <ProjectCard
              title="ITS Explorer"
              category="Website"
              date="In progress"
              status="In progress"
              categoryColor="#FFD93D"
              onClick={() => console.log('ITS Explorer clicked')}
            />
            <ProjectCard
              title="PC Wise - PC Builder"
              category="Website"
              date="Coming soon..."
              status="Coming soon"
              categoryColor="#FFD93D"
              onClick={() => console.log('PC Wise clicked')}
            />
          </div>

        </div>
      </div>

    </section>
  )

}

export default Project;

