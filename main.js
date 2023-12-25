const over = document.getElementById("over")
const over2 = document.getElementById("over-2")
const empty = document.getElementById("empty")

over.addEventListener("mouseover", ()=>{

    empty.innerHTML = `COMENZAR`

})

over.addEventListener ("mouseout", ()=>{
    empty.innerHTML = ``
})



over2.addEventListener("mouseover", ()=>{

    empty.innerHTML = `CREA TU PERSONAJE`
})

over2.addEventListener("mouseout", ()=>{
    empty.innerHTML = ``
})

