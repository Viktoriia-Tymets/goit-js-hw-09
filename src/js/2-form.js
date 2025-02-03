const formDataFromLS = 'feedback-form-state';
const feedbackFormEl = document.querySelector('.feedback-form');


const formData = {
    email: '',
    message: '',
};


feedbackFormEl.addEventListener('input', handleInput);
feedbackFormEl.addEventListener('submit', handleSubmit);

function handleInput(event) {
    console.log('Input changed:', event.target.name, event.target.value);

    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(formDataFromLS, JSON.stringify(formData));

    console.log('Saved to localStorage:', localStorage.getItem(formDataFromLS));
};

function completeForm() {
    const savedData = localStorage.getItem(formDataFromLS);
    if (!savedData) return;

       try { 

        const parsedData = JSON.parse(savedData);
        
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        if (feedbackFormEl.elements.email) {
feedbackFormEl.elements.email.value = formData.email;
        }
        if (feedbackFormEl.elements.message) {
            feedbackFormEl.elements.message.value = formData.message;
        }
    } catch (error) {
       console.error(error)
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
feedbackFormEl.reset();
};

completeForm();




