import './Project.css';

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

      <div className='project-content'>

      </div>

    </section>
  )

}

export default Project;

