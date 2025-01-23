const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
    email: '',
    message: '',
}

const fillFormFields = () => {
    try {
if (localStorage.length === 0) {
    return;
}

const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
formData = formDataFromLS;

for (const key in formDataFromLS) {
  feedbackFormEl.elements[key].value = formDataFromLS[key];
}

    } catch (err){
        console.log(err);
    }


};

fillFormFields();


const onFormFieldChange = event => {
const { target: formFieldEl } = event;

const fieldValue = formFieldEl.value;
const fieldName = formFieldEl.name;

formData[fieldName] = fieldValue;

localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onFeedbackFormSubmit = event => {
event.preventDefault();

const {currentTarget: formEl} = event;

formEl.reset();
localStorage.removeItem('feedback-form-state');
}

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);