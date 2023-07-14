// BigInt
//optional chaining operator ?.

let will_pokemon = {
    pikachu:{
        species: 'mouse pokemon',
        type: 'electric',
        weight: 0.8,
        height: 30,
    }
}

let nik_pokemon = {
    charizard: {
        species: 0,
        type: 'fire',
        weight: 40,
        height: 300,
    },
    raichu:{
        species: 'mouse pokemon',
        type: 'electric',
        weight: 1.3,
        height: 60,
    }
}

if(nik_pokemon.pikachu && nik_pokemon.pikachu.weight){
    console.log(nik_pokemon.pikachu.weight);
}

// we can replace above if condition from the condition given below using optional chaining operator (?.)
const weight3 = nik_pokemon?.charizard?.weight;
console.log(weight3);

//nullish coaleshing operator(??)
const speciess = nik_pokemon?.charizard?.species || 'no species';
console.log(speciess);
const speciese = nik_pokemon?.charizard?.species ?? 'no species';
console.log(speciese);

