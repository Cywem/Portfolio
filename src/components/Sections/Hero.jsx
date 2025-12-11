import './hero.css'

const Hero = () => {
  return (
    <section className="hero-section" role="region" aria-label="Hero Section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>CYREM</h1>
        </div>
        <div className="hero-subtitle">
          <h1 className='job-title'>Front-End Developer</h1>
          <p className='job-summary'>Im Kent Cyrem Patasin I focus on Web Development, Prototyping, Wireframing & UI/UX Design, creating interfaces that are clear, functional, and easy to use.</p>
          <p className='location'>Calamba, Philippines</p>
          
          <div className='find-me-container'>
            <p>YOU CAN FIND ME</p>
            <div className='find-me-icons'>
              <img src="/src/assets/icons/linkedin.svg" alt="LinkedInIcon"/>
              <img src="/src/assets/icons/github.svg" alt="GithubIcon"/>
            </div>
          </div>

          <button>DOWNLOAD CV</button>
        </div>


        
      </div>
    </section>
  )
}

export default Hero
