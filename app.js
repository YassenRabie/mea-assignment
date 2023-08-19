const programsSlider = document.querySelector('#programs-slider')
const programsSliderLeftArrow = document.querySelector('#programs-slider-left-arrow')
const programsSliderRightArrow = document.querySelector('#programs-slider-right-arrow')
const programsSliderItemWidth = programsSlider.querySelector('.programs-section-slider-item').offsetWidth;

const numberOfItems = programsSlider.children.length;
let activeScrollingItem = 0;

// Update the disabled arrow button after moving the slider
const updateArrowsClass = () => {
  if (activeScrollingItem === 0) {
    programsSliderLeftArrow.disabled = true;
  } else if (activeScrollingItem === numberOfItems - 4) {
    programsSliderRightArrow.disabled = true
  } else {
    programsSliderLeftArrow.disabled = false
    programsSliderRightArrow.disabled = false
  }
}

updateArrowsClass();

// Move the slider to the right
programsSliderRightArrow.addEventListener('click', () => {
  programsSlider.scrollLeft += programsSliderItemWidth;

  activeScrollingItem++;

  updateArrowsClass();
})

// Move the slider to the left
programsSliderLeftArrow.addEventListener('click', () => {
  programsSlider.scrollLeft -= programsSliderItemWidth;

  activeScrollingItem--;

  updateArrowsClass();
})

// Recipes Slider

const recipesSlider = document.querySelector('#recipes-slider')
const recipesSliderLeftArrow = document.querySelector('#recipes-slider-left-arrow')
const recipesSliderRightArrow = document.querySelector('#recipes-slider-right-arrow')

let activeRecipesSliderScrollingItem = 0;

// Update the disabled arrow button after moving the slider
const updateRecipesSliderArrowsClass = () => {
  const numberOfRecipesSliderItems = recipesSlider.children.length;

  if (activeRecipesSliderScrollingItem === 0) {
    recipesSliderLeftArrow.disabled = true;
    recipesSliderRightArrow.disabled = false;
  } else if (activeRecipesSliderScrollingItem === numberOfRecipesSliderItems - 2) {
    recipesSliderLeftArrow.disabled = false;
    recipesSliderRightArrow.disabled = true
  } else {
    recipesSliderLeftArrow.disabled = false
    recipesSliderRightArrow.disabled = false
  }
}

// Reset recipes slider state
const resetRecipesSlider = () => {
  activeRecipesSliderScrollingItem = 0;
  recipesSlider.scrollLeft = 0;

  updateRecipesSliderArrowsClass();
}

// Move the slider to the right
recipesSliderRightArrow.addEventListener('click', () => {
  const recipesSliderItemWidth = recipesSlider.querySelector('.menu-section-content-recipes-item').offsetWidth + 32;

  recipesSlider.scrollLeft += recipesSliderItemWidth;

  activeRecipesSliderScrollingItem++;

  updateRecipesSliderArrowsClass();
})

// Move the slider to the left
recipesSliderLeftArrow.addEventListener('click', () => {
  const recipesSliderItemWidth = recipesSlider.querySelector('.menu-section-content-recipes-item').offsetWidth + 32;

  recipesSlider.scrollLeft -= recipesSliderItemWidth;

  activeRecipesSliderScrollingItem--;

  updateRecipesSliderArrowsClass();
})

// Recopies Category selector
const menuCategories = document.querySelector('#menu-categories').children;

const updateRecipesList = (categoryId) => {
  if (categoryId) {
    for (let i = 0; i < menuCategories.length; i++) {
      menuCategories[i].classList.remove('active');
    }

    document.getElementById(categoryId).classList.add('active');
  }

  recipesSlider.innerHTML = "";

  const categoryItem = MENU.find((e) => e.category === categoryId) || MENU[0];

  const menuItems = categoryItem.meals;

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];

    // Create card element
    const cardItem = document.createElement('div');
    cardItem.classList.add('menu-section-content-recipes-item');

    // Create card image element
    const cardImageContainerElement = document.createElement('div');
    cardImageContainerElement.classList.add('menu-section-content-recipes-item-image');
    const cardImage = document.createElement('img');
    cardImage.src = item.img;
    cardImageContainerElement.appendChild(cardImage);

    // Create card name element
    const cardNameElement = document.createElement('p');
    cardNameElement.classList.add('menu-section-content-recipes-item-name')
    cardNameElement.innerText = item.name;

    // Create card button element
    const buttonElement = document.createElement('button');
    buttonElement.className = 'btn menu-section-content-recipes-item-btn'
    buttonElement.innerText = 'Try Now';

    // Add all elements to the card
    cardItem.appendChild(cardImageContainerElement);
    cardItem.appendChild(cardNameElement);
    cardItem.appendChild(buttonElement);

    recipesSlider.appendChild(cardItem);
  }

  resetRecipesSlider();
}

updateRecipesList();

updateRecipesSliderArrowsClass();

for (let i = 0; i < menuCategories.length; i++) {
  const category = menuCategories[i];

  if (i === 0) {
    category.classList.add('active')
  }

  category.addEventListener('click', () => updateRecipesList(category.id));
}

// Testimonials Slider
const testimonialSliderLeftArrow = document.querySelector('#testimonials-slider-left-arrow')
const testimonialSliderRightArrow = document.querySelector('#testimonials-slider-right-arrow')
const testimonialSliderText = document.querySelector('#testimonials-slider-text')
const testimonialSliderName = document.querySelector('#testimonials-slider-name')
const testimonialSliderPosition = document.querySelector('#testimonials-slider-position')

let numberOfTestimonials = TESTIMONIALS.length;
let activeTestimonial = 0;

// Update the disabled arrow button after moving the slider
const testimonialSliderArrowsClass = () => {
  if (activeTestimonial === 0) {
    testimonialSliderLeftArrow.disabled = true;
  } else if (activeTestimonial === numberOfTestimonials - 1) {
    testimonialSliderRightArrow.disabled = true
  } else {
    testimonialSliderLeftArrow.disabled = false
    testimonialSliderRightArrow.disabled = false
  }
}

const updateCurrentTestimonial = () => {
  const newTestimonial = TESTIMONIALS[activeTestimonial];
  testimonialSliderText.innerText = newTestimonial.text;
  testimonialSliderName.innerText = newTestimonial.name;
  testimonialSliderPosition.innerText = newTestimonial.position;

  testimonialSliderArrowsClass();
}

updateCurrentTestimonial();

// Fetch the next testimonial
testimonialSliderRightArrow.addEventListener('click', () => {
  activeTestimonial++;

  updateCurrentTestimonial();
})

// Move the slider to the left
testimonialSliderLeftArrow.addEventListener('click', () => {
  activeTestimonial--;

  updateCurrentTestimonial();
})