const formLink=document.querySelector(".button-contacts"),formPopup=document.querySelector(".modal-window"),formClose=formPopup.querySelector(".modal-window-close"),formName=formPopup.querySelector(".name-user"),formForm=formPopup.querySelector(".modal-window-form"),formEmail=formPopup.querySelector(".email-user"); try{storage=localStorage.getItem("form")}catch(e){isStorageSupport=!1}formLink.addEventListener("click",function(e){e.preventDefault(),formPopup.classList.add("modal-window-show"),storage?(formName.value=storage,formEmail.focus()):formName.focus()}),formClose.addEventListener("click",function(e){e.preventDefault(),formPopup.classList.remove("modal-window-show"),formPopup.classList.remove("modal-window-error")}),formForm.addEventListener("submit",function(e){formName.value&&formEmail.value?localStorage.setItem("form",formName.value):(e.preventDefault(),formPopup.classList.add("modal-window-error"),formPopup.offsetWidth=formPopup.offsetWidth,formPopup.classList.add("modal-window-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&formPopup.classList.contains("modal-window-show")&&(e.preventDefault(),formPopup.classList.remove("modal-window-show"),formPopup.classList.remove("modalwindow-error"))});

const formLink = document.querySelector('.button-contacts'); 
const formPopup = document.querySelector('.modal');
const formClose = formPopup.querySelector('.modal-close');
const formName = formPopup.querySelector('.name-user');
const formForm = formPopup.querySelector('.modal-form');
const formEmail = formPopup.querySelector('.email-user');
