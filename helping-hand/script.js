const formTemplate = `
<div class="backdrop"></div>
<div class="content-wrapper">
  <form class="form-container">
    <div class="header">
      <div class="header-title-container">
        <div class="header-title">
          <div class="hand-icon">
            <img src="../helping-hand/hand.svg" />
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
          <option value="Sexual harassment">Sexual harassment</option>
          <option value="Cyber bullying">Cyberbullying</option>
          <option value="Retaliation">Retaliation</option>
          <option value="Threats">Threats</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div class="tags" style="display: none"></div>
      <label>
        <span>Incident description</span>
        <textarea name="" id="" cols="30" rows="10" placeholder="What happened?" class="message"></textarea>
      </label>
      <label>
        <span>Alias</span>
        <input type="password" placeholder="Enter a secret alias" class="alias" />
      </label>
      <div class="submit-wrapper">
        <button type="submit" class="submit-button"><span>Send report</span><img src="../helping-hand/send_ic.svg" /></button>
      </div>
    </div>
    <div class="feedback-message--success">
      <img src="../helping-hand/ic_check_circle.svg" /><span>Your report has been recorded!</span>
    </div>
  </form>
  <div class="toggle-wrapper">
    <button class="hand-toggle" type="submit"><img src="../helping-hand/hand.svg" /></button>
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
const messageInputEl = containerEl.querySelector('.message');
const aliasInputEl = containerEl.querySelector('.alias');
const formEl = containerEl.querySelector('.form-container');
const successMessage = containerEl.querySelector('.feedback-message--success');
const backdropEl = containerEl.querySelector('.backdrop');


// helpers ------------------------------
const toggleSuccessMessage = (show) => {
  successMessage.classList.toggle('visible', show);
}

const toggleFormVisibility = (show) => {
  if(isFormAnimating)
    return;

  if (show){
    formEl.style.display = 'flex'
    formEl.classList.toggle('hidden', false);
    formEl.classList.toggle('visible', true);
    backdropEl.classList.toggle('visible', true);
    isFormAnimating = true;
    setTimeout(() => {
      isFormAnimating = false;
    }, 1000)
  } else {
    formEl.classList.toggle('hidden', true);
    formEl.classList.toggle('visible', false);
    backdropEl.classList.toggle('visible', false);
    isFormAnimating = true;
    setTimeout(() => {
      formEl.style.display = 'none'
      isFormAnimating = false;
    }, 500)
  }
};

formEl.addEventListener("submit", event => {
  event.preventDefault();
  const message = messageInputEl.value;
  const alias = aliasInputEl.value;
  const tag = tagSelectorEl.value;

  const formData = {
    message,
    alias,
    tag
  };
//console.log(decryptMsg(encryptMsg(JSON.stringify(formData))));
  var url = "http://localhost:3000/insert";

  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      content: encryptMsg(JSON.stringify(formData)) 
    }), // data can be `string` or {object}!
    dataType: "json",
  })
    .then(response => {

      tagSelectorEl.value = ''
      messageInputEl.value = ''
      aliasInputEl.value = ''

      console.log("Success:", JSON.stringify(response))
      toggleSuccessMessage(true);
      setTimeout(() => {
        formIsOpen = false;
        toggleFormVisibility(false);
        toggleSuccessMessage(false);
      }, 1500);
    })
    .catch(error => {
      console.error("Error:", error)
    });
});

handButtonEl.addEventListener('click', event => {
  if (isFormAnimating){ return; }
  formIsOpen = !formIsOpen;
  toggleFormVisibility(formIsOpen);
});

backdropEl.addEventListener('click', event => {
  if (isFormAnimating){ return; }
  if (formIsOpen) {
    formIsOpen = false;
    toggleFormVisibility(formIsOpen);
  }
})
