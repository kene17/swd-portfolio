import { SkillListProps } from './config';

const SkillList = ({ src, skill }: SkillListProps) => {
  return (
    <span>
      <img
        src={src}
        alt='Checkmark icon'
      />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
