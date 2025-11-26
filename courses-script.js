window.onload = function() {
    let accNames = document.getElementsByClassName("accordion-name");
    for (let i = 0; i < accNames.length; i++) {
        
        accNames[i].onclick = function() {
            this.classList.toggle("active-accordion");
            let description = this.nextElementSibling;
            if (description.style.maxHeight) {
                description.style.maxHeight = null; 
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
            } 
        };
    }
}