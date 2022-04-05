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

const workStory = document.querySelector('.work')

workStory.innerHTML = `
      <div class="story">
          <img class="picture" src="./images/design.jpg" alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">Multi-Post Stories</h3>
          <p class="postDescription">A daily selection of privately personalized reads; no accounts or sign-ups required.
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a standard dummy text.</p>
          <ul class="code">
              <li>CSS</li>
              <li>html</li>
              <li>bootstrap</li>
              <li class="last">ruby</li>
          </ul>
          <button class="project" type="button">See Project</button>
        </div>
      </div>
      <div class="story">
          <img class="picture" src="./images/design.jpg" alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">Multi-Post Stories</h3>
          <p class="postDescription">A daily selection of privately personalized reads; no accounts or sign-ups required.
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a standard dummy text.</p>
          <ul class="code">
              <li>CSS</li>
              <li>html</li>
              <li>bootstrap</li>
              <li class="last">ruby</li>
          </ul>
          <button class="project" type="button">See Project</button>
        </div>
      </div>
      <div class="story">
          <img class="picture" src="./images/design.jpg" alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">Multi-Post Stories</h3>
          <p class="postDescription">A daily selection of privately personalized reads; no accounts or sign-ups required.
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a standard dummy text.</p>
          <ul class="code">
              <li>CSS</li>
              <li>html</li>
              <li>bootstrap</li>
              <li class="last">ruby</li>
          </ul>
          <button class="project" type="button">See Project</button>
        </div>
      </div>
      <div class="story">
          <img class="picture" src="./images/design.jpg" alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">Multi-Post Stories</h3>
          <p class="postDescription">A daily selection of privately personalized reads; no accounts or sign-ups required.
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a standard dummy text.</p>
          <ul class="code">
              <li>CSS</li>
              <li>html</li>
              <li>bootstrap</li>
              <li class="last">ruby</li>
          </ul>
          <button class="project" type="button">See Project</button>
        </div>
      </div>
      `
