const formData = {
    email: '',
    message: '',
};

const formDataFromLS = 'feedback-form-state';

const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener('input', handleInput);
feedbackFormEl.addEventListener('submit', handleSubmit);

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(formDataFromLS, JSON.stringify(formData));
};

function completeForm() {
    const savedData = localStorage.getItem(formDataFromLS);

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        feedbackFormEl.elements.email.value = formData.email;
        feedbackFormEl.elements.message.value = formData.message;
    }
};

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
console.log(formData);

formData.email = "";
formData.message = "";
localStorage.removeItem(formDataFromLS);
feedbackFormEl.reset();

};










