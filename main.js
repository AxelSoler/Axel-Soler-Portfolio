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

const stories = [
  {
    name: 'Multi-Post Stories',
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: "./images/design.jpg",
    featured_image2:"./images/picturePopup.png",
    technologies: [
      'CSS',
      'html',
      'bootstrap',
      'ruby',
    ],
    technologies2: [
      'html',
      'Ruby on rails',
      'CSS',
      'Github',
    ],
    live:'#',
    source:'#',
  },
  {
    name: 'Multi-Post Stories',
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: "./images/design.jpg",
    featured_image2:"./images/picturePopup.png",
    technologies: [
      'CSS',
      'html',
      'bootstrap',
      'ruby',
    ],
    technologies2: [
      'html',
      'Ruby on rails',
      'CSS',
      'Github',
    ],
    live:'#',
    source:'#',
  },
  {
    name: 'Multi-Post Stories',
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: "./images/design.jpg",
    featured_image2:"./images/picturePopup.png",
    technologies: [
      'CSS',
      'html',
      'bootstrap',
      'ruby',
    ],
    technologies2: [
      'html',
      'Ruby on rails',
      'CSS',
      'Github',
    ],
    live:'#',
    source:'#',
  },
  {
    name: 'Multi-Post Stories',
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: "./images/design.jpg",
    featured_image2:"./images/picturePopup.png",
    technologies: [
      'CSS',
      'html',
      'bootstrap',
      'ruby',
    ],
    technologies2: [
      'html',
      'Ruby on rails',
      'CSS',
      'Github',
    ],
    live:'#',
    source:'#',
  },
];

const workStory = document.querySelector('.work');
let lists = '';

stories[0].technologies.forEach((technology) => {
  lists += `<li>${technology}</li>`;
});
for (let i = 0; i < stories.length; i += 1) {
workStory.innerHTML += `
      <div class="story">
          <img class="picture" src=${stories[i].featured_image1} alt="image about my story"/>
          <div class="pictureDescription">
          <h3 class="post">${stories[i].name}</h3>
          <p class="postDescription">${stories[i].description}</p>
          <ul class="code">${lists}
          </ul>
          <button data-id="${i}" class="project" type="button">See Project</button>
        </div>
      </div>
      `
};

let lists2 = '';

stories[0].technologies2.forEach((technology) => {
  lists2 += `<li>${technology}</li>`;
});

const modal = document.querySelector('.modal')
const bodyBlur = document.querySelector('.container')
const openModal = document.querySelectorAll('.project')

openModal.forEach((n) => n.addEventListener('click', () => {
  bodyBlur.classList.toggle('active')
  modal.classList.toggle('active')
  modal.innerHTML =`
  <div class="popupWindow">
  <div class="storyPop">
  <div class="popupSection">
    <h3 id="popupTitle" class="post">${stories[0].name}</h3>
    <img id="popupClose" class="close_window" src="./images/Close.png" alt="Close">
  </div>
  <img class="picture" src=${stories[0].featured_image2} alt="image about my story"/>          
  <p id="mobileDescription" class="postDescription">${stories[0].mobileDescription}</p>
  <p id="desktopDescription" class="postDescription">${stories[0].desktopDescription}</p>   
  <ul class="code">${lists2}
  </ul>
  <div class="buttonsPopup">
  <button class="buttonOrder1" type="button">See Live<img src="./images/Icon.png" alt="link"></button>
  <button class="buttonOrder2" type="button">See Source<img src="./images/Gato.png" alt="github"> </button>       
  </div>
  </div>
</div>`
;
}));
