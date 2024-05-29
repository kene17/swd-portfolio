import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section
      id='skills'
      className={styles.container}
    >
      <h1 className='sectionTitle'>Skills</h1>
      <h3 className={styles.sectionSubTitle}>Languages & Frameworks:</h3>
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill='Java 11'
        />
        <SkillList
          src={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList
          src={checkMarkIcon}
          skill='NodeJs'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Python'
        />
        <SkillList
          src={checkMarkIcon}
          skill='ReactJS'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Redux'
        />
        <SkillList
          src={checkMarkIcon}
          skill='NextJs'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Spring Boot'
        />
        <SkillList
          src={checkMarkIcon}
          skill='TypeScript'
        />
      </div>
      <hr />
      <h3 className={styles.sectionSubTitle}>Technologies:</h3>
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill='AWS'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Azure'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Docker'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Webpack'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Jenkins'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Kubernetes'
        />
        <SkillList
          src={checkMarkIcon}
          skill='MySQL'
        />
        <SkillList
          src={checkMarkIcon}
          skill='OpenShift'
        />
        <SkillList
          src={checkMarkIcon}
          skill='PostgreSQL'
        />
      </div>
      <hr />
      <h3 className={styles.sectionSubTitle}>Testing & CI/CD:</h3>
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill='CI/CD pipelines'
        />
        <SkillList
          src={checkMarkIcon}
          skill='JUnit'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Mockito'
        />
        <SkillList
          src={checkMarkIcon}
          skill='Selenium'
        />
        <SkillList
          src={checkMarkIcon}
          skill='CSS and HTML testing with JQuery'
        />
      </div>
    </section>
  );
}

export default Skills;
