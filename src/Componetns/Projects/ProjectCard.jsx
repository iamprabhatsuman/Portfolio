const ProjectCard = ({ img, link, name, description }) => {
  return (
    <>
      <a href={link} target="_blank">
        <img src={img} className="hover" alt={`${name} logo`} />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    </>
  );
};

export default ProjectCard;
