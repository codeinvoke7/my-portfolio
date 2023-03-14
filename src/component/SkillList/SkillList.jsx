import classes from "./SkillList.module.css";

const SkillList = () => {
  const skillset = [
    {
      id: 1,
      skill: "HTML",
      experience: 3,
    },

    {
      id: 2,
      skill: "CSS",
      experience: 3,
    },

    {
      id: 3,
      skill: "JavaScript",
      experience: 3,
    },

    {
      id: 4,
      skill: "PHP",
      experience: 3,
    },

    {
      id: 5,
      skill: "React",
      experience: 2,
    },

    {
      id: 6,
      skill: "JQuery",
      experience: 3,
    },

    {
      id: 7,
      skill: "Bootstrap",
      experience: 3,
    },
  ];

  const skills = [];
  for (const skillsData of skillset) {
    skills.push(
      <div key={skillsData.id}>
        <div className="col text-white pb-2">
          <h2>{skillsData.skill}</h2>
          <p>{skillsData.experience} Years Experience</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div
        className={`${classes.skillitem} row row-cols-1 row-cols-md-3 row-cols-lg-3 p-4`}
      >
        {skills}
      </div>
    </div>
  );
};

export default SkillList;
