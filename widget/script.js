const formTemplate = `
<form class="form-container">
  <select class="tag-selector">
    <option selected value="">Välj</option>
    <option value="Physical violence">Physical violence</option>
    <option value="Verbal abuse">Verbal abuse</option>
  </select>
  <div class="tags">

  </div>
  <textarea name="" id="" cols="30" rows="10" placeholder="What happened?" class="message"></textarea>
  <input type="text" placholder="alias" class="alias"/>
  <button type="submit">Send report</button>
</form>

`
// state ------------------------------
const selectedTags = [];

// setup elements ------------------------------
const containerEl = document.getElementById('helping-hand');
containerEl.innerHTML = formTemplate;

const tagSelectorEl = containerEl.querySelector('.tag-selector');
const tagListEl = containerEl.querySelector('.tags');
const messageInputEl = containerEl.querySelector('.message');
const aliasInputEl = containerEl.querySelector('.alias');
const formEl = containerEl.querySelector('.form-container');

// helpers ------------------------------
const renderTags = (tags) => {
  return `<ul>${tags.map(t => `<li>${t}</li>`).join('')}</ul>`
}

// listeners ------------------------------
tagSelectorEl.addEventListener('change', (e) => {
  const value = e.currentTarget.value;
  if (value.length > 0 && !selectedTags.includes(value)){
    selectedTags.push(value);
    tagListEl.innerHTML = renderTags(selectedTags);
  }
});

formEl.addEventListener('submit', (event) => {
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