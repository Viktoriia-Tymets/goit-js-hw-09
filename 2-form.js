import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},r="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",l);a.addEventListener("submit",m);function l(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))}function m(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),e.email="",e.message="",a.reset()}
//# sourceMappingURL=2-form.js.map
