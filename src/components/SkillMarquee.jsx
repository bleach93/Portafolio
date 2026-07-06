export default function SkillMarquee({ skills }) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="skill-marquee" aria-label="Habilidades técnicas">
      <div className="skill-track">
        {repeatedSkills.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
