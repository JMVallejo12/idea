const over = document.getElementById("over")
const over2 = document.getElementById("over-2")
const empty = document.getElementById("empty")

over.addEventListener("mouseover", ()=>{

    empty.innerHTML = `Comenzar`

})

over.addEventListener ("mouseout", ()=>{
    empty.innerHTML = ``
})



over2.addEventListener("mouseover", ()=>{

    empty.innerHTML = `Crea tu personaje`
})

over2.addEventListener("mouseout", ()=>{
    empty.innerHTML = ``
})

