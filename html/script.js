const pokemonFetch = () => {

    const url = (id) => {
        return `https://pokeapi.co/api/v2/pokemon/${id}`
    }

    const pokemonArray = []

    for(let c = 1; c < 152; c++){

        pokemonArray.push(fetch(url(c)).then(response => response.json()))
    }

    
    Promise.all(pokemonArray)
    .then(pokemons => {
        console.log(pokemons)

        const lisPokemons = pokemons.reduce((acumlator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            acumlator += `
            <li class= "card ${types[0]}">
                <img class = "card_image" alt ="${pokemon.name}" src="${pokemon.sprites.front_default}" width="150" heigth="150"/>
                <h2 class = "card_tittle">${pokemon.id}. ${pokemon.name} </h2>
                <p class = "card_text">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
            </li>
            `
            return acumlator
           
        }, '' )
     
        
       

       
        const ul = document.querySelector('[data-js="pokedex"]')
        console.log(ul)

        ul.innerHTML = lisPokemons
    } )

}



pokemonFetch()