// js/projects.js  —  Dynamically renders project cards from DATA

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = DATA.projects
    .map(
      (p) => `
    <div class="project-card reveal">
      <div class="project-header">
        <div class="project-icon" style="background:${p.iconBg}">
          <i class="${p.icon}"></i>
        </div>
        <div class="project-links">
          ${
            p.github
              ? `<a href="${p.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`
              : ''
          }
          ${
            p.demo
              ? `<a href="${p.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>`
              : ''
          }
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="tech-stack">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// Auto-render on script load
renderProjects();
