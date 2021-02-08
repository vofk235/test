let c = document.getElementById("engage_closer");
let n = document.getElementById("engage_overlay");
let f_l = document.querySelectorAll(".footer_links a");
let fr = document.querySelector("iframe.engage_iframe");

c.addEventListener("click", () => {
    n.classList.add("none");
});
n.addEventListener("click", () => {
    n.classList.add("none");
});

f_l.forEach(el => {
    el.addEventListener("click", (e) => {
        fr.setAttribute("src", `assets/${el.dataset.name}.html`);
        n.classList.remove("none");
        e.preventDefault();
    });
});

let i = document.querySelectorAll("input");

i.forEach(e => {
    e.addEventListener("blur", () => {
        if (!e.value) {
            e.classList.add("mooli_error");
            document.querySelector(`#label_${e.getAttribute("name")}`).innerHTML = e.getAttribute("placeholder");
            document.querySelector(`.status_${e.getAttribute("name")}`).classList.add("mooli_error");
        } else {
            const regex = new RegExp(e.getAttribute("pattern"));
            if (regex.test(e.value)) {
                e.classList.remove("mooli_error");
                document.querySelector(`#label_${e.getAttribute("name")}`).innerHTML = "";
                document.querySelector(`.status_${e.getAttribute("name")}`).classList.remove("mooli_error");
            } else {
                e.classList.add("mooli_error");
                document.querySelector(`.status_${e.getAttribute("name")}`).classList.add("mooli_error");
            }
        }
    });
});