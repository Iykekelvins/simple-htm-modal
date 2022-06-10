const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const modal_container = document.querySelector(".modal-container");
const modal_content = document.querySelector(".modal-content");

btn.addEventListener("click", ()=> {
    modal_container.classList.add("show-modal");

    setTimeout(() => {
        modal_content.classList.add("show-content")
    }, 300);
})

close.addEventListener("click", ()=>{
    modal_content.classList.remove("show-content");

    setTimeout(() => {
        modal_container.classList.remove("show-modal")
    }, 300);
})