NodeList.prototype.forEach = Array.prototype.forEach;

function add_toggles() {
    let toggles = document.querySelectorAll(".code-toggle");
    toggles.forEach(toggle => {
        // Gather all buttons and the referencing code block
        let blocks = [];
        toggle.querySelectorAll(".buttons > button").forEach(button => {
            let lang = button.dataset.lang;
            let code = toggle.querySelector(".code." + lang);
            blocks.push([button,code]);
        });

        // Activate the first code block by default
        if (blocks.length > 0) {
            blocks[0].forEach(x => x.classList.add("active"));
        }

        // function to deactive all code blocks
        let deactivateAll = function() {
            blocks.forEach(block => {
            block.forEach(x => x.classList.remove("active"));
            });
        };

        // Add EventListener to every button to activate code-block
        blocks.forEach(block => {
            block[0].addEventListener("click", function() {
            deactivateAll();
            block.forEach(x => x.classList.add("active"));
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    add_toggles();
});