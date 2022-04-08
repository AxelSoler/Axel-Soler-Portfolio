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

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

const stories = [
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: './images/design.jpg',
    featured_image2: './images/picturePopup.png',
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
    live: 'https://axelsoler.github.io/Axel-Soler-Portfolio/',
    source: 'https://github.com/AxelSoler',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: './images/design.jpg',
    featured_image2: './images/picturePopup.png',
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
    live: 'https://axelsoler.github.io/Axel-Soler-Portfolio/',
    source: 'https://github.com/AxelSoler',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: './images/design.jpg',
    featured_image2: './images/picturePopup.png',
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
    live: 'https://axelsoler.github.io/Axel-Soler-Portfolio/',
    source: 'https://github.com/AxelSoler',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    desktopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image1: './images/design.jpg',
    featured_image2: './images/picturePopup.png',
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
    live: 'https://axelsoler.github.io/Axel-Soler-Portfolio/',
    source: 'https://github.com/AxelSoler',
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
      `;
}

let lists2 = '';

stories[0].technologies2.forEach((technology) => {
  lists2 += `<li>${technology}</li>`;
});

const modal = document.querySelector('.modal');
const bodyBlur = document.querySelector('.container');
const openModal = document.querySelectorAll('.project');

openModal.forEach((n) => n.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  bodyBlur.classList.toggle('active');
  modal.classList.toggle('active');
  modal.innerHTML = `
  <div class="popupWindow">
  <div class="storyPop">
  <div class="popupSection">
    <h3 id="popupTitle" class="post">${stories[0].name}</h3>
    <img id="popupClose" class="close_window" onclick="removePopup()" src="./images/Close.png" alt="Close">
  </div>
  <img class="picture" src=${stories[0].featured_image2} alt="image about my story"/>          
  <p id="mobileDescription" class="postDescription">${stories[0].mobileDescription}</p>
  <p id="desktopDescription" class="postDescription">${stories[0].desktopDescription}</p>   
  <ul class="code">${lists2}
  </ul>
  <div class="buttonsPopup">
  <a href="${stories[0].live}"><button class="buttonOrder1" type="button">See Live<img src="./images/Icon.png" alt="link"></button></a>
  <a href="${stories[0].source}"><button class="buttonOrder2" type="button">See Source<img src="./images/Gato.png" alt="github"> </button></a>
  </div>
  </div>
  </div>`;
}));

function removePopup() {
  document.body.style.overflow = '';
  bodyBlur.classList.remove('active');
  modal.classList.remove('active');
}

removePopup();

const form = document.getElementById('formAction');
const email = document.getElementById('email');
const emailError = document.getElementById('nameError');

form.addEventListener('submit', (e) => {
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');

  if (!email.value.match(emailRegex)) {
    e.preventDefault();
    emailError.classList.add('active');
    emailError.style.display = 'block';
  } else {
    emailError.classList.remove('active');
    emailError.style.display = 'none';
  }
});

email.addEventListener('input', () => {
  if (email.textContent === '') {
    emailError.style.display = 'none';
  }
});

form.addEventListener('input', () => {

  let forms = {
  userName: document.getElementById('user-name').value,
  userMail: document.getElementById('email').value,
  userText: document.getElementById('user-comment').value,
};
localStorage.setItem('formsList',JSON.stringify(forms));
});


function setForm() {

  const storedInput = JSON.parse(localStorage.getItem('formsList'));

  if (storedInput) {

    let userN = storedInput.userName;
    let userM = storedInput.userMail;
    let userT = storedInput.userText;
    
  }
};

