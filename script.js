// Menu
const menu = document.querySelector('menu');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuNavElements = document.querySelector('menu nav').childNodes;

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
});

menuNavElements.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
  })
});

// Image
const image = document.getElementById('image');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');

const images = [
  {
    src: './images/food1.jpg',
    alt: 'Food 1',
  },
  {
    src: './images/food2.jpg',
    alt: 'Food 2',
  },
  {
    src: './images/food3.jpg',
    alt: 'Food 3',
  },
  {
    src: './images/food4.jpg',
    alt: 'Food 4',
  },
];

let imageIndex = 0;

const updateImage = () => {
  const newImage = images[imageIndex];
  image.src = newImage.src;
  image.alt = newImage.alt;
}

left.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (imageIndex === 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex--;
    }

    updateImage();
  });
});

right.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (imageIndex === images.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex++;
    }

    updateImage();
  });
});
