function getPokemon() {
    let search = document.getElementById('search');
    let pokemon = search.value.toLowerCase(); // Esto les convierte en minuscula cualquier palabra para evitar errores gramaticales

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // Aca deberán agregar en una variable los nuevos campos que desean buscar 

            let name = data.name;
            let type = "Tipo: " + data.types[0].type.name;
            let hp = "HP: " + data.stats.find(s => s.stat.name === 'hp').base_stat;
            let height = "Altura: " + data.height / 10 + " m";
            let weight = "Peso: " + data.weight / 10 + " kg";
            let attack = "Ataque: " + data.stats.find(s => s.stat.name === 'attack').base_stat;
            let specialAttack = "Ataque Especial: " + data.stats.find(s => s.stat.name === 'special-attack').base_stat;
            let defense = "Defensa: " + data.stats.find(s => s.stat.name === 'defense').base_stat;
            let specialDefense = "Defensa Especial: " + data.stats.find(s => s.stat.name === 'special-defense').base_stat;
            let speed = "Velocidad: " + data.stats.find(s => s.stat.name === 'speed').base_stat;
            let abilities = "Habilidades: " + data.abilities.map(a => a.ability.name).join(', ');

            let sprite = data.sprites.front_default;
            
            // Aca deberán reconocer los elementos de su HTML, en caso de no existir, crear unos nuevos con su respectivo ID.

            // Recuerden que si desean obtener una info de tipo string (texto) pueden usar cualquier elemento HTML como <h1>, <p>, <a>, etc...

            document.getElementById('name').textContent = name;
            document.getElementById('type').textContent = type;
            document.getElementById('type').textContent = type;
            document.getElementById('hp').textContent = hp;
            document.getElementById('attack').textContent = attack;
            document.getElementById('defense').textContent = defense;
            document.getElementById('special-attack').textContent = specialAttack;
            document.getElementById('special-defense').textContent = specialDefense;
            document.getElementById('speed').textContent = speed + "m/s";
            document.getElementById('height').textContent = height;
            document.getElementById('weight').textContent = weight;
            document.getElementById('abilities').textContent = abilities;
            // En cambio si desean almacenar imagenes, una forma prácticar es hacer uso del parametro SRC para guardar alli la URL de la imagen y que se muestre en el elemento <img>

            document.getElementById('sprite').src = sprite;
          
        })

            // Aca pueden cambiar el mensaje del error o mostrarle a traves de un elemento HTML (opcional)

        .catch(() => {
            alert('Este pokemon no existe :(')
        });
}
