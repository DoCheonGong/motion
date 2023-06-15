const frame = document.querySelector(".frame");
const articles = document.querySelectorAll("article");
const opens = document.querySelectorAll(".open");
const closes = document.querySelectorAll(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// prev/next를 클릭할 때
prev.addEventListener("click", () => {
    frame.prepend(frame.lastElementChild);
})

next.addEventListener("click", () => {
    frame.append(frame.firstElementChild);
})



// open/close를 클릭할 때
opens.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("on");
        // hide class (on이 없다면 hide 붙이기)
        for (let el of articles) !el.classList.contains("on") && el.classList.add("hide");
    })
})

closes.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.remove("on");
        for (let el of articles) el.classList.remove("hide");
    })
})