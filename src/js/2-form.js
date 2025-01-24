const formData = {
    email: '',
    message: '',
}
const feedbackFormEl = document.querySelector('.feedback-form');

const formDataFromLS = 'feedback-form-state';
feedbackFormEl.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(feedbackFormEl, JSON.stringify(formData));
});

window.addEventListener('load', () => {
    const savedData = localStorage.getItem(feedbackFormEl);
    if (savedData) {
        const parsedData = JSON.parse(savedData);

        Object.keys(parsedData).forEach((key) => {
            form.elements[key].value = parsedData[key];
            formData[key] = parsedData[key];
        });
    }
});

feedbackFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
console.log(formData);

localStorage.removeItem(feedbackFormEl);
formData.email = "";
formData.message = "";
feedbackFormEl.reset();
})













