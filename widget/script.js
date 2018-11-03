const formTemplate = `
<div class="content-wrapper">
<form class="form-container">
  <div class="header">
    <div class="header-title-container">
        <div class="header-title">
          <div class="hand-icon">
            <img src="./hand.svg" />
          </div>
          <h5>The Helping Hand</h5>
      </div>
    </div>
    <p>Tell us what happen, or report your concern.
      Anonymous and secure.
    </p>
  </div>
  <div class="form-content">
  <label>
  <span>Label</span>
  <select class="tag-selector">
    <option selected value="">Choose label</option>
    <option value="Physical violence">Physical violence</option>
    <option value="Verbal abuse">Verbal abuse</option>
  </select>
  </label>
  <div class="tags" style="display: none"></div>
  <label>
    <span>Incident description</span>
    <textarea name="" id="" cols="30" rows="10" placeholder="What happened?" class="message"></textarea>
  </label>
  <label>
    <span>Alias</span>
    <input type="text" placeholder="Enter a secret alias" class="alias"/>
  </label>
    <div class="submit-wrapper">
      <button type="submit" class="submit-button"><span>Send report</span><img src="./send_ic.svg" /></button>
    </div>
  </div>
</form>
  <div class="toggle-wrapper">
    <button class="hand-toggle" type="submit"><img src="./hand.svg" /></button>
  </div>
</div>
`;
// state ------------------------------
const selectedTags = [];
let formIsOpen = false;
let isFormAnimating = false;

// setup elements ------------------------------
const containerEl = document.getElementById("helping-hand");
containerEl.innerHTML = formTemplate;

const handButtonEl = containerEl.querySelector('.hand-toggle');
const tagSelectorEl = containerEl.querySelector('.tag-selector');
const tagListEl = containerEl.querySelector('.tags');
const messageInputEl = containerEl.querySelector('.message');
const aliasInputEl = containerEl.querySelector('.alias');
const formEl = containerEl.querySelector('.form-container');


// helpers ------------------------------
const renderTags = tags => {
  return `<ul>${tags.map(t => `<li>${t}</li>`).join("")}</ul>`;
};

const toggleFormVisibility = (show) => {
  console.log(isFormAnimating);
  if(isFormAnimating)
    return;

  if (show){
    formEl.style.display = 'flex'
    formEl.classList.toggle('hidden', false);
    formEl.classList.toggle('visible', true);
    isFormAnimating = true;
    setTimeout(() => {
      isFormAnimating = false;
    }, 1000)
  } else {
    formEl.classList.toggle('hidden', true);
    formEl.classList.toggle('visible', false);
    isFormAnimating = true;
    setTimeout(() => {
      formEl.style.display = 'none'
      isFormAnimating = false;
    }, 1000)
  }
  /*const prop = show ? 'flex' : 'none';
  formEl.style.display = prop;*/
};

// listeners ------------------------------
tagSelectorEl.addEventListener("change", event => {
  const value = event.currentTarget.value;
  if (value.length > 0 && !selectedTags.includes(value)) {
    selectedTags.push(value);
    tagListEl.innerHTML = renderTags(selectedTags);
  }
});

formEl.addEventListener("submit", event => {
  event.preventDefault();
  const message = messageInputEl.value;
  const alias = aliasInputEl.value;

  const formData = {
    message,
    alias,
    tags: selectedTags
  };

  var url = "http://localhost:3000/insert";

  fetch(url, {
    method: "POST", 
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData), // data can be `string` or {object}!
    dataType: "json",
  })
    .then(response => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.error("Error:", error));

  toggleFormVisibility(false);
});

handButtonEl.addEventListener('click', event => {
  if (isFormAnimating){ return; }
  formIsOpen = !formIsOpen;
  toggleFormVisibility(formIsOpen);
});
