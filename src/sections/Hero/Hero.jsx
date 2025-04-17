import styles from './HeroStyle.module.css'
import heroimg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import githubIcon from '../../assets/github-light.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
function Hero() {
  return (
    <section id="hero" className={styles.container}>

      {/* profile pic here */}
        <div className={styles.colorModeContainer}>
            <img className ={styles.hero} src ={heroimg} alt="profile pic img here" />
            <img className ={styles.colorMode} src ={themeIcon} alt="themeToggle img"/>
        </div>

        {/* info div */}
        <div className={styles.info}>
            <h1>Anshuman <br/> Sharma</h1>
            <h2>Learning Stuff</h2>

            {/* social links */}
            <span>
                <a href="https://github.com/Luffy-456" >
                <img src ={githubIcon} alt="GithubIcon" />
                </a>
                <a href="https://twitter.com/" >
                <img src ={twitterIcon} alt="TwitterIcon" />
                </a>
                <a href="https://linkedin.com/" >
                <img src ={linkedinIcon} alt="LinkedinIcon" />
                </a>
            </span>

            {/* aboutbusiness */}
            <p>Add somthing about myself later</p>
            
            {/* cv/resume */}
            {/* ADD CV LATER  */}
            <a href={CV} download>
              <button className ="hover" download>
                Resume
              </button>
              <p>Add my cv later</p>
            </a>
        </div>
    </section>
  )
}

export default Hero