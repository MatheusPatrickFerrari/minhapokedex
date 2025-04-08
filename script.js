const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

const pokemons = [
  { name: 'Pikachu', skill: 'Static', evolution: 'Raichu' },
  { name: 'Caterpie', skill: 'Shield Dust', evolution: 'Metapod' },
  { name: 'Pidgeotto', skill: 'Keen Eye', evolution: 'Pidgeot' },
  { name: 'Bulbasaur', skill: 'Overgrow', evolution: 'Ivysaur' },
  { name: 'Charmander', skill: 'Blaze', evolution: 'Charmeleon' },
  { name: 'Squirtle', skill: 'Torrent', evolution: 'Wartortle' },
  { name: 'Krabby', skill: 'Hyper Cutter', evolution: 'Kingler' },
  { name: 'Raticate', skill: 'Run Away', evolution: 'Já Evoluído' },
  { name: 'Primeape', skill: 'Vital Spirit', evolution: 'Annihilape' },
  { name: 'Muk', skill: 'Stench', evolution: 'Já Evoluído' },
];

app.get('/pokemon/:name', (req, res) => {
  const poke = pokemons.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());
  if (poke) res.json(poke);
  else res.status(404).send('Pokémon não encontrado');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

function getPokemon(name) {
    fetch(`http://localhost:3000/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('skill').textContent = data.skill;
        document.getElementById('evolution').textContent = data.evolution;
      })
      .catch(err => alert("Erro ao buscar Pokémon"));
  }
  