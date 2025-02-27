

var tl = gsap.timeline();

tl.from(".nav h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2
});

tl.from(".nav h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2
});

var darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
})

document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).
            scrollIntoView({
                behaviour: "smooth"
            })
    })
})

//home//
gsap.from(".home h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
})
gsap.from(".home h1", {
    opacity: 0,
    duration: 0.5,
    delay: 1
})
gsap.from(".home button", {
    opacity: 0,
    duration: 0.5,
    delay: 1
})

//projects

// gsap.to(".projects h1",{
//     x:1200,
//     duration:0.5,
//     delay:1
// })
gsap.from(".propjects h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
})

// //form

// let myForm = document.querySelector("#myForm")
// let formOutPut = document.querySelector("#formOutPut")

// myForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     formOutPut.innerHTML = `${name},
//                             ${email},
//                             ${message}`
// })


const myForm = document.querySelector("#myForm");
const formOutPut = document.querySelector("#formOutPut");

myForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    formOutPut.innerHTML = `${name}, ${email}, ${message}`
})