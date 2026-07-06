import { useMemo, useState } from 'react';

export default function ProjectShowcase({ projects }) {
  const categories = useMemo(() => ['Todos', ...new Set(projects.map((project) => project.category))], [projects]);
  const [active, setActive] = useState('Todos');

  const filteredProjects = active === 'Todos' ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="project-showcase">
      <div className="filter-bar" aria-label="Filtrar proyectos">
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}>
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <div className="project-visual">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <span>{String(index + 1).padStart(2, '0')}</span>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={project.live}>Ver demo</a>
              <a href={project.github}>Código</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
