const SkillList = ({ icon, skillName }) => {
  return (
    <>
      <span>
        <img src={icon} alt="Checkmark icon" />
        <p>{skillName}</p>
      </span>
    </>
  );
};

export default SkillList;
