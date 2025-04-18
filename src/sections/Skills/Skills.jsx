import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
    return (
    <section id="skills" className={styles.container}>
          <h1 className="sectionTitle">Skills</h1>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
            <SkillList src={checkMarkIcon} skill="NODE" />
            </div>
            <hr/>
            <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="PYTHON" />
            <SkillList src={checkMarkIcon} skill="C" />
            <SkillList src={checkMarkIcon} skill="C++" />
            <SkillList src={checkMarkIcon} skill="JAVA" />
            <SkillList src={checkMarkIcon} skill="DBMS" />
            <SkillList src={checkMarkIcon} skill="GIT" />
        </div>
    </section>
  )
}

export default Skills