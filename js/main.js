

let ota = document.querySelector(".inner")

for (let i = 0; i < 20; i++) {
    let div = document.createElement("div")
    div.innerHTML = `
    <img src="${pokemons[i].img}" width="200" height="180" class="card-img-top" alt="america">
    <div class="card-body">
    <h5 class="card-title">${pokemons[i].name}</h5>
    <p class="card-text">   ${pokemons[i].type}</p>
    
    </div>
    <div class="father-button">
    <button type="button" class="btn buttons"><i data-uuid="close" class="icon far fa-thumbs-up fa-2x" ></i></button>
    </div>
    </div>
    `
    div.style.width = "18rem"
    div.classList.add("card")
    ota.appendChild(div)
}

let button = document.querySelectorAll(".buttons")
let titl = 0
let title = document.querySelector(".text")
setInterval(function add() {
    title.textContent = titl
}, 500)

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", (e) => {
        if(e.target.dataset.uuid == "close"){
            titl += 1
            button[i].style.transform = " rotate(-180deg)"
            e.target.dataset.uuid = "open"
        }
        else if(e.target.dataset.uuid == "open"){
            titl -= 1
            button[i].style.transform = " rotate(0deg)"
            console.log("okke")
            e.target.dataset.uuid = "close"
        }

    })
}
