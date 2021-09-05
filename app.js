const pokemonFetch = () => {

    const search = document.getElementById('src')
    const label = document.getElementById('label')

    label.addEventListener("click", () => { 
        let name = String(search.value)
        
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
   
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (dados) {
        
        let pokemon = dados.forms[0].name
        let sprite = dados.sprites.front_default
        const stats = dados.stats
     
        const img = document.getElementById('pokeimg')
        img.src = sprite

        const shiny = document.getElementById('shiny')

        let nameH1 = document.getElementById('name')
       
        nameH1.innerHTML = "Name: " +  pokemon

         
        let number = document.getElementById('number')
        number.innerHTML = "Number: " + dados.id+ " N°"

        let type = document.getElementById('type')
        type.innerHTML = "Types: " +  dados.types.map(item => ' ' + item.type.name).toString()

        let weight = document.getElementById("weight")
        weight.innerHTML = "Weight: " + dados.weight / 10 + " Kg"

        let height = document.getElementById('height')
        height.innerHTML = "Height: " + dados.height  / 10 + " M"

        let btn = document.getElementById('btn')

        let a = document.getElementById('pokedex')
        a.setAttribute("href", `https://www.pokemon.com/br/pokedex/${name}`);
      
        btn.style.visibility = 'visible'

        window.onload = function(){
            document.getElementById('pokedex').click();
        }
        shiny.addEventListener("change", ()=> {
            if(shiny.checked){
                 sprite =  dados.sprites.front_shiny
                img.src = sprite
            }else{
                sprite = dados.sprites.front_default
                img.src = sprite
            }
           
        })

        
       
    });

    
})

}

pokemonFetch()