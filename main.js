const ham = document.querySelector('.tools');
const header = document.querySelector('.header2');
const closeX = document.querySelector('.close_window');
const logo = document.querySelector('.logo');
const logo2 = document.querySelector('.logo1');

ham.addEventListener('click', () => {
  header.classList.toggle('activate');
  ham.classList.toggle('desactivate');
  closeX.classList.toggle('activate');
  logo.classList.toggle('desactivate');
  logo2.classList.toggle('desactivate');
});

document.querySelectorAll('.menu_section').forEach((n) => n.addEventListener('click', () => {
  header.classList.remove('activate');
  ham.classList.remove('desactivate');
  closeX.classList.remove('activate');
  logo.classList.remove('desactivate');
  logo2.classList.remove('desactivate');
}));

closeX.addEventListener('click', () => {
  header.classList.remove('activate');
  ham.classList.remove('desactivate');
  closeX.classList.remove('activate');
  logo.classList.remove('desactivate');
  logo2.classList.remove('desactivate');
});

const Stories = [
  {
    name: 'Multi-Post Stories',
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featured_image: "./images/design.jpg",
    technologies: [
      'CSS',
      'html',
      'bootstrap',
      'ruby',
    ],
    live:'#',
    source:'#',
},
{
  name: 'Multi-Post Stories',
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featured_image: "./images/design.jpg",
  technologies: [
    'CSS',
    'html',
    'bootstrap',
    'ruby',
  ],
  live:'#',
  source:'#',
},
{
  name: 'Multi-Post Stories',
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featured_image: "./images/design.jpg",
  technologies: [
    'CSS',
    'html',
    'bootstrap',
    'ruby',
  ],
  live:'#',
  source:'#',
},
{
  name: 'Multi-Post Stories',
  description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featured_image: "./images/design.jpg",
  technologies: [
    'CSS',
    'html',
    'bootstrap',
    'ruby',
  ],
  live:'#',
  source:'#',
},
];

const workStory = document.querySelector('.work');
let lists = '';

Stories[0].technologies.forEach((technology) => {
  lists += `<li>${technology}</li>`;
});
for (let i = 0; i < Stories.length; i += 1) {
workStory.innerHTML += `
      <div class="story">
          <img class="picture" src=${Stories[0].featured_image} alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">${Stories[0].name}</h3>
          <p class="postDescription">${Stories[0].description}</p>
          <ul class="code"> ${lists}
          </ul>
          <button class="project" type="button">See Project</button>
        </div>
      </div>
      `
}
