const formTemplate = `
<div class="content-wrapper">
  <form class="form-container">
    <button type="button" class="close">X</button>
    <label>
    <span>Tags</span>
    <select class="tag-selector">
      <option selected value="">Choose tags</option>
      <option value="Physical violence">Physical violence</option>
      <option value="Verbal abuse">Verbal abuse</option>
    </select>
    </label>
    <div class="tags">

    </div>
    <label>
      <span>Incident description</span>
      <textarea name="" id="" cols="30" rows="10" placeholder="What happened?" class="message"></textarea>
    </label>
    <label>
      <span>Alias</span>
      <input type="text" placholder="alias" class="alias"/>
    </label>
    <button type="submit">Send report</button>
  </form>
  <div class="toggle-wrapper">
    <button class="hand-toggle" type="submit"><span>OPEN</span></button>
  </div>
</div>
`
// state ------------------------------
const selectedTags = [];

// setup elements ------------------------------
const containerEl = document.getElementById('helping-hand');
containerEl.innerHTML = formTemplate;

const handButtonEl = containerEl.querySelector('.hand-toggle');
const tagSelectorEl = containerEl.querySelector('.tag-selector');
const tagListEl = containerEl.querySelector('.tags');
const messageInputEl = containerEl.querySelector('.message');
const aliasInputEl = containerEl.querySelector('.alias');
const formEl = containerEl.querySelector('.form-container');
const closeButton = containerEl.querySelector('.close');


// helpers ------------------------------
const renderTags = (tags) => {
  return `<ul>${tags.map(t => `<li>${t}</li>`).join('')}</ul>`
}

const toggleFormVisibility = (show) => {
  const prop = show ? 'flex' : 'none';
  formEl.style.display = prop;
}

// listeners ------------------------------
tagSelectorEl.addEventListener('change', event => {
  const value = e.currentTarget.value;
  if (value.length > 0 && !selectedTags.includes(value)){
    selectedTags.push(value);
    tagListEl.innerHTML = renderTags(selectedTags);
  }
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const message = messageInputEl.value;
  const alias = aliasInputEl.value;

  const formData = {
    message,
    alias,
    tags: selectedTags
  }

  console.log(formData);
  // todo post to api!
})

closeButton.addEventListener('click', event => {
  toggleFormVisibility(false);
})

handButtonEl.addEventListener('click', event => {
  const visible = formEl.style.display !== 'none';
  toggleFormVisibility(!visible);
});