const gridContainer = document.querySelector(".grid-container")
const watcher = document.querySelector(".intersection-watcher")

const fetchData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=8")
    const data = await result.json()
    // console.log(data)
    return data
}


const addContent = async () => {

    const data = await fetchData()
    data.forEach(post => {
        
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}
        `
        gridContainer.appendChild(card)
    })

}


const handleIntersect = entries => {
    console.log(entries);
    if (entries[0].isIntersecting) {
        addContent()
    }
}

const options = {
    // root: null
    // treshold de 0 à 1 pour decider à quel hauteur on doit déclencher l'obseveur 
    // threshold: 1

    // rootMargin: "-20px 0px"
}

new IntersectionObserver(handleIntersect, options).observe(watcher)