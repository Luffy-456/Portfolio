import styles from './HeroStyle.module.css';
import heroimg from '../../assets/hero-img.png';
import githubLight from '../../assets/github-light.svg';
import twitterLight from '../../assets/twitter-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubDark from '../../assets/github-dark.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import {useTheme} from '../../common/ThemeContex';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
function Hero() {

  const{theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ?sun : moon;
  const twitterIcon = theme === 'light' ?twitterLight : twitterDark;
  const githubIcon = theme === 'light' ?githubLight : githubDark;
  const linkedinIcon = theme === 'light' ?linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>

      {/* profile pic here */}
        <div className={styles.colorModeContainer}>
            <img className ={styles.hero} src ={heroimg} alt="profile pic img here" />
            {/* theme swithcer */}
            <img className ={styles.colorMode} src ={themeIcon} alt="themeToggle img"
            onClick={toggleTheme}/>
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
            <p className={styles.description} >Add somthing about myself later</p>
            
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