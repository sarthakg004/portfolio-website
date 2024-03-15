function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const projects = [
  {
    title: 'Project One',
    image: 'project-1.png',
    github: 'https://github.com/your_username/project1',
    demo: 'https://your_project1_demo_url.com'
  },
  {
    title: 'Project Two',
    image: 'project-2.png',
    github: 'https://github.com/your_username/project2',
    demo: 'https://your_project2_demo_url.com'
  },
  {
    title: 'Project Three',
    image: 'project-3.png',
    github: 'https://github.com/your_username/project2',
    demo: 'https://your_project2_demo_url.com'
  }
];


projects.forEach(project => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('details-container', 'color-container');
  projectElement.innerHTML = `
    <div class="article-container">
      <img src="./assets/${project.image}" alt="${project.title}" class="project-img" />
    </div>
    <h2 class="experience-sub-title project-title">${project.title}</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn" onclick="location.href='${project.github}'">Github</button>
      <button class="btn btn-color-2 project-btn" onclick="location.href='${project.demo}'">Live Demo</button>
    </div>
  `;
  projectContainer.appendChild(projectElement);
});
