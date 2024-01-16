// Menu bar

const menu = document.querySelector('.hamItems');
const mobileNav = document.querySelector('.mob-nav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const hide = document.querySelector('.footer-social-icons-container');

menu.classList.add('invisible');

// Event Listener for hamburger
ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobileNav.classList.add('invisible');
  hide.classList.add('invisible');
});
// Event Listener for close button
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});
// Event Listener for menu items
menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});

// popup window

const myWorksSection = document.querySelector('.work-container');
const projectList = [
  {
    id: 1,
    title: 'To Do List',
    discription:
      'The to-do list is a tool that helps to organize a day. It simply lists the things that we need to do and allows us to mark them as complete. I will build a simple website that allows for doing that, and I will do it using ES6 and Webpack!',
    imageLink: './Assets/ToDoList.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
    liveLink: 'https://chandan-devs-tech.github.io/To-Do-list/dist/',
    sourceLink: 'https://github.com/Chandan-devs-tech/To-Do-list',
  },
  {
    id: 2,
    title: 'Spice Delights',
    discription:
      'Spice Delights is an Indian culinary project showcasing diverse flavors. Explore aromatic recipes like Baingan Bharta, Tandoori Chicken, Chicken Handi, and Matar Paneer. Experience the rich heritage of Indian cuisine with Flavors of India.',
    imageLink: './Assets/spice.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
    liveLink: 'https://chandan-devs-tech.github.io/Spice-Delights/',
    sourceLink: 'https://github.com/Chandan-devs-tech/Spice-Delights.git',
  },
  {
    id: 3,
    title: 'Math Magicians',
    discription:
      'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: ➕➖✖️➗ Make simple calculations. Read a random math-related quote. By building this application, I have learned how to use React.',
    imageLink: './Assets/math.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    liveLink: 'https://math-magicians-deploy-xitw.onrender.com/',
    sourceLink: 'https://github.com/Chandan-devs-tech/math-magicians.git',
  },
  {
    id: 4,
    title: 'Space Travelers Hub',
    discription:
      'Explore the cosmos with us! Embark on captivating space missions and book rockets for an unforgettable journey into the unknown. Get ready to experience the thrill of space travel like never before!',
    imageLink: './Assets/space.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    liveLink: 'https://space-travelers-hub-x05d.onrender.com/',
    sourceLink: 'https://github.com/Chandan-devs-tech/space-travelers-hub.git',
  },
  {
    id: 5,
    title: 'TV Maze',
    discription:
      'Explore & discover TV shows from all genres with TVMAZE Shows! Powered by TVMAZE API, our user-friendly platform offers info & summaries on drama, comedy, sci-fi, reality TV & more! Explore now!',
    imageLink: './Assets/tvmaze.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    liveLink: 'https://tvmaze-ia3b.onrender.com/',
    sourceLink:
      'https://github.com/Chandan-devs-tech/react-capstone-tvmaze.git',
  },
  {
    id: 6,
    title: 'Drive Easy',
    discription:
      'The DRIVE EASY APP is a web application that displays a list of cars. It allows you to add a car, to delete a car, and to reserve a car.',
    imageLink: './Assets/drive-1.png',
    technologies: ['Rails', 'React', 'Bootstrap', 'JavaSctipt'],
    liveLink: 'https://drive-easy-frontend.onrender.com/',
    sourceLink: 'https://github.com/Chandan-devs-tech/drive-easy-backend.git',
  },
];

const htmlStructure = (id, title, technologies) => {
  const techListItems = technologies
    .map((tech) => `<li class="languages">${tech}</li>`)
    .join('');
  return `<div class="firstContainer container-${id}">
        <div class="container2">
          <h3>${title}</h3>
          <ul class="list-language">
            ${techListItems}
          </ul>
          <div class="container2-btn">
            <button type="button" id="project-${id}" class="see-project click">See Project</button>
          </div>
        </div>
      </div>`;
};
projectList.forEach((project) => {
  myWorksSection.innerHTML += htmlStructure(
    project.id,
    project.title,
    project.technologies,
  );
});

// Start of popup section
const popup = (
  id,
  title,
  discription,
  imageLink,
  technologies,
  liveLink,
  sourceLink,
) => {
  const techListItems = technologies
    .map((tech) => `<li class="pop-languages languages">${tech}</li>`)
    .join('');
  return `<div class="overlay hide-overlay" id="popup-${id}">
    <div class="popupContainer">
      <div class="closeBtnContainer">
        <button class="closeBtn" id="closeBtn-${id}">&times</button>
        <img class="desktopCloseBtn" src="./Assets/Disabled1.svg" id="deskCloseBtn-${id}"/>
      </div>
      <div class="popupImgContainer1">
        <img class="popupImg popupImg-${id}" src="${imageLink}"/>
      </div>
      <div class="popDiv">
        <div class="popDiv1">
          <h1 class="popHeading">${title}</h1>
          <ul class="techList">
            ${techListItems}
          </ul>
        </div>
        <div class="popDiv3 popupBtnContainer">
          <button class="popupBtn">
            <a href="${liveLink}" target="_blank">See Live</a>
            <img src="./Assets/see live icon.svg"/>
          </button>
          <button class="popupBtn">
            <a href="${sourceLink}" target="_blank">See Source</a>
            <img src="./Assets/Vector.svg"/>
          </button>
        </div> 
        <div class="popDiv2">
          <p class="popPara">${discription}</p>
        </div>
      </div>
    </div>
  </div>`;
};

projectList.forEach((project) => {
  myWorksSection.innerHTML += popup(
    project.id,
    project.title,
    project.discription,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink,
  );
});

// Event listener for See Project Button:
projectList.forEach((project) => {
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click', () => {
    const showPop = document.getElementById(`popup-${project.id}`);
    showPop.style.display = 'flex';
  });
});

projectList.forEach((project) => {
  const closeBtn = document.getElementById(`closeBtn-${project.id}`);
  closeBtn.addEventListener('click', () => {
    const showpop2 = document.getElementById(`popup-${project.id}`);
    showpop2.style.display = 'none';
  });
});

projectList.forEach((project) => {
  const deskCloseBtn = document.getElementById(`deskCloseBtn-${project.id}`);
  deskCloseBtn.addEventListener('click', () => {
    const showpop3 = document.getElementById(`popup-${project.id}`);
    showpop3.style.display = 'none';
  });
});

// form validation
const form = document.querySelector('.contact-form');
const email = document.querySelector('.femail');
const errorMsg = document.querySelector('.errorMsg');
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMsg.textContent = 'Your email should be in lowercase';
  }
});

// Preserve data in local-storage

const uName = document.querySelector('.ftext');
// const textArea = document.querySelector(".ftextarea");

// Storing data

function storeData() {
  const userData = {
    userName: uName.value,
    userEmail: email.value,
    // userTextMsg: textArea.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(userData));
}

uName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
// textArea.addEventListener("focusout", storeData);

// Getting stored data

const uData = JSON.parse(localStorage.getItem('userInfo'));
if (uData) {
  uName.value = uData.userName;
  email.value = uData.userEmail;
  // textArea.value = uData.userTextMsg;
}

// Typewriter Effect

let i = 1;
const sentences = [
  'Hey there, I’m Chandan! ',
  ' FrontEnd Developer!',
  ' BackEnd Developer!',
  ' Full-stack Developer!',
];
const heroHeading = document.querySelector('.hero-intro-heading');

const typeWriter = () => {
  if (i < sentences.length) {
    const currentSentence = sentences[i];
    // eslint-disable-next-line
    typeText(currentSentence, 0);
  } else {
    i = 1;
    setTimeout(typeWriter, 0);
  }
};

const deleteFromBack = (text, index) => {
  if (index >= 0) {
    heroHeading.innerHTML = `${sentences[0]}<br>I’m a${text.substring(
      0,
      index,
    )}`;
    setTimeout(() => deleteFromBack(text, index - 1), 70);
  } else {
    setTimeout(typeWriter, 200);
  }
};

const deleteText = (text) => {
  deleteFromBack(text, text.length);
};

const typeText = (text, index) => {
  if (index <= text.length) {
    heroHeading.innerHTML = `${sentences[0]}<br>I’m a${text.substring(
      0,
      index,
    )}`;
    setTimeout(() => typeText(text, index + 1), 70);
  } else {
    i += 1;
    setTimeout(() => deleteText(text), 500);
  }
};

window.onload = () => {
  typeWriter();
};

// Typewriter effect
// const textElement = document.querySelector('.hero-intro-heading');
// const textArray = ['Hey there, I’m Chandan Gupta!',
//  'I’m a Software Engineer!',
// 'I’m a Full-Stack Developer!'];
// let index = 0;
// let isDeleting = false;
// let typingSpeed = 100;
// function type() {
//   const currentText = textArray[index];
//   if (!isDeleting) {
//     textElement.textContent = currentText.substring(0, textElement.textContent.length + 1);
//   } else {
//     textElement.textContent = currentText.substring(0, textElement.textContent.length - 1);
//   }
//   typingSpeed = isDeleting ? 50 : 60;
//   if (!isDeleting && textElement.textContent === currentText) {
//     isDeleting = true;
//     typingSpeed = 200; // Wait before deleting
//   } else if (isDeleting && textElement.textContent === '') {
//     isDeleting = false;
//     index = (index + 1) % textArray.length; // Move to the next sentence
//   }
//   setTimeout(type, typingSpeed);
// }
// setTimeout(type, 100);

// Adding functionality to form to send email to me :
// action = "https://formspree.io/f/xaykrgow";

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('userName');
  const email = formData.get('userEmail');
  const message = formData.get('userMessage');
  const mailtoLink = `mailto:chandanguptabsbs@gmail.com?subject=Message from ${name} ${email}&body=${message}`;
  window.location.href = mailtoLink;
});
