const characters = [
    {
        "name": "Bulbasaur",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 69,
        "height": 0.7,
        "pokedexNumber": 1,
        "generation": 1
    },
    {
        "name": "Ivysaur",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 130,
        "height": 1,
        "pokedexNumber": 2,
        "generation": 1
    },
    {
        "name": "Venusaur",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 1000,
        "height": 2,
        "pokedexNumber": 3,
        "generation": 1
    },
    {
        "name": "Charmander",
        "type1": "Fire",
        "type2": null,
        "weight": 85,
        "height": 0.6,
        "pokedexNumber": 4,
        "generation": 1
    },
    {
        "name": "Charmeleon",
        "type1": "Fire",
        "type2": null,
        "weight": 190,
        "height": 1.1,
        "pokedexNumber": 5,
        "generation": 1
    },
    {
        "name": "Charizard",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 905,
        "height": 1.7,
        "pokedexNumber": 6,
        "generation": 1
    },
    {
        "name": "Squirtle",
        "type1": "Water",
        "type2": null,
        "weight": 90,
        "height": 0.5,
        "pokedexNumber": 7,
        "generation": 1
    },
    {
        "name": "Wartortle",
        "type1": "Water",
        "type2": null,
        "weight": 225,
        "height": 1,
        "pokedexNumber": 8,
        "generation": 1
    },
    {
        "name": "Blastoise",
        "type1": "Water",
        "type2": null,
        "weight": 855,
        "height": 1.6,
        "pokedexNumber": 9,
        "generation": 1
    },
    {
        "name": "Caterpie",
        "type1": "Bug",
        "type2": null,
        "weight": 29,
        "height": 0.3,
        "pokedexNumber": 10,
        "generation": 1
    },
    {
        "name": "Metapod",
        "type1": "Bug",
        "type2": null,
        "weight": 99,
        "height": 0.7,
        "pokedexNumber": 11,
        "generation": 1
    },
    {
        "name": "Butterfree",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 320,
        "height": 1.1,
        "pokedexNumber": 12,
        "generation": 1
    },
    {
        "name": "Weedle",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 32,
        "height": 0.3,
        "pokedexNumber": 13,
        "generation": 1
    },
    {
        "name": "Kakuna",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 100,
        "height": 0.6,
        "pokedexNumber": 14,
        "generation": 1
    },
    {
        "name": "Beedrill",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 295,
        "height": 1,
        "pokedexNumber": 15,
        "generation": 1
    },
    {
        "name": "Pidgey",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 18,
        "height": 0.3,
        "pokedexNumber": 16,
        "generation": 1
    },
    {
        "name": "Pidgeotto",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 300,
        "height": 1.1,
        "pokedexNumber": 17,
        "generation": 1
    },
    {
        "name": "Pidgeot",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 395,
        "height": 1.5,
        "pokedexNumber": 18,
        "generation": 1
    },
    {
        "name": "Rattata",
        "type1": "Normal",
        "type2": null,
        "weight": 35,
        "height": 0.3,
        "pokedexNumber": 19,
        "generation": 1
    },
    {
        "name": "Raticate",
        "type1": "Normal",
        "type2": null,
        "weight": 185,
        "height": 0.7,
        "pokedexNumber": 20,
        "generation": 1
    },
    {
        "name": "Spearow",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 20,
        "height": 0.3,
        "pokedexNumber": 21,
        "generation": 1
    },
    {
        "name": "Fearow",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 380,
        "height": 1.2,
        "pokedexNumber": 22,
        "generation": 1
    },
    {
        "name": "Ekans",
        "type1": "Poison",
        "type2": null,
        "weight": 69,
        "height": 2,
        "pokedexNumber": 23,
        "generation": 1
    },
    {
        "name": "Arbok",
        "type1": "Poison",
        "type2": null,
        "weight": 650,
        "height": 3.5,
        "pokedexNumber": 24,
        "generation": 1
    },
    {
        "name": "Pikachu",
        "type1": "Electric",
        "type2": null,
        "weight": 60,
        "height": 0.4,
        "pokedexNumber": 25,
        "generation": 1
    },
    {
        "name": "Raichu",
        "type1": "Electric",
        "type2": null,
        "weight": 300,
        "height": 0.8,
        "pokedexNumber": 26,
        "generation": 1
    },
    {
        "name": "Sandshrew",
        "type1": "Ground",
        "type2": null,
        "weight": 120,
        "height": 0.6,
        "pokedexNumber": 27,
        "generation": 1
    },
    {
        "name": "Sandslash",
        "type1": "Ground",
        "type2": null,
        "weight": 295,
        "height": 1,
        "pokedexNumber": 28,
        "generation": 1
    },
    {
        "name": "Nidoran-f",
        "type1": "Poison",
        "type2": null,
        "weight": 70,
        "height": 0.4,
        "pokedexNumber": 29,
        "generation": 1
    },
    {
        "name": "Nidorina",
        "type1": "Poison",
        "type2": null,
        "weight": 200,
        "height": 0.8,
        "pokedexNumber": 30,
        "generation": 1
    },
    {
        "name": "Nidoqueen",
        "type1": "Poison",
        "type2": "Ground",
        "weight": 600,
        "height": 1.3,
        "pokedexNumber": 31,
        "generation": 1
    },
    {
        "name": "Nidoran-m",
        "type1": "Poison",
        "type2": null,
        "weight": 90,
        "height": 0.5,
        "pokedexNumber": 32,
        "generation": 1
    },
    {
        "name": "Nidorino",
        "type1": "Poison",
        "type2": null,
        "weight": 195,
        "height": 0.9,
        "pokedexNumber": 33,
        "generation": 1
    },
    {
        "name": "Nidoking",
        "type1": "Poison",
        "type2": "Ground",
        "weight": 620,
        "height": 1.4,
        "pokedexNumber": 34,
        "generation": 1
    },
    {
        "name": "Clefairy",
        "type1": "Fairy",
        "type2": null,
        "weight": 75,
        "height": 0.6,
        "pokedexNumber": 35,
        "generation": 1
    },
    {
        "name": "Clefable",
        "type1": "Fairy",
        "type2": null,
        "weight": 400,
        "height": 1.3,
        "pokedexNumber": 36,
        "generation": 1
    },
    {
        "name": "Vulpix",
        "type1": "Fire",
        "type2": null,
        "weight": 99,
        "height": 0.6,
        "pokedexNumber": 37,
        "generation": 1
    },
    {
        "name": "Ninetales",
        "type1": "Fire",
        "type2": null,
        "weight": 199,
        "height": 1.1,
        "pokedexNumber": 38,
        "generation": 1
    },
    {
        "name": "Jigglypuff",
        "type1": "Normal",
        "type2": "Fairy",
        "weight": 55,
        "height": 0.5,
        "pokedexNumber": 39,
        "generation": 1
    },
    {
        "name": "Wigglytuff",
        "type1": "Normal",
        "type2": "Fairy",
        "weight": 120,
        "height": 1,
        "pokedexNumber": 40,
        "generation": 1
    },
    {
        "name": "Zubat",
        "type1": "Poison",
        "type2": "Flying",
        "weight": 75,
        "height": 0.8,
        "pokedexNumber": 41,
        "generation": 1
    },
    {
        "name": "Golbat",
        "type1": "Poison",
        "type2": "Flying",
        "weight": 550,
        "height": 1.6,
        "pokedexNumber": 42,
        "generation": 1
    },
    {
        "name": "Oddish",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 54,
        "height": 0.5,
        "pokedexNumber": 43,
        "generation": 1
    },
    {
        "name": "Gloom",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 86,
        "height": 0.8,
        "pokedexNumber": 44,
        "generation": 1
    },
    {
        "name": "Vileplume",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 186,
        "height": 1.2,
        "pokedexNumber": 45,
        "generation": 1
    },
    {
        "name": "Paras",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 54,
        "height": 0.3,
        "pokedexNumber": 46,
        "generation": 1
    },
    {
        "name": "Parasect",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 295,
        "height": 1,
        "pokedexNumber": 47,
        "generation": 1
    },
    {
        "name": "Venonat",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 300,
        "height": 1,
        "pokedexNumber": 48,
        "generation": 1
    },
    {
        "name": "Venomoth",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 125,
        "height": 1.5,
        "pokedexNumber": 49,
        "generation": 1
    },
    {
        "name": "Diglett",
        "type1": "Ground",
        "type2": null,
        "weight": 8,
        "height": 0.2,
        "pokedexNumber": 50,
        "generation": 1
    },
    {
        "name": "Dugtrio",
        "type1": "Ground",
        "type2": null,
        "weight": 333,
        "height": 0.7,
        "pokedexNumber": 51,
        "generation": 1
    },
    {
        "name": "Meowth",
        "type1": "Normal",
        "type2": null,
        "weight": 42,
        "height": 0.4,
        "pokedexNumber": 52,
        "generation": 1
    },
    {
        "name": "Persian",
        "type1": "Normal",
        "type2": null,
        "weight": 320,
        "height": 1,
        "pokedexNumber": 53,
        "generation": 1
    },
    {
        "name": "Psyduck",
        "type1": "Water",
        "type2": null,
        "weight": 196,
        "height": 0.8,
        "pokedexNumber": 54,
        "generation": 1
    },
    {
        "name": "Golduck",
        "type1": "Water",
        "type2": null,
        "weight": 766,
        "height": 1.7,
        "pokedexNumber": 55,
        "generation": 1
    },
    {
        "name": "Mankey",
        "type1": "Fighting",
        "type2": null,
        "weight": 280,
        "height": 0.5,
        "pokedexNumber": 56,
        "generation": 1
    },
    {
        "name": "Primeape",
        "type1": "Fighting",
        "type2": null,
        "weight": 320,
        "height": 1,
        "pokedexNumber": 57,
        "generation": 1
    },
    {
        "name": "Growlithe",
        "type1": "Fire",
        "type2": null,
        "weight": 190,
        "height": 0.7,
        "pokedexNumber": 58,
        "generation": 1
    },
    {
        "name": "Arcanine",
        "type1": "Fire",
        "type2": null,
        "weight": 1550,
        "height": 1.9,
        "pokedexNumber": 59,
        "generation": 1
    },
    {
        "name": "Poliwag",
        "type1": "Water",
        "type2": null,
        "weight": 124,
        "height": 0.6,
        "pokedexNumber": 60,
        "generation": 1
    },
    {
        "name": "Poliwhirl",
        "type1": "Water",
        "type2": null,
        "weight": 200,
        "height": 1,
        "pokedexNumber": 61,
        "generation": 1
    },
    {
        "name": "Poliwrath",
        "type1": "Water",
        "type2": "Fighting",
        "weight": 540,
        "height": 1.3,
        "pokedexNumber": 62,
        "generation": 1
    },
    {
        "name": "Abra",
        "type1": "Psychic",
        "type2": null,
        "weight": 195,
        "height": 0.9,
        "pokedexNumber": 63,
        "generation": 1
    },
    {
        "name": "Kadabra",
        "type1": "Psychic",
        "type2": null,
        "weight": 565,
        "height": 1.3,
        "pokedexNumber": 64,
        "generation": 1
    },
    {
        "name": "Alakazam",
        "type1": "Psychic",
        "type2": null,
        "weight": 480,
        "height": 1.5,
        "pokedexNumber": 65,
        "generation": 1
    },
    {
        "name": "Machop",
        "type1": "Fighting",
        "type2": null,
        "weight": 195,
        "height": 0.8,
        "pokedexNumber": 66,
        "generation": 1
    },
    {
        "name": "Machoke",
        "type1": "Fighting",
        "type2": null,
        "weight": 705,
        "height": 1.5,
        "pokedexNumber": 67,
        "generation": 1
    },
    {
        "name": "Machamp",
        "type1": "Fighting",
        "type2": null,
        "weight": 1300,
        "height": 1.6,
        "pokedexNumber": 68,
        "generation": 1
    },
    {
        "name": "Bellsprout",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 40,
        "height": 0.7,
        "pokedexNumber": 69,
        "generation": 1
    },
    {
        "name": "Weepinbell",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 64,
        "height": 1,
        "pokedexNumber": 70,
        "generation": 1
    },
    {
        "name": "Victreebel",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 155,
        "height": 1.7,
        "pokedexNumber": 71,
        "generation": 1
    },
    {
        "name": "Tentacool",
        "type1": "Water",
        "type2": "Poison",
        "weight": 455,
        "height": 0.9,
        "pokedexNumber": 72,
        "generation": 1
    },
    {
        "name": "Tentacruel",
        "type1": "Water",
        "type2": "Poison",
        "weight": 550,
        "height": 1.6,
        "pokedexNumber": 73,
        "generation": 1
    },
    {
        "name": "Geodude",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 200,
        "height": 0.4,
        "pokedexNumber": 74,
        "generation": 1
    },
    {
        "name": "Graveler",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 1050,
        "height": 1,
        "pokedexNumber": 75,
        "generation": 1
    },
    {
        "name": "Golem",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 3000,
        "height": 1.4,
        "pokedexNumber": 76,
        "generation": 1
    },
    {
        "name": "Ponyta",
        "type1": "Fire",
        "type2": null,
        "weight": 300,
        "height": 1,
        "pokedexNumber": 77,
        "generation": 1
    },
    {
        "name": "Rapidash",
        "type1": "Fire",
        "type2": null,
        "weight": 950,
        "height": 1.7,
        "pokedexNumber": 78,
        "generation": 1
    },
    {
        "name": "Slowpoke",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 360,
        "height": 1.2,
        "pokedexNumber": 79,
        "generation": 1
    },
    {
        "name": "Slowbro",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 785,
        "height": 1.6,
        "pokedexNumber": 80,
        "generation": 1
    },
    {
        "name": "Magnemite",
        "type1": "Electric",
        "type2": "Steel",
        "weight": 60,
        "height": 0.3,
        "pokedexNumber": 81,
        "generation": 1
    },
    {
        "name": "Magneton",
        "type1": "Electric",
        "type2": "Steel",
        "weight": 600,
        "height": 1,
        "pokedexNumber": 82,
        "generation": 1
    },
    {
        "name": "Farfetchd",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 150,
        "height": 0.8,
        "pokedexNumber": 83,
        "generation": 1
    },
    {
        "name": "Doduo",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 392,
        "height": 1.4,
        "pokedexNumber": 84,
        "generation": 1
    },
    {
        "name": "Dodrio",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 852,
        "height": 1.8,
        "pokedexNumber": 85,
        "generation": 1
    },
    {
        "name": "Seel",
        "type1": "Water",
        "type2": null,
        "weight": 900,
        "height": 1.1,
        "pokedexNumber": 86,
        "generation": 1
    },
    {
        "name": "Dewgong",
        "type1": "Water",
        "type2": "Ice",
        "weight": 1200,
        "height": 1.7,
        "pokedexNumber": 87,
        "generation": 1
    },
    {
        "name": "Grimer",
        "type1": "Poison",
        "type2": null,
        "weight": 300,
        "height": 0.9,
        "pokedexNumber": 88,
        "generation": 1
    },
    {
        "name": "Muk",
        "type1": "Poison",
        "type2": null,
        "weight": 300,
        "height": 1.2,
        "pokedexNumber": 89,
        "generation": 1
    },
    {
        "name": "Shellder",
        "type1": "Water",
        "type2": null,
        "weight": 40,
        "height": 0.3,
        "pokedexNumber": 90,
        "generation": 1
    },
    {
        "name": "Cloyster",
        "type1": "Water",
        "type2": "Ice",
        "weight": 1325,
        "height": 1.5,
        "pokedexNumber": 91,
        "generation": 1
    },
    {
        "name": "Gastly",
        "type1": "Ghost",
        "type2": "Poison",
        "weight": 1,
        "height": 1.3,
        "pokedexNumber": 92,
        "generation": 1
    },
    {
        "name": "Haunter",
        "type1": "Ghost",
        "type2": "Poison",
        "weight": 1,
        "height": 1.6,
        "pokedexNumber": 93,
        "generation": 1
    },
    {
        "name": "Gengar",
        "type1": "Ghost",
        "type2": "Poison",
        "weight": 405,
        "height": 1.5,
        "pokedexNumber": 94,
        "generation": 1
    },
    {
        "name": "Onix",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 2100,
        "height": 8.8,
        "pokedexNumber": 95,
        "generation": 1
    },
    {
        "name": "Drowzee",
        "type1": "Psychic",
        "type2": null,
        "weight": 324,
        "height": 1,
        "pokedexNumber": 96,
        "generation": 1
    },
    {
        "name": "Hypno",
        "type1": "Psychic",
        "type2": null,
        "weight": 756,
        "height": 1.6,
        "pokedexNumber": 97,
        "generation": 1
    },
    {
        "name": "Krabby",
        "type1": "Water",
        "type2": null,
        "weight": 65,
        "height": 0.4,
        "pokedexNumber": 98,
        "generation": 1
    },
    {
        "name": "Kingler",
        "type1": "Water",
        "type2": null,
        "weight": 600,
        "height": 1.3,
        "pokedexNumber": 99,
        "generation": 1
    },
    {
        "name": "Voltorb",
        "type1": "Electric",
        "type2": null,
        "weight": 104,
        "height": 0.5,
        "pokedexNumber": 100,
        "generation": 1
    },
    {
        "name": "Electrode",
        "type1": "Electric",
        "type2": null,
        "weight": 666,
        "height": 1.2,
        "pokedexNumber": 101,
        "generation": 1
    },
    {
        "name": "Exeggcute",
        "type1": "Grass",
        "type2": "Psychic",
        "weight": 25,
        "height": 0.4,
        "pokedexNumber": 102,
        "generation": 1
    },
    {
        "name": "Exeggutor",
        "type1": "Grass",
        "type2": "Psychic",
        "weight": 1200,
        "height": 2,
        "pokedexNumber": 103,
        "generation": 1
    },
    {
        "name": "Cubone",
        "type1": "Ground",
        "type2": null,
        "weight": 65,
        "height": 0.4,
        "pokedexNumber": 104,
        "generation": 1
    },
    {
        "name": "Marowak",
        "type1": "Ground",
        "type2": null,
        "weight": 450,
        "height": 1,
        "pokedexNumber": 105,
        "generation": 1
    },
    {
        "name": "Hitmonlee",
        "type1": "Fighting",
        "type2": null,
        "weight": 498,
        "height": 1.5,
        "pokedexNumber": 106,
        "generation": 1
    },
    {
        "name": "Hitmonchan",
        "type1": "Fighting",
        "type2": null,
        "weight": 502,
        "height": 1.4,
        "pokedexNumber": 107,
        "generation": 1
    },
    {
        "name": "Lickitung",
        "type1": "Normal",
        "type2": null,
        "weight": 655,
        "height": 1.2,
        "pokedexNumber": 108,
        "generation": 1
    },
    {
        "name": "Koffing",
        "type1": "Poison",
        "type2": null,
        "weight": 10,
        "height": 0.6,
        "pokedexNumber": 109,
        "generation": 1
    },
    {
        "name": "Weezing",
        "type1": "Poison",
        "type2": null,
        "weight": 95,
        "height": 1.2,
        "pokedexNumber": 110,
        "generation": 1
    },
    {
        "name": "Rhyhorn",
        "type1": "Ground",
        "type2": "Rock",
        "weight": 1150,
        "height": 1,
        "pokedexNumber": 111,
        "generation": 1
    },
    {
        "name": "Rhydon",
        "type1": "Ground",
        "type2": "Rock",
        "weight": 1200,
        "height": 1.9,
        "pokedexNumber": 112,
        "generation": 1
    },
    {
        "name": "Chansey",
        "type1": "Normal",
        "type2": null,
        "weight": 346,
        "height": 1.1,
        "pokedexNumber": 113,
        "generation": 1
    },
    {
        "name": "Tangela",
        "type1": "Grass",
        "type2": null,
        "weight": 350,
        "height": 1,
        "pokedexNumber": 114,
        "generation": 1
    },
    {
        "name": "Kangaskhan",
        "type1": "Normal",
        "type2": null,
        "weight": 800,
        "height": 2.2,
        "pokedexNumber": 115,
        "generation": 1
    },
    {
        "name": "Horsea",
        "type1": "Water",
        "type2": null,
        "weight": 80,
        "height": 0.4,
        "pokedexNumber": 116,
        "generation": 1
    },
    {
        "name": "Seadra",
        "type1": "Water",
        "type2": null,
        "weight": 250,
        "height": 1.2,
        "pokedexNumber": 117,
        "generation": 1
    },
    {
        "name": "Goldeen",
        "type1": "Water",
        "type2": null,
        "weight": 150,
        "height": 0.6,
        "pokedexNumber": 118,
        "generation": 1
    },
    {
        "name": "Seaking",
        "type1": "Water",
        "type2": null,
        "weight": 390,
        "height": 1.3,
        "pokedexNumber": 119,
        "generation": 1
    },
    {
        "name": "Staryu",
        "type1": "Water",
        "type2": null,
        "weight": 345,
        "height": 0.8,
        "pokedexNumber": 120,
        "generation": 1
    },
    {
        "name": "Starmie",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 800,
        "height": 1.1,
        "pokedexNumber": 121,
        "generation": 1
    },
    {
        "name": "Mr-mime",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 545,
        "height": 1.3,
        "pokedexNumber": 122,
        "generation": 1
    },
    {
        "name": "Scyther",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 560,
        "height": 1.5,
        "pokedexNumber": 123,
        "generation": 1
    },
    {
        "name": "Jynx",
        "type1": "Ice",
        "type2": "Psychic",
        "weight": 406,
        "height": 1.4,
        "pokedexNumber": 124,
        "generation": 1
    },
    {
        "name": "Electabuzz",
        "type1": "Electric",
        "type2": null,
        "weight": 300,
        "height": 1.1,
        "pokedexNumber": 125,
        "generation": 1
    },
    {
        "name": "Magmar",
        "type1": "Fire",
        "type2": null,
        "weight": 445,
        "height": 1.3,
        "pokedexNumber": 126,
        "generation": 1
    },
    {
        "name": "Pinsir",
        "type1": "Bug",
        "type2": null,
        "weight": 550,
        "height": 1.5,
        "pokedexNumber": 127,
        "generation": 1
    },
    {
        "name": "Tauros",
        "type1": "Normal",
        "type2": null,
        "weight": 884,
        "height": 1.4,
        "pokedexNumber": 128,
        "generation": 1
    },
    {
        "name": "Magikarp",
        "type1": "Water",
        "type2": null,
        "weight": 100,
        "height": 0.9,
        "pokedexNumber": 129,
        "generation": 1
    },
    {
        "name": "Gyarados",
        "type1": "Water",
        "type2": "Flying",
        "weight": 2350,
        "height": 6.5,
        "pokedexNumber": 130,
        "generation": 1
    },
    {
        "name": "Lapras",
        "type1": "Water",
        "type2": "Ice",
        "weight": 2200,
        "height": 2.5,
        "pokedexNumber": 131,
        "generation": 1
    },
    {
        "name": "Ditto",
        "type1": "Normal",
        "type2": null,
        "weight": 40,
        "height": 0.3,
        "pokedexNumber": 132,
        "generation": 1
    },
    {
        "name": "Eevee",
        "type1": "Normal",
        "type2": null,
        "weight": 65,
        "height": 0.3,
        "pokedexNumber": 133,
        "generation": 1
    },
    {
        "name": "Vaporeon",
        "type1": "Water",
        "type2": null,
        "weight": 290,
        "height": 1,
        "pokedexNumber": 134,
        "generation": 1
    },
    {
        "name": "Jolteon",
        "type1": "Electric",
        "type2": null,
        "weight": 245,
        "height": 0.8,
        "pokedexNumber": 135,
        "generation": 1
    },
    {
        "name": "Flareon",
        "type1": "Fire",
        "type2": null,
        "weight": 250,
        "height": 0.9,
        "pokedexNumber": 136,
        "generation": 1
    },
    {
        "name": "Porygon",
        "type1": "Normal",
        "type2": null,
        "weight": 365,
        "height": 0.8,
        "pokedexNumber": 137,
        "generation": 1
    },
    {
        "name": "Omanyte",
        "type1": "Rock",
        "type2": "Water",
        "weight": 75,
        "height": 0.4,
        "pokedexNumber": 138,
        "generation": 1
    },
    {
        "name": "Omastar",
        "type1": "Rock",
        "type2": "Water",
        "weight": 350,
        "height": 1,
        "pokedexNumber": 139,
        "generation": 1
    },
    {
        "name": "Kabuto",
        "type1": "Rock",
        "type2": "Water",
        "weight": 115,
        "height": 0.5,
        "pokedexNumber": 140,
        "generation": 1
    },
    {
        "name": "Kabutops",
        "type1": "Rock",
        "type2": "Water",
        "weight": 405,
        "height": 1.3,
        "pokedexNumber": 141,
        "generation": 1
    },
    {
        "name": "Aerodactyl",
        "type1": "Rock",
        "type2": "Flying",
        "weight": 590,
        "height": 1.8,
        "pokedexNumber": 142,
        "generation": 1
    },
    {
        "name": "Snorlax",
        "type1": "Normal",
        "type2": null,
        "weight": 4600,
        "height": 2.1,
        "pokedexNumber": 143,
        "generation": 1
    },
    {
        "name": "Articuno",
        "type1": "Ice",
        "type2": "Flying",
        "weight": 554,
        "height": 1.7,
        "pokedexNumber": 144,
        "generation": 1
    },
    {
        "name": "Zapdos",
        "type1": "Electric",
        "type2": "Flying",
        "weight": 526,
        "height": 1.6,
        "pokedexNumber": 145,
        "generation": 1
    },
    {
        "name": "Moltres",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 600,
        "height": 2,
        "pokedexNumber": 146,
        "generation": 1
    },
    {
        "name": "Dratini",
        "type1": "Dragon",
        "type2": null,
        "weight": 33,
        "height": 1.8,
        "pokedexNumber": 147,
        "generation": 1
    },
    {
        "name": "Dragonair",
        "type1": "Dragon",
        "type2": null,
        "weight": 165,
        "height": 4,
        "pokedexNumber": 148,
        "generation": 1
    },
    {
        "name": "Dragonite",
        "type1": "Dragon",
        "type2": "Flying",
        "weight": 2100,
        "height": 2.2,
        "pokedexNumber": 149,
        "generation": 1
    },
    {
        "name": "Mewtwo",
        "type1": "Psychic",
        "type2": null,
        "weight": 1220,
        "height": 2,
        "pokedexNumber": 150,
        "generation": 1
    },
    {
        "name": "Mew",
        "type1": "Psychic",
        "type2": null,
        "weight": 40,
        "height": 0.4,
        "pokedexNumber": 151,
        "generation": 1
    },
    {
        "name": "Chikorita",
        "type1": "Grass",
        "type2": null,
        "weight": 64,
        "height": 0.9,
        "pokedexNumber": 152,
        "generation": 2
    },
    {
        "name": "Bayleef",
        "type1": "Grass",
        "type2": null,
        "weight": 158,
        "height": 1.2,
        "pokedexNumber": 153,
        "generation": 2
    },
    {
        "name": "Meganium",
        "type1": "Grass",
        "type2": null,
        "weight": 1005,
        "height": 1.8,
        "pokedexNumber": 154,
        "generation": 2
    },
    {
        "name": "Cyndaquil",
        "type1": "Fire",
        "type2": null,
        "weight": 79,
        "height": 0.5,
        "pokedexNumber": 155,
        "generation": 2
    },
    {
        "name": "Quilava",
        "type1": "Fire",
        "type2": null,
        "weight": 190,
        "height": 0.9,
        "pokedexNumber": 156,
        "generation": 2
    },
    {
        "name": "Typhlosion",
        "type1": "Fire",
        "type2": null,
        "weight": 795,
        "height": 1.7,
        "pokedexNumber": 157,
        "generation": 2
    },
    {
        "name": "Totodile",
        "type1": "Water",
        "type2": null,
        "weight": 95,
        "height": 0.6,
        "pokedexNumber": 158,
        "generation": 2
    },
    {
        "name": "Croconaw",
        "type1": "Water",
        "type2": null,
        "weight": 250,
        "height": 1.1,
        "pokedexNumber": 159,
        "generation": 2
    },
    {
        "name": "Feraligatr",
        "type1": "Water",
        "type2": null,
        "weight": 888,
        "height": 2.3,
        "pokedexNumber": 160,
        "generation": 2
    },
    {
        "name": "Sentret",
        "type1": "Normal",
        "type2": null,
        "weight": 60,
        "height": 0.8,
        "pokedexNumber": 161,
        "generation": 2
    },
    {
        "name": "Furret",
        "type1": "Normal",
        "type2": null,
        "weight": 325,
        "height": 1.8,
        "pokedexNumber": 162,
        "generation": 2
    },
    {
        "name": "Hoothoot",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 212,
        "height": 0.7,
        "pokedexNumber": 163,
        "generation": 2
    },
    {
        "name": "Noctowl",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 408,
        "height": 1.6,
        "pokedexNumber": 164,
        "generation": 2
    },
    {
        "name": "Ledyba",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 108,
        "height": 1,
        "pokedexNumber": 165,
        "generation": 2
    },
    {
        "name": "Ledian",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 356,
        "height": 1.4,
        "pokedexNumber": 166,
        "generation": 2
    },
    {
        "name": "Spinarak",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 85,
        "height": 0.5,
        "pokedexNumber": 167,
        "generation": 2
    },
    {
        "name": "Ariados",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 335,
        "height": 1.1,
        "pokedexNumber": 168,
        "generation": 2
    },
    {
        "name": "Crobat",
        "type1": "Poison",
        "type2": "Flying",
        "weight": 750,
        "height": 1.8,
        "pokedexNumber": 169,
        "generation": 2
    },
    {
        "name": "Chinchou",
        "type1": "Water",
        "type2": "Electric",
        "weight": 120,
        "height": 0.5,
        "pokedexNumber": 170,
        "generation": 2
    },
    {
        "name": "Lanturn",
        "type1": "Water",
        "type2": "Electric",
        "weight": 225,
        "height": 1.2,
        "pokedexNumber": 171,
        "generation": 2
    },
    {
        "name": "Pichu",
        "type1": "Electric",
        "type2": null,
        "weight": 20,
        "height": 0.3,
        "pokedexNumber": 172,
        "generation": 2
    },
    {
        "name": "Cleffa",
        "type1": "Fairy",
        "type2": null,
        "weight": 30,
        "height": 0.3,
        "pokedexNumber": 173,
        "generation": 2
    },
    {
        "name": "Igglybuff",
        "type1": "Normal",
        "type2": "Fairy",
        "weight": 10,
        "height": 0.3,
        "pokedexNumber": 174,
        "generation": 2
    },
    {
        "name": "Togepi",
        "type1": "Fairy",
        "type2": null,
        "weight": 15,
        "height": 0.3,
        "pokedexNumber": 175,
        "generation": 2
    },
    {
        "name": "Togetic",
        "type1": "Fairy",
        "type2": "Flying",
        "weight": 32,
        "height": 0.6,
        "pokedexNumber": 176,
        "generation": 2
    },
    {
        "name": "Natu",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 20,
        "height": 0.2,
        "pokedexNumber": 177,
        "generation": 2
    },
    {
        "name": "Xatu",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 150,
        "height": 1.5,
        "pokedexNumber": 178,
        "generation": 2
    },
    {
        "name": "Mareep",
        "type1": "Electric",
        "type2": null,
        "weight": 78,
        "height": 0.6,
        "pokedexNumber": 179,
        "generation": 2
    },
    {
        "name": "Flaaffy",
        "type1": "Electric",
        "type2": null,
        "weight": 133,
        "height": 0.8,
        "pokedexNumber": 180,
        "generation": 2
    },
    {
        "name": "Ampharos",
        "type1": "Electric",
        "type2": null,
        "weight": 615,
        "height": 1.4,
        "pokedexNumber": 181,
        "generation": 2
    },
    {
        "name": "Bellossom",
        "type1": "Grass",
        "type2": null,
        "weight": 58,
        "height": 0.4,
        "pokedexNumber": 182,
        "generation": 2
    },
    {
        "name": "Marill",
        "type1": "Water",
        "type2": "Fairy",
        "weight": 85,
        "height": 0.4,
        "pokedexNumber": 183,
        "generation": 2
    },
    {
        "name": "Azumarill",
        "type1": "Water",
        "type2": "Fairy",
        "weight": 285,
        "height": 0.8,
        "pokedexNumber": 184,
        "generation": 2
    },
    {
        "name": "Sudowoodo",
        "type1": "Rock",
        "type2": null,
        "weight": 380,
        "height": 1.2,
        "pokedexNumber": 185,
        "generation": 2
    },
    {
        "name": "Politoed",
        "type1": "Water",
        "type2": null,
        "weight": 339,
        "height": 1.1,
        "pokedexNumber": 186,
        "generation": 2
    },
    {
        "name": "Hoppip",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 5,
        "height": 0.4,
        "pokedexNumber": 187,
        "generation": 2
    },
    {
        "name": "Skiploom",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 10,
        "height": 0.6,
        "pokedexNumber": 188,
        "generation": 2
    },
    {
        "name": "Jumpluff",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 30,
        "height": 0.8,
        "pokedexNumber": 189,
        "generation": 2
    },
    {
        "name": "Aipom",
        "type1": "Normal",
        "type2": null,
        "weight": 115,
        "height": 0.8,
        "pokedexNumber": 190,
        "generation": 2
    },
    {
        "name": "Sunkern",
        "type1": "Grass",
        "type2": null,
        "weight": 18,
        "height": 0.3,
        "pokedexNumber": 191,
        "generation": 2
    },
    {
        "name": "Sunflora",
        "type1": "Grass",
        "type2": null,
        "weight": 85,
        "height": 0.8,
        "pokedexNumber": 192,
        "generation": 2
    },
    {
        "name": "Yanma",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 380,
        "height": 1.2,
        "pokedexNumber": 193,
        "generation": 2
    },
    {
        "name": "Wooper",
        "type1": "Water",
        "type2": "Ground",
        "weight": 85,
        "height": 0.4,
        "pokedexNumber": 194,
        "generation": 2
    },
    {
        "name": "Quagsire",
        "type1": "Water",
        "type2": "Ground",
        "weight": 750,
        "height": 1.4,
        "pokedexNumber": 195,
        "generation": 2
    },
    {
        "name": "Espeon",
        "type1": "Psychic",
        "type2": null,
        "weight": 265,
        "height": 0.9,
        "pokedexNumber": 196,
        "generation": 2
    },
    {
        "name": "Umbreon",
        "type1": "Dark",
        "type2": null,
        "weight": 270,
        "height": 1,
        "pokedexNumber": 197,
        "generation": 2
    },
    {
        "name": "Murkrow",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 21,
        "height": 0.5,
        "pokedexNumber": 198,
        "generation": 2
    },
    {
        "name": "Slowking",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 795,
        "height": 2,
        "pokedexNumber": 199,
        "generation": 2
    },
    {
        "name": "Misdreavus",
        "type1": "Ghost",
        "type2": null,
        "weight": 10,
        "height": 0.7,
        "pokedexNumber": 200,
        "generation": 2
    },
    {
        "name": "Unown",
        "type1": "Psychic",
        "type2": null,
        "weight": 50,
        "height": 0.5,
        "pokedexNumber": 201,
        "generation": 2
    },
    {
        "name": "Wobbuffet",
        "type1": "Psychic",
        "type2": null,
        "weight": 285,
        "height": 1.3,
        "pokedexNumber": 202,
        "generation": 2
    },
    {
        "name": "Girafarig",
        "type1": "Normal",
        "type2": "Psychic",
        "weight": 415,
        "height": 1.5,
        "pokedexNumber": 203,
        "generation": 2
    },
    {
        "name": "Pineco",
        "type1": "Bug",
        "type2": null,
        "weight": 72,
        "height": 0.6,
        "pokedexNumber": 204,
        "generation": 2
    },
    {
        "name": "Forretress",
        "type1": "Bug",
        "type2": "Steel",
        "weight": 1258,
        "height": 1.2,
        "pokedexNumber": 205,
        "generation": 2
    },
    {
        "name": "Dunsparce",
        "type1": "Normal",
        "type2": null,
        "weight": 140,
        "height": 1.5,
        "pokedexNumber": 206,
        "generation": 2
    },
    {
        "name": "Gligar",
        "type1": "Ground",
        "type2": "Flying",
        "weight": 648,
        "height": 1.1,
        "pokedexNumber": 207,
        "generation": 2
    },
    {
        "name": "Steelix",
        "type1": "Steel",
        "type2": "Ground",
        "weight": 4000,
        "height": 9.2,
        "pokedexNumber": 208,
        "generation": 2
    },
    {
        "name": "Snubbull",
        "type1": "Fairy",
        "type2": null,
        "weight": 78,
        "height": 0.6,
        "pokedexNumber": 209,
        "generation": 2
    },
    {
        "name": "Granbull",
        "type1": "Fairy",
        "type2": null,
        "weight": 487,
        "height": 1.4,
        "pokedexNumber": 210,
        "generation": 2
    },
    {
        "name": "Qwilfish",
        "type1": "Water",
        "type2": "Poison",
        "weight": 39,
        "height": 0.5,
        "pokedexNumber": 211,
        "generation": 2
    },
    {
        "name": "Scizor",
        "type1": "Bug",
        "type2": "Steel",
        "weight": 1180,
        "height": 1.8,
        "pokedexNumber": 212,
        "generation": 2
    },
    {
        "name": "Shuckle",
        "type1": "Bug",
        "type2": "Rock",
        "weight": 205,
        "height": 0.6,
        "pokedexNumber": 213,
        "generation": 2
    },
    {
        "name": "Heracross",
        "type1": "Bug",
        "type2": "Fighting",
        "weight": 540,
        "height": 1.5,
        "pokedexNumber": 214,
        "generation": 2
    },
    {
        "name": "Sneasel",
        "type1": "Dark",
        "type2": "Ice",
        "weight": 280,
        "height": 0.9,
        "pokedexNumber": 215,
        "generation": 2
    },
    {
        "name": "Teddiursa",
        "type1": "Normal",
        "type2": null,
        "weight": 88,
        "height": 0.6,
        "pokedexNumber": 216,
        "generation": 2
    },
    {
        "name": "Ursaring",
        "type1": "Normal",
        "type2": null,
        "weight": 1258,
        "height": 1.8,
        "pokedexNumber": 217,
        "generation": 2
    },
    {
        "name": "Slugma",
        "type1": "Fire",
        "type2": null,
        "weight": 350,
        "height": 0.7,
        "pokedexNumber": 218,
        "generation": 2
    },
    {
        "name": "Magcargo",
        "type1": "Fire",
        "type2": "Rock",
        "weight": 550,
        "height": 0.8,
        "pokedexNumber": 219,
        "generation": 2
    },
    {
        "name": "Swinub",
        "type1": "Ice",
        "type2": "Ground",
        "weight": 65,
        "height": 0.4,
        "pokedexNumber": 220,
        "generation": 2
    },
    {
        "name": "Piloswine",
        "type1": "Ice",
        "type2": "Ground",
        "weight": 558,
        "height": 1.1,
        "pokedexNumber": 221,
        "generation": 2
    },
    {
        "name": "Corsola",
        "type1": "Water",
        "type2": "Rock",
        "weight": 50,
        "height": 0.6,
        "pokedexNumber": 222,
        "generation": 2
    },
    {
        "name": "Remoraid",
        "type1": "Water",
        "type2": null,
        "weight": 120,
        "height": 0.6,
        "pokedexNumber": 223,
        "generation": 2
    },
    {
        "name": "Octillery",
        "type1": "Water",
        "type2": null,
        "weight": 285,
        "height": 0.9,
        "pokedexNumber": 224,
        "generation": 2
    },
    {
        "name": "Delibird",
        "type1": "Ice",
        "type2": "Flying",
        "weight": 160,
        "height": 0.9,
        "pokedexNumber": 225,
        "generation": 2
    },
    {
        "name": "Mantine",
        "type1": "Water",
        "type2": "Flying",
        "weight": 2200,
        "height": 2.1,
        "pokedexNumber": 226,
        "generation": 2
    },
    {
        "name": "Skarmory",
        "type1": "Steel",
        "type2": "Flying",
        "weight": 505,
        "height": 1.7,
        "pokedexNumber": 227,
        "generation": 2
    },
    {
        "name": "Houndour",
        "type1": "Dark",
        "type2": "Fire",
        "weight": 108,
        "height": 0.6,
        "pokedexNumber": 228,
        "generation": 2
    },
    {
        "name": "Houndoom",
        "type1": "Dark",
        "type2": "Fire",
        "weight": 350,
        "height": 1.4,
        "pokedexNumber": 229,
        "generation": 2
    },
    {
        "name": "Kingdra",
        "type1": "Water",
        "type2": "Dragon",
        "weight": 1520,
        "height": 1.8,
        "pokedexNumber": 230,
        "generation": 2
    },
    {
        "name": "Phanpy",
        "type1": "Ground",
        "type2": null,
        "weight": 335,
        "height": 0.5,
        "pokedexNumber": 231,
        "generation": 2
    },
    {
        "name": "Donphan",
        "type1": "Ground",
        "type2": null,
        "weight": 1200,
        "height": 1.1,
        "pokedexNumber": 232,
        "generation": 2
    },
    {
        "name": "Porygon2",
        "type1": "Normal",
        "type2": null,
        "weight": 325,
        "height": 0.6,
        "pokedexNumber": 233,
        "generation": 2
    },
    {
        "name": "Stantler",
        "type1": "Normal",
        "type2": null,
        "weight": 712,
        "height": 1.4,
        "pokedexNumber": 234,
        "generation": 2
    },
    {
        "name": "Smeargle",
        "type1": "Normal",
        "type2": null,
        "weight": 580,
        "height": 1.2,
        "pokedexNumber": 235,
        "generation": 2
    },
    {
        "name": "Tyrogue",
        "type1": "Fighting",
        "type2": null,
        "weight": 210,
        "height": 0.7,
        "pokedexNumber": 236,
        "generation": 2
    },
    {
        "name": "Hitmontop",
        "type1": "Fighting",
        "type2": null,
        "weight": 480,
        "height": 1.4,
        "pokedexNumber": 237,
        "generation": 2
    },
    {
        "name": "Smoochum",
        "type1": "Ice",
        "type2": "Psychic",
        "weight": 60,
        "height": 0.4,
        "pokedexNumber": 238,
        "generation": 2
    },
    {
        "name": "Elekid",
        "type1": "Electric",
        "type2": null,
        "weight": 235,
        "height": 0.6,
        "pokedexNumber": 239,
        "generation": 2
    },
    {
        "name": "Magby",
        "type1": "Fire",
        "type2": null,
        "weight": 214,
        "height": 0.7,
        "pokedexNumber": 240,
        "generation": 2
    },
    {
        "name": "Miltank",
        "type1": "Normal",
        "type2": null,
        "weight": 755,
        "height": 1.2,
        "pokedexNumber": 241,
        "generation": 2
    },
    {
        "name": "Blissey",
        "type1": "Normal",
        "type2": null,
        "weight": 468,
        "height": 1.5,
        "pokedexNumber": 242,
        "generation": 2
    },
    {
        "name": "Raikou",
        "type1": "Electric",
        "type2": null,
        "weight": 1780,
        "height": 1.9,
        "pokedexNumber": 243,
        "generation": 2
    },
    {
        "name": "Entei",
        "type1": "Fire",
        "type2": null,
        "weight": 1980,
        "height": 2.1,
        "pokedexNumber": 244,
        "generation": 2
    },
    {
        "name": "Suicune",
        "type1": "Water",
        "type2": null,
        "weight": 1870,
        "height": 2,
        "pokedexNumber": 245,
        "generation": 2
    },
    {
        "name": "Larvitar",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 720,
        "height": 0.6,
        "pokedexNumber": 246,
        "generation": 2
    },
    {
        "name": "Pupitar",
        "type1": "Rock",
        "type2": "Ground",
        "weight": 1520,
        "height": 1.2,
        "pokedexNumber": 247,
        "generation": 2
    },
    {
        "name": "Tyranitar",
        "type1": "Rock",
        "type2": "Dark",
        "weight": 2020,
        "height": 2,
        "pokedexNumber": 248,
        "generation": 2
    },
    {
        "name": "Lugia",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 2160,
        "height": 5.2,
        "pokedexNumber": 249,
        "generation": 2
    },
    {
        "name": "Ho-oh",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 1990,
        "height": 3.8,
        "pokedexNumber": 250,
        "generation": 2
    },
    {
        "name": "Celebi",
        "type1": "Psychic",
        "type2": "Grass",
        "weight": 50,
        "height": 0.6,
        "pokedexNumber": 251,
        "generation": 2
    },
    {
        "name": "Treecko",
        "type1": "Grass",
        "type2": null,
        "weight": 50,
        "height": 0.5,
        "pokedexNumber": 252,
        "generation": 3
    },
    {
        "name": "Grovyle",
        "type1": "Grass",
        "type2": null,
        "weight": 216,
        "height": 0.9,
        "pokedexNumber": 253,
        "generation": 3
    },
    {
        "name": "Sceptile",
        "type1": "Grass",
        "type2": null,
        "weight": 522,
        "height": 1.7,
        "pokedexNumber": 254,
        "generation": 3
    },
    {
        "name": "Torchic",
        "type1": "Fire",
        "type2": null,
        "weight": 25,
        "height": 0.4,
        "pokedexNumber": 255,
        "generation": 3
    },
    {
        "name": "Combusken",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 195,
        "height": 0.9,
        "pokedexNumber": 256,
        "generation": 3
    },
    {
        "name": "Blaziken",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 520,
        "height": 1.9,
        "pokedexNumber": 257,
        "generation": 3
    },
    {
        "name": "Mudkip",
        "type1": "Water",
        "type2": null,
        "weight": 76,
        "height": 0.4,
        "pokedexNumber": 258,
        "generation": 3
    },
    {
        "name": "Marshtomp",
        "type1": "Water",
        "type2": "Ground",
        "weight": 280,
        "height": 0.7,
        "pokedexNumber": 259,
        "generation": 3
    },
    {
        "name": "Swampert",
        "type1": "Water",
        "type2": "Ground",
        "weight": 819,
        "height": 1.5,
        "pokedexNumber": 260,
        "generation": 3
    },
    {
        "name": "Poochyena",
        "type1": "Dark",
        "type2": null,
        "weight": 136,
        "height": 0.5,
        "pokedexNumber": 261,
        "generation": 3
    },
    {
        "name": "Mightyena",
        "type1": "Dark",
        "type2": null,
        "weight": 370,
        "height": 1,
        "pokedexNumber": 262,
        "generation": 3
    },
    {
        "name": "Zigzagoon",
        "type1": "Normal",
        "type2": null,
        "weight": 175,
        "height": 0.4,
        "pokedexNumber": 263,
        "generation": 3
    },
    {
        "name": "Linoone",
        "type1": "Normal",
        "type2": null,
        "weight": 325,
        "height": 0.5,
        "pokedexNumber": 264,
        "generation": 3
    },
    {
        "name": "Wurmple",
        "type1": "Bug",
        "type2": null,
        "weight": 36,
        "height": 0.3,
        "pokedexNumber": 265,
        "generation": 3
    },
    {
        "name": "Silcoon",
        "type1": "Bug",
        "type2": null,
        "weight": 100,
        "height": 0.6,
        "pokedexNumber": 266,
        "generation": 3
    },
    {
        "name": "Beautifly",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 284,
        "height": 1,
        "pokedexNumber": 267,
        "generation": 3
    },
    {
        "name": "Cascoon",
        "type1": "Bug",
        "type2": null,
        "weight": 115,
        "height": 0.7,
        "pokedexNumber": 268,
        "generation": 3
    },
    {
        "name": "Dustox",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 316,
        "height": 1.2,
        "pokedexNumber": 269,
        "generation": 3
    },
    {
        "name": "Lotad",
        "type1": "Water",
        "type2": "Grass",
        "weight": 26,
        "height": 0.5,
        "pokedexNumber": 270,
        "generation": 3
    },
    {
        "name": "Lombre",
        "type1": "Water",
        "type2": "Grass",
        "weight": 325,
        "height": 1.2,
        "pokedexNumber": 271,
        "generation": 3
    },
    {
        "name": "Ludicolo",
        "type1": "Water",
        "type2": "Grass",
        "weight": 550,
        "height": 1.5,
        "pokedexNumber": 272,
        "generation": 3
    },
    {
        "name": "Seedot",
        "type1": "Grass",
        "type2": null,
        "weight": 40,
        "height": 0.5,
        "pokedexNumber": 273,
        "generation": 3
    },
    {
        "name": "Nuzleaf",
        "type1": "Grass",
        "type2": "Dark",
        "weight": 280,
        "height": 1,
        "pokedexNumber": 274,
        "generation": 3
    },
    {
        "name": "Shiftry",
        "type1": "Grass",
        "type2": "Dark",
        "weight": 596,
        "height": 1.3,
        "pokedexNumber": 275,
        "generation": 3
    },
    {
        "name": "Taillow",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 23,
        "height": 0.3,
        "pokedexNumber": 276,
        "generation": 3
    },
    {
        "name": "Swellow",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 198,
        "height": 0.7,
        "pokedexNumber": 277,
        "generation": 3
    },
    {
        "name": "Wingull",
        "type1": "Water",
        "type2": "Flying",
        "weight": 95,
        "height": 0.6,
        "pokedexNumber": 278,
        "generation": 3
    },
    {
        "name": "Pelipper",
        "type1": "Water",
        "type2": "Flying",
        "weight": 280,
        "height": 1.2,
        "pokedexNumber": 279,
        "generation": 3
    },
    {
        "name": "Ralts",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 66,
        "height": 0.4,
        "pokedexNumber": 280,
        "generation": 3
    },
    {
        "name": "Kirlia",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 202,
        "height": 0.8,
        "pokedexNumber": 281,
        "generation": 3
    },
    {
        "name": "Gardevoir",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 484,
        "height": 1.6,
        "pokedexNumber": 282,
        "generation": 3
    },
    {
        "name": "Surskit",
        "type1": "Bug",
        "type2": "Water",
        "weight": 17,
        "height": 0.5,
        "pokedexNumber": 283,
        "generation": 3
    },
    {
        "name": "Masquerain",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 36,
        "height": 0.8,
        "pokedexNumber": 284,
        "generation": 3
    },
    {
        "name": "Shroomish",
        "type1": "Grass",
        "type2": null,
        "weight": 45,
        "height": 0.4,
        "pokedexNumber": 285,
        "generation": 3
    },
    {
        "name": "Breloom",
        "type1": "Grass",
        "type2": "Fighting",
        "weight": 392,
        "height": 1.2,
        "pokedexNumber": 286,
        "generation": 3
    },
    {
        "name": "Slakoth",
        "type1": "Normal",
        "type2": null,
        "weight": 240,
        "height": 0.8,
        "pokedexNumber": 287,
        "generation": 3
    },
    {
        "name": "Vigoroth",
        "type1": "Normal",
        "type2": null,
        "weight": 465,
        "height": 1.4,
        "pokedexNumber": 288,
        "generation": 3
    },
    {
        "name": "Slaking",
        "type1": "Normal",
        "type2": null,
        "weight": 1305,
        "height": 2,
        "pokedexNumber": 289,
        "generation": 3
    },
    {
        "name": "Nincada",
        "type1": "Bug",
        "type2": "Ground",
        "weight": 55,
        "height": 0.5,
        "pokedexNumber": 290,
        "generation": 3
    },
    {
        "name": "Ninjask",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 120,
        "height": 0.8,
        "pokedexNumber": 291,
        "generation": 3
    },
    {
        "name": "Shedinja",
        "type1": "Bug",
        "type2": "Ghost",
        "weight": 12,
        "height": 0.8,
        "pokedexNumber": 292,
        "generation": 3
    },
    {
        "name": "Whismur",
        "type1": "Normal",
        "type2": null,
        "weight": 163,
        "height": 0.6,
        "pokedexNumber": 293,
        "generation": 3
    },
    {
        "name": "Loudred",
        "type1": "Normal",
        "type2": null,
        "weight": 405,
        "height": 1,
        "pokedexNumber": 294,
        "generation": 3
    },
    {
        "name": "Exploud",
        "type1": "Normal",
        "type2": null,
        "weight": 840,
        "height": 1.5,
        "pokedexNumber": 295,
        "generation": 3
    },
    {
        "name": "Makuhita",
        "type1": "Fighting",
        "type2": null,
        "weight": 864,
        "height": 1,
        "pokedexNumber": 296,
        "generation": 3
    },
    {
        "name": "Hariyama",
        "type1": "Fighting",
        "type2": null,
        "weight": 2538,
        "height": 2.3,
        "pokedexNumber": 297,
        "generation": 3
    },
    {
        "name": "Azurill",
        "type1": "Normal",
        "type2": "Fairy",
        "weight": 20,
        "height": 0.2,
        "pokedexNumber": 298,
        "generation": 3
    },
    {
        "name": "Nosepass",
        "type1": "Rock",
        "type2": null,
        "weight": 970,
        "height": 1,
        "pokedexNumber": 299,
        "generation": 3
    },
    {
        "name": "Skitty",
        "type1": "Normal",
        "type2": null,
        "weight": 110,
        "height": 0.6,
        "pokedexNumber": 300,
        "generation": 3
    },
    {
        "name": "Delcatty",
        "type1": "Normal",
        "type2": null,
        "weight": 326,
        "height": 1.1,
        "pokedexNumber": 301,
        "generation": 3
    },
    {
        "name": "Sableye",
        "type1": "Dark",
        "type2": "Ghost",
        "weight": 110,
        "height": 0.5,
        "pokedexNumber": 302,
        "generation": 3
    },
    {
        "name": "Mawile",
        "type1": "Steel",
        "type2": "Fairy",
        "weight": 115,
        "height": 0.6,
        "pokedexNumber": 303,
        "generation": 3
    },
    {
        "name": "Aron",
        "type1": "Steel",
        "type2": "Rock",
        "weight": 600,
        "height": 0.4,
        "pokedexNumber": 304,
        "generation": 3
    },
    {
        "name": "Lairon",
        "type1": "Steel",
        "type2": "Rock",
        "weight": 1200,
        "height": 0.9,
        "pokedexNumber": 305,
        "generation": 3
    },
    {
        "name": "Aggron",
        "type1": "Steel",
        "type2": "Rock",
        "weight": 3600,
        "height": 2.1,
        "pokedexNumber": 306,
        "generation": 3
    },
    {
        "name": "Meditite",
        "type1": "Fighting",
        "type2": "Psychic",
        "weight": 112,
        "height": 0.6,
        "pokedexNumber": 307,
        "generation": 3
    },
    {
        "name": "Medicham",
        "type1": "Fighting",
        "type2": "Psychic",
        "weight": 315,
        "height": 1.3,
        "pokedexNumber": 308,
        "generation": 3
    },
    {
        "name": "Electrike",
        "type1": "Electric",
        "type2": null,
        "weight": 152,
        "height": 0.6,
        "pokedexNumber": 309,
        "generation": 3
    },
    {
        "name": "Manectric",
        "type1": "Electric",
        "type2": null,
        "weight": 402,
        "height": 1.5,
        "pokedexNumber": 310,
        "generation": 3
    },
    {
        "name": "Plusle",
        "type1": "Electric",
        "type2": null,
        "weight": 42,
        "height": 0.4,
        "pokedexNumber": 311,
        "generation": 3
    },
    {
        "name": "Minun",
        "type1": "Electric",
        "type2": null,
        "weight": 42,
        "height": 0.4,
        "pokedexNumber": 312,
        "generation": 3
    },
    {
        "name": "Volbeat",
        "type1": "Bug",
        "type2": null,
        "weight": 177,
        "height": 0.7,
        "pokedexNumber": 313,
        "generation": 3
    },
    {
        "name": "Illumise",
        "type1": "Bug",
        "type2": null,
        "weight": 177,
        "height": 0.6,
        "pokedexNumber": 314,
        "generation": 3
    },
    {
        "name": "Roselia",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 20,
        "height": 0.3,
        "pokedexNumber": 315,
        "generation": 3
    },
    {
        "name": "Gulpin",
        "type1": "Poison",
        "type2": null,
        "weight": 103,
        "height": 0.4,
        "pokedexNumber": 316,
        "generation": 3
    },
    {
        "name": "Swalot",
        "type1": "Poison",
        "type2": null,
        "weight": 800,
        "height": 1.7,
        "pokedexNumber": 317,
        "generation": 3
    },
    {
        "name": "Carvanha",
        "type1": "Water",
        "type2": "Dark",
        "weight": 208,
        "height": 0.8,
        "pokedexNumber": 318,
        "generation": 3
    },
    {
        "name": "Sharpedo",
        "type1": "Water",
        "type2": "Dark",
        "weight": 888,
        "height": 1.8,
        "pokedexNumber": 319,
        "generation": 3
    },
    {
        "name": "Wailmer",
        "type1": "Water",
        "type2": null,
        "weight": 1300,
        "height": 2,
        "pokedexNumber": 320,
        "generation": 3
    },
    {
        "name": "Wailord",
        "type1": "Water",
        "type2": null,
        "weight": 3980,
        "height": 14.5,
        "pokedexNumber": 321,
        "generation": 3
    },
    {
        "name": "Numel",
        "type1": "Fire",
        "type2": "Ground",
        "weight": 240,
        "height": 0.7,
        "pokedexNumber": 322,
        "generation": 3
    },
    {
        "name": "Camerupt",
        "type1": "Fire",
        "type2": "Ground",
        "weight": 2200,
        "height": 1.9,
        "pokedexNumber": 323,
        "generation": 3
    },
    {
        "name": "Torkoal",
        "type1": "Fire",
        "type2": null,
        "weight": 804,
        "height": 0.5,
        "pokedexNumber": 324,
        "generation": 3
    },
    {
        "name": "Spoink",
        "type1": "Psychic",
        "type2": null,
        "weight": 306,
        "height": 0.7,
        "pokedexNumber": 325,
        "generation": 3
    },
    {
        "name": "Grumpig",
        "type1": "Psychic",
        "type2": null,
        "weight": 715,
        "height": 0.9,
        "pokedexNumber": 326,
        "generation": 3
    },
    {
        "name": "Spinda",
        "type1": "Normal",
        "type2": null,
        "weight": 50,
        "height": 1.1,
        "pokedexNumber": 327,
        "generation": 3
    },
    {
        "name": "Trapinch",
        "type1": "Ground",
        "type2": null,
        "weight": 150,
        "height": 0.7,
        "pokedexNumber": 328,
        "generation": 3
    },
    {
        "name": "Vibrava",
        "type1": "Ground",
        "type2": "Dragon",
        "weight": 153,
        "height": 1.1,
        "pokedexNumber": 329,
        "generation": 3
    },
    {
        "name": "Flygon",
        "type1": "Ground",
        "type2": "Dragon",
        "weight": 820,
        "height": 2,
        "pokedexNumber": 330,
        "generation": 3
    },
    {
        "name": "Cacnea",
        "type1": "Grass",
        "type2": null,
        "weight": 513,
        "height": 0.4,
        "pokedexNumber": 331,
        "generation": 3
    },
    {
        "name": "Cacturne",
        "type1": "Grass",
        "type2": "Dark",
        "weight": 774,
        "height": 1.3,
        "pokedexNumber": 332,
        "generation": 3
    },
    {
        "name": "Swablu",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 12,
        "height": 0.4,
        "pokedexNumber": 333,
        "generation": 3
    },
    {
        "name": "Altaria",
        "type1": "Dragon",
        "type2": "Flying",
        "weight": 206,
        "height": 1.1,
        "pokedexNumber": 334,
        "generation": 3
    },
    {
        "name": "Zangoose",
        "type1": "Normal",
        "type2": null,
        "weight": 403,
        "height": 1.3,
        "pokedexNumber": 335,
        "generation": 3
    },
    {
        "name": "Seviper",
        "type1": "Poison",
        "type2": null,
        "weight": 525,
        "height": 2.7,
        "pokedexNumber": 336,
        "generation": 3
    },
    {
        "name": "Lunatone",
        "type1": "Rock",
        "type2": "Psychic",
        "weight": 1680,
        "height": 1,
        "pokedexNumber": 337,
        "generation": 3
    },
    {
        "name": "Solrock",
        "type1": "Rock",
        "type2": "Psychic",
        "weight": 1540,
        "height": 1.2,
        "pokedexNumber": 338,
        "generation": 3
    },
    {
        "name": "Barboach",
        "type1": "Water",
        "type2": "Ground",
        "weight": 19,
        "height": 0.4,
        "pokedexNumber": 339,
        "generation": 3
    },
    {
        "name": "Whiscash",
        "type1": "Water",
        "type2": "Ground",
        "weight": 236,
        "height": 0.9,
        "pokedexNumber": 340,
        "generation": 3
    },
    {
        "name": "Corphish",
        "type1": "Water",
        "type2": null,
        "weight": 115,
        "height": 0.6,
        "pokedexNumber": 341,
        "generation": 3
    },
    {
        "name": "Crawdaunt",
        "type1": "Water",
        "type2": "Dark",
        "weight": 328,
        "height": 1.1,
        "pokedexNumber": 342,
        "generation": 3
    },
    {
        "name": "Baltoy",
        "type1": "Ground",
        "type2": "Psychic",
        "weight": 215,
        "height": 0.5,
        "pokedexNumber": 343,
        "generation": 3
    },
    {
        "name": "Claydol",
        "type1": "Ground",
        "type2": "Psychic",
        "weight": 1080,
        "height": 1.5,
        "pokedexNumber": 344,
        "generation": 3
    },
    {
        "name": "Lileep",
        "type1": "Rock",
        "type2": "Grass",
        "weight": 238,
        "height": 1,
        "pokedexNumber": 345,
        "generation": 3
    },
    {
        "name": "Cradily",
        "type1": "Rock",
        "type2": "Grass",
        "weight": 604,
        "height": 1.5,
        "pokedexNumber": 346,
        "generation": 3
    },
    {
        "name": "Anorith",
        "type1": "Rock",
        "type2": "Bug",
        "weight": 125,
        "height": 0.7,
        "pokedexNumber": 347,
        "generation": 3
    },
    {
        "name": "Armaldo",
        "type1": "Rock",
        "type2": "Bug",
        "weight": 682,
        "height": 1.5,
        "pokedexNumber": 348,
        "generation": 3
    },
    {
        "name": "Feebas",
        "type1": "Water",
        "type2": null,
        "weight": 74,
        "height": 0.6,
        "pokedexNumber": 349,
        "generation": 3
    },
    {
        "name": "Milotic",
        "type1": "Water",
        "type2": null,
        "weight": 1620,
        "height": 6.2,
        "pokedexNumber": 350,
        "generation": 3
    },
    {
        "name": "Castform",
        "type1": "Normal",
        "type2": null,
        "weight": 8,
        "height": 0.3,
        "pokedexNumber": 351,
        "generation": 3
    },
    {
        "name": "Kecleon",
        "type1": "Normal",
        "type2": null,
        "weight": 220,
        "height": 1,
        "pokedexNumber": 352,
        "generation": 3
    },
    {
        "name": "Shuppet",
        "type1": "Ghost",
        "type2": null,
        "weight": 23,
        "height": 0.6,
        "pokedexNumber": 353,
        "generation": 3
    },
    {
        "name": "Banette",
        "type1": "Ghost",
        "type2": null,
        "weight": 125,
        "height": 1.1,
        "pokedexNumber": 354,
        "generation": 3
    },
    {
        "name": "Duskull",
        "type1": "Ghost",
        "type2": null,
        "weight": 150,
        "height": 0.8,
        "pokedexNumber": 355,
        "generation": 3
    },
    {
        "name": "Dusclops",
        "type1": "Ghost",
        "type2": null,
        "weight": 306,
        "height": 1.6,
        "pokedexNumber": 356,
        "generation": 3
    },
    {
        "name": "Tropius",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 1000,
        "height": 2,
        "pokedexNumber": 357,
        "generation": 3
    },
    {
        "name": "Chimecho",
        "type1": "Psychic",
        "type2": null,
        "weight": 10,
        "height": 0.6,
        "pokedexNumber": 358,
        "generation": 3
    },
    {
        "name": "Absol",
        "type1": "Dark",
        "type2": null,
        "weight": 470,
        "height": 1.2,
        "pokedexNumber": 359,
        "generation": 3
    },
    {
        "name": "Wynaut",
        "type1": "Psychic",
        "type2": null,
        "weight": 140,
        "height": 0.6,
        "pokedexNumber": 360,
        "generation": 3
    },
    {
        "name": "Snorunt",
        "type1": "Ice",
        "type2": null,
        "weight": 168,
        "height": 0.7,
        "pokedexNumber": 361,
        "generation": 3
    },
    {
        "name": "Glalie",
        "type1": "Ice",
        "type2": null,
        "weight": 2565,
        "height": 1.5,
        "pokedexNumber": 362,
        "generation": 3
    },
    {
        "name": "Spheal",
        "type1": "Ice",
        "type2": "Water",
        "weight": 395,
        "height": 0.8,
        "pokedexNumber": 363,
        "generation": 3
    },
    {
        "name": "Sealeo",
        "type1": "Ice",
        "type2": "Water",
        "weight": 876,
        "height": 1.1,
        "pokedexNumber": 364,
        "generation": 3
    },
    {
        "name": "Walrein",
        "type1": "Ice",
        "type2": "Water",
        "weight": 1506,
        "height": 1.4,
        "pokedexNumber": 365,
        "generation": 3
    },
    {
        "name": "Clamperl",
        "type1": "Water",
        "type2": null,
        "weight": 525,
        "height": 0.4,
        "pokedexNumber": 366,
        "generation": 3
    },
    {
        "name": "Huntail",
        "type1": "Water",
        "type2": null,
        "weight": 270,
        "height": 1.7,
        "pokedexNumber": 367,
        "generation": 3
    },
    {
        "name": "Gorebyss",
        "type1": "Water",
        "type2": null,
        "weight": 226,
        "height": 1.8,
        "pokedexNumber": 368,
        "generation": 3
    },
    {
        "name": "Relicanth",
        "type1": "Water",
        "type2": "Rock",
        "weight": 234,
        "height": 1,
        "pokedexNumber": 369,
        "generation": 3
    },
    {
        "name": "Luvdisc",
        "type1": "Water",
        "type2": null,
        "weight": 87,
        "height": 0.6,
        "pokedexNumber": 370,
        "generation": 3
    },
    {
        "name": "Bagon",
        "type1": "Dragon",
        "type2": null,
        "weight": 421,
        "height": 0.6,
        "pokedexNumber": 371,
        "generation": 3
    },
    {
        "name": "Shelgon",
        "type1": "Dragon",
        "type2": null,
        "weight": 1105,
        "height": 1.1,
        "pokedexNumber": 372,
        "generation": 3
    },
    {
        "name": "Salamence",
        "type1": "Dragon",
        "type2": "Flying",
        "weight": 1026,
        "height": 1.5,
        "pokedexNumber": 373,
        "generation": 3
    },
    {
        "name": "Beldum",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 952,
        "height": 0.6,
        "pokedexNumber": 374,
        "generation": 3
    },
    {
        "name": "Metang",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 2025,
        "height": 1.2,
        "pokedexNumber": 375,
        "generation": 3
    },
    {
        "name": "Metagross",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 5500,
        "height": 1.6,
        "pokedexNumber": 376,
        "generation": 3
    },
    {
        "name": "Regirock",
        "type1": "Rock",
        "type2": null,
        "weight": 2300,
        "height": 1.7,
        "pokedexNumber": 377,
        "generation": 3
    },
    {
        "name": "Regice",
        "type1": "Ice",
        "type2": null,
        "weight": 1750,
        "height": 1.8,
        "pokedexNumber": 378,
        "generation": 3
    },
    {
        "name": "Registeel",
        "type1": "Steel",
        "type2": null,
        "weight": 2050,
        "height": 1.9,
        "pokedexNumber": 379,
        "generation": 3
    },
    {
        "name": "Latias",
        "type1": "Dragon",
        "type2": "Psychic",
        "weight": 400,
        "height": 1.4,
        "pokedexNumber": 380,
        "generation": 3
    },
    {
        "name": "Latios",
        "type1": "Dragon",
        "type2": "Psychic",
        "weight": 600,
        "height": 2,
        "pokedexNumber": 381,
        "generation": 3
    },
    {
        "name": "Kyogre",
        "type1": "Water",
        "type2": null,
        "weight": 3520,
        "height": 4.5,
        "pokedexNumber": 382,
        "generation": 3
    },
    {
        "name": "Groudon",
        "type1": "Ground",
        "type2": null,
        "weight": 9500,
        "height": 3.5,
        "pokedexNumber": 383,
        "generation": 3
    },
    {
        "name": "Rayquaza",
        "type1": "Dragon",
        "type2": "Flying",
        "weight": 2065,
        "height": 7,
        "pokedexNumber": 384,
        "generation": 3
    },
    {
        "name": "Jirachi",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 11,
        "height": 0.3,
        "pokedexNumber": 385,
        "generation": 3
    },
    {
        "name": "Deoxys",
        "type1": "Psychic",
        "type2": null,
        "weight": 608,
        "height": 1.7,
        "pokedexNumber": 386,
        "generation": 3
    },
    {
        "name": "Turtwig",
        "type1": "Grass",
        "type2": null,
        "weight": 102,
        "height": 0.4,
        "pokedexNumber": 387,
        "generation": 4
    },
    {
        "name": "Grotle",
        "type1": "Grass",
        "type2": null,
        "weight": 970,
        "height": 1.1,
        "pokedexNumber": 388,
        "generation": 4
    },
    {
        "name": "Torterra",
        "type1": "Grass",
        "type2": "Ground",
        "weight": 3100,
        "height": 2.2,
        "pokedexNumber": 389,
        "generation": 4
    },
    {
        "name": "Chimchar",
        "type1": "Fire",
        "type2": null,
        "weight": 62,
        "height": 0.5,
        "pokedexNumber": 390,
        "generation": 4
    },
    {
        "name": "Monferno",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 220,
        "height": 0.9,
        "pokedexNumber": 391,
        "generation": 4
    },
    {
        "name": "Infernape",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 550,
        "height": 1.2,
        "pokedexNumber": 392,
        "generation": 4
    },
    {
        "name": "Piplup",
        "type1": "Water",
        "type2": null,
        "weight": 52,
        "height": 0.4,
        "pokedexNumber": 393,
        "generation": 4
    },
    {
        "name": "Prinplup",
        "type1": "Water",
        "type2": null,
        "weight": 230,
        "height": 0.8,
        "pokedexNumber": 394,
        "generation": 4
    },
    {
        "name": "Empoleon",
        "type1": "Water",
        "type2": "Steel",
        "weight": 845,
        "height": 1.7,
        "pokedexNumber": 395,
        "generation": 4
    },
    {
        "name": "Starly",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 20,
        "height": 0.3,
        "pokedexNumber": 396,
        "generation": 4
    },
    {
        "name": "Staravia",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 155,
        "height": 0.6,
        "pokedexNumber": 397,
        "generation": 4
    },
    {
        "name": "Staraptor",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 249,
        "height": 1.2,
        "pokedexNumber": 398,
        "generation": 4
    },
    {
        "name": "Bidoof",
        "type1": "Normal",
        "type2": null,
        "weight": 200,
        "height": 0.5,
        "pokedexNumber": 399,
        "generation": 4
    },
    {
        "name": "Bibarel",
        "type1": "Normal",
        "type2": "Water",
        "weight": 315,
        "height": 1,
        "pokedexNumber": 400,
        "generation": 4
    },
    {
        "name": "Kricketot",
        "type1": "Bug",
        "type2": null,
        "weight": 22,
        "height": 0.3,
        "pokedexNumber": 401,
        "generation": 4
    },
    {
        "name": "Kricketune",
        "type1": "Bug",
        "type2": null,
        "weight": 255,
        "height": 1,
        "pokedexNumber": 402,
        "generation": 4
    },
    {
        "name": "Shinx",
        "type1": "Electric",
        "type2": null,
        "weight": 95,
        "height": 0.5,
        "pokedexNumber": 403,
        "generation": 4
    },
    {
        "name": "Luxio",
        "type1": "Electric",
        "type2": null,
        "weight": 305,
        "height": 0.9,
        "pokedexNumber": 404,
        "generation": 4
    },
    {
        "name": "Luxray",
        "type1": "Electric",
        "type2": null,
        "weight": 420,
        "height": 1.4,
        "pokedexNumber": 405,
        "generation": 4
    },
    {
        "name": "Budew",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 12,
        "height": 0.2,
        "pokedexNumber": 406,
        "generation": 4
    },
    {
        "name": "Roserade",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 145,
        "height": 0.9,
        "pokedexNumber": 407,
        "generation": 4
    },
    {
        "name": "Cranidos",
        "type1": "Rock",
        "type2": null,
        "weight": 315,
        "height": 0.9,
        "pokedexNumber": 408,
        "generation": 4
    },
    {
        "name": "Rampardos",
        "type1": "Rock",
        "type2": null,
        "weight": 1025,
        "height": 1.6,
        "pokedexNumber": 409,
        "generation": 4
    },
    {
        "name": "Shieldon",
        "type1": "Rock",
        "type2": "Steel",
        "weight": 570,
        "height": 0.5,
        "pokedexNumber": 410,
        "generation": 4
    },
    {
        "name": "Bastiodon",
        "type1": "Rock",
        "type2": "Steel",
        "weight": 1495,
        "height": 1.3,
        "pokedexNumber": 411,
        "generation": 4
    },
    {
        "name": "Burmy",
        "type1": "Bug",
        "type2": null,
        "weight": 34,
        "height": 0.2,
        "pokedexNumber": 412,
        "generation": 4
    },
    {
        "name": "Wormadam-plant",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 65,
        "height": 0.5,
        "pokedexNumber": 413,
        "generation": 4
    },
    {
        "name": "Mothim",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 233,
        "height": 0.9,
        "pokedexNumber": 414,
        "generation": 4
    },
    {
        "name": "Combee",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 55,
        "height": 0.3,
        "pokedexNumber": 415,
        "generation": 4
    },
    {
        "name": "Vespiquen",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 385,
        "height": 1.2,
        "pokedexNumber": 416,
        "generation": 4
    },
    {
        "name": "Pachirisu",
        "type1": "Electric",
        "type2": null,
        "weight": 39,
        "height": 0.4,
        "pokedexNumber": 417,
        "generation": 4
    },
    {
        "name": "Buizel",
        "type1": "Water",
        "type2": null,
        "weight": 295,
        "height": 0.7,
        "pokedexNumber": 418,
        "generation": 4
    },
    {
        "name": "Floatzel",
        "type1": "Water",
        "type2": null,
        "weight": 335,
        "height": 1.1,
        "pokedexNumber": 419,
        "generation": 4
    },
    {
        "name": "Cherubi",
        "type1": "Grass",
        "type2": null,
        "weight": 33,
        "height": 0.4,
        "pokedexNumber": 420,
        "generation": 4
    },
    {
        "name": "Cherrim",
        "type1": "Grass",
        "type2": null,
        "weight": 93,
        "height": 0.5,
        "pokedexNumber": 421,
        "generation": 4
    },
    {
        "name": "Shellos",
        "type1": "Water",
        "type2": null,
        "weight": 63,
        "height": 0.3,
        "pokedexNumber": 422,
        "generation": 4
    },
    {
        "name": "Gastrodon",
        "type1": "Water",
        "type2": "Ground",
        "weight": 299,
        "height": 0.9,
        "pokedexNumber": 423,
        "generation": 4
    },
    {
        "name": "Ambipom",
        "type1": "Normal",
        "type2": null,
        "weight": 203,
        "height": 1.2,
        "pokedexNumber": 424,
        "generation": 4
    },
    {
        "name": "Drifloon",
        "type1": "Ghost",
        "type2": "Flying",
        "weight": 12,
        "height": 0.4,
        "pokedexNumber": 425,
        "generation": 4
    },
    {
        "name": "Drifblim",
        "type1": "Ghost",
        "type2": "Flying",
        "weight": 150,
        "height": 1.2,
        "pokedexNumber": 426,
        "generation": 4
    },
    {
        "name": "Buneary",
        "type1": "Normal",
        "type2": null,
        "weight": 55,
        "height": 0.4,
        "pokedexNumber": 427,
        "generation": 4
    },
    {
        "name": "Lopunny",
        "type1": "Normal",
        "type2": null,
        "weight": 333,
        "height": 1.2,
        "pokedexNumber": 428,
        "generation": 4
    },
    {
        "name": "Mismagius",
        "type1": "Ghost",
        "type2": null,
        "weight": 44,
        "height": 0.9,
        "pokedexNumber": 429,
        "generation": 4
    },
    {
        "name": "Honchkrow",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 273,
        "height": 0.9,
        "pokedexNumber": 430,
        "generation": 4
    },
    {
        "name": "Glameow",
        "type1": "Normal",
        "type2": null,
        "weight": 39,
        "height": 0.5,
        "pokedexNumber": 431,
        "generation": 4
    },
    {
        "name": "Purugly",
        "type1": "Normal",
        "type2": null,
        "weight": 438,
        "height": 1,
        "pokedexNumber": 432,
        "generation": 4
    },
    {
        "name": "Chingling",
        "type1": "Psychic",
        "type2": null,
        "weight": 6,
        "height": 0.2,
        "pokedexNumber": 433,
        "generation": 4
    },
    {
        "name": "Stunky",
        "type1": "Poison",
        "type2": "Dark",
        "weight": 192,
        "height": 0.4,
        "pokedexNumber": 434,
        "generation": 4
    },
    {
        "name": "Skuntank",
        "type1": "Poison",
        "type2": "Dark",
        "weight": 380,
        "height": 1,
        "pokedexNumber": 435,
        "generation": 4
    },
    {
        "name": "Bronzor",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 605,
        "height": 0.5,
        "pokedexNumber": 436,
        "generation": 4
    },
    {
        "name": "Bronzong",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 1870,
        "height": 1.3,
        "pokedexNumber": 437,
        "generation": 4
    },
    {
        "name": "Bonsly",
        "type1": "Rock",
        "type2": null,
        "weight": 150,
        "height": 0.5,
        "pokedexNumber": 438,
        "generation": 4
    },
    {
        "name": "Mime-jr",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 130,
        "height": 0.6,
        "pokedexNumber": 439,
        "generation": 4
    },
    {
        "name": "Happiny",
        "type1": "Normal",
        "type2": null,
        "weight": 244,
        "height": 0.6,
        "pokedexNumber": 440,
        "generation": 4
    },
    {
        "name": "Chatot",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 19,
        "height": 0.5,
        "pokedexNumber": 441,
        "generation": 4
    },
    {
        "name": "Spiritomb",
        "type1": "Ghost",
        "type2": "Dark",
        "weight": 1080,
        "height": 1,
        "pokedexNumber": 442,
        "generation": 4
    },
    {
        "name": "Gible",
        "type1": "Dragon",
        "type2": "Ground",
        "weight": 205,
        "height": 0.7,
        "pokedexNumber": 443,
        "generation": 4
    },
    {
        "name": "Gabite",
        "type1": "Dragon",
        "type2": "Ground",
        "weight": 560,
        "height": 1.4,
        "pokedexNumber": 444,
        "generation": 4
    },
    {
        "name": "Garchomp",
        "type1": "Dragon",
        "type2": "Ground",
        "weight": 950,
        "height": 1.9,
        "pokedexNumber": 445,
        "generation": 4
    },
    {
        "name": "Munchlax",
        "type1": "Normal",
        "type2": null,
        "weight": 1050,
        "height": 0.6,
        "pokedexNumber": 446,
        "generation": 4
    },
    {
        "name": "Riolu",
        "type1": "Fighting",
        "type2": null,
        "weight": 202,
        "height": 0.7,
        "pokedexNumber": 447,
        "generation": 4
    },
    {
        "name": "Lucario",
        "type1": "Fighting",
        "type2": "Steel",
        "weight": 540,
        "height": 1.2,
        "pokedexNumber": 448,
        "generation": 4
    },
    {
        "name": "Hippopotas",
        "type1": "Ground",
        "type2": null,
        "weight": 495,
        "height": 0.8,
        "pokedexNumber": 449,
        "generation": 4
    },
    {
        "name": "Hippowdon",
        "type1": "Ground",
        "type2": null,
        "weight": 3000,
        "height": 2,
        "pokedexNumber": 450,
        "generation": 4
    },
    {
        "name": "Skorupi",
        "type1": "Poison",
        "type2": "Bug",
        "weight": 120,
        "height": 0.8,
        "pokedexNumber": 451,
        "generation": 4
    },
    {
        "name": "Drapion",
        "type1": "Poison",
        "type2": "Dark",
        "weight": 615,
        "height": 1.3,
        "pokedexNumber": 452,
        "generation": 4
    },
    {
        "name": "Croagunk",
        "type1": "Poison",
        "type2": "Fighting",
        "weight": 230,
        "height": 0.7,
        "pokedexNumber": 453,
        "generation": 4
    },
    {
        "name": "Toxicroak",
        "type1": "Poison",
        "type2": "Fighting",
        "weight": 444,
        "height": 1.3,
        "pokedexNumber": 454,
        "generation": 4
    },
    {
        "name": "Carnivine",
        "type1": "Grass",
        "type2": null,
        "weight": 270,
        "height": 1.4,
        "pokedexNumber": 455,
        "generation": 4
    },
    {
        "name": "Finneon",
        "type1": "Water",
        "type2": null,
        "weight": 70,
        "height": 0.4,
        "pokedexNumber": 456,
        "generation": 4
    },
    {
        "name": "Lumineon",
        "type1": "Water",
        "type2": null,
        "weight": 240,
        "height": 1.2,
        "pokedexNumber": 457,
        "generation": 4
    },
    {
        "name": "Mantyke",
        "type1": "Water",
        "type2": "Flying",
        "weight": 650,
        "height": 1,
        "pokedexNumber": 458,
        "generation": 4
    },
    {
        "name": "Snover",
        "type1": "Grass",
        "type2": "Ice",
        "weight": 505,
        "height": 1,
        "pokedexNumber": 459,
        "generation": 4
    },
    {
        "name": "Abomasnow",
        "type1": "Grass",
        "type2": "Ice",
        "weight": 1355,
        "height": 2.2,
        "pokedexNumber": 460,
        "generation": 4
    },
    {
        "name": "Weavile",
        "type1": "Dark",
        "type2": "Ice",
        "weight": 340,
        "height": 1.1,
        "pokedexNumber": 461,
        "generation": 4
    },
    {
        "name": "Magnezone",
        "type1": "Electric",
        "type2": "Steel",
        "weight": 1800,
        "height": 1.2,
        "pokedexNumber": 462,
        "generation": 4
    },
    {
        "name": "Lickilicky",
        "type1": "Normal",
        "type2": null,
        "weight": 1400,
        "height": 1.7,
        "pokedexNumber": 463,
        "generation": 4
    },
    {
        "name": "Rhyperior",
        "type1": "Ground",
        "type2": "Rock",
        "weight": 2828,
        "height": 2.4,
        "pokedexNumber": 464,
        "generation": 4
    },
    {
        "name": "Tangrowth",
        "type1": "Grass",
        "type2": null,
        "weight": 1286,
        "height": 2,
        "pokedexNumber": 465,
        "generation": 4
    },
    {
        "name": "Electivire",
        "type1": "Electric",
        "type2": null,
        "weight": 1386,
        "height": 1.8,
        "pokedexNumber": 466,
        "generation": 4
    },
    {
        "name": "Magmortar",
        "type1": "Fire",
        "type2": null,
        "weight": 680,
        "height": 1.6,
        "pokedexNumber": 467,
        "generation": 4
    },
    {
        "name": "Togekiss",
        "type1": "Fairy",
        "type2": "Flying",
        "weight": 380,
        "height": 1.5,
        "pokedexNumber": 468,
        "generation": 4
    },
    {
        "name": "Yanmega",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 515,
        "height": 1.9,
        "pokedexNumber": 469,
        "generation": 4
    },
    {
        "name": "Leafeon",
        "type1": "Grass",
        "type2": null,
        "weight": 255,
        "height": 1,
        "pokedexNumber": 470,
        "generation": 4
    },
    {
        "name": "Glaceon",
        "type1": "Ice",
        "type2": null,
        "weight": 259,
        "height": 0.8,
        "pokedexNumber": 471,
        "generation": 4
    },
    {
        "name": "Gliscor",
        "type1": "Ground",
        "type2": "Flying",
        "weight": 425,
        "height": 2,
        "pokedexNumber": 472,
        "generation": 4
    },
    {
        "name": "Mamoswine",
        "type1": "Ice",
        "type2": "Ground",
        "weight": 2910,
        "height": 2.5,
        "pokedexNumber": 473,
        "generation": 4
    },
    {
        "name": "Porygon-z",
        "type1": "Normal",
        "type2": null,
        "weight": 340,
        "height": 0.9,
        "pokedexNumber": 474,
        "generation": 4
    },
    {
        "name": "Gallade",
        "type1": "Psychic",
        "type2": "Fighting",
        "weight": 520,
        "height": 1.6,
        "pokedexNumber": 475,
        "generation": 4
    },
    {
        "name": "Probopass",
        "type1": "Rock",
        "type2": "Steel",
        "weight": 3400,
        "height": 1.4,
        "pokedexNumber": 476,
        "generation": 4
    },
    {
        "name": "Dusknoir",
        "type1": "Ghost",
        "type2": null,
        "weight": 1066,
        "height": 2.2,
        "pokedexNumber": 477,
        "generation": 4
    },
    {
        "name": "Froslass",
        "type1": "Ice",
        "type2": "Ghost",
        "weight": 266,
        "height": 1.3,
        "pokedexNumber": 478,
        "generation": 4
    },
    {
        "name": "Rotom",
        "type1": "Electric",
        "type2": "Ghost",
        "weight": 3,
        "height": 0.3,
        "pokedexNumber": 479,
        "generation": 4
    },
    {
        "name": "Uxie",
        "type1": "Psychic",
        "type2": null,
        "weight": 3,
        "height": 0.3,
        "pokedexNumber": 480,
        "generation": 4
    },
    {
        "name": "Mesprit",
        "type1": "Psychic",
        "type2": null,
        "weight": 3,
        "height": 0.3,
        "pokedexNumber": 481,
        "generation": 4
    },
    {
        "name": "Azelf",
        "type1": "Psychic",
        "type2": null,
        "weight": 3,
        "height": 0.3,
        "pokedexNumber": 482,
        "generation": 4
    },
    {
        "name": "Dialga",
        "type1": "Steel",
        "type2": "Dragon",
        "weight": 6830,
        "height": 5.4,
        "pokedexNumber": 483,
        "generation": 4
    },
    {
        "name": "Palkia",
        "type1": "Water",
        "type2": "Dragon",
        "weight": 3360,
        "height": 4.2,
        "pokedexNumber": 484,
        "generation": 4
    },
    {
        "name": "Heatran",
        "type1": "Fire",
        "type2": "Steel",
        "weight": 4300,
        "height": 1.7,
        "pokedexNumber": 485,
        "generation": 4
    },
    {
        "name": "Regigigas",
        "type1": "Normal",
        "type2": null,
        "weight": 4200,
        "height": 3.7,
        "pokedexNumber": 486,
        "generation": 4
    },
    {
        "name": "Giratina-altered",
        "type1": "Ghost",
        "type2": "Dragon",
        "weight": 7500,
        "height": 4.5,
        "pokedexNumber": 487,
        "generation": 4
    },
    {
        "name": "Cresselia",
        "type1": "Psychic",
        "type2": null,
        "weight": 856,
        "height": 1.5,
        "pokedexNumber": 488,
        "generation": 4
    },
    {
        "name": "Phione",
        "type1": "Water",
        "type2": null,
        "weight": 31,
        "height": 0.4,
        "pokedexNumber": 489,
        "generation": 4
    },
    {
        "name": "Manaphy",
        "type1": "Water",
        "type2": null,
        "weight": 14,
        "height": 0.3,
        "pokedexNumber": 490,
        "generation": 4
    },
    {
        "name": "Darkrai",
        "type1": "Dark",
        "type2": null,
        "weight": 505,
        "height": 1.5,
        "pokedexNumber": 491,
        "generation": 4
    },
    {
        "name": "Shaymin-land",
        "type1": "Grass",
        "type2": null,
        "weight": 21,
        "height": 0.2,
        "pokedexNumber": 492,
        "generation": 4
    },
    {
        "name": "Arceus",
        "type1": "Normal",
        "type2": null,
        "weight": 3200,
        "height": 3.2,
        "pokedexNumber": 493,
        "generation": 4
    },
    {
        "name": "Victini",
        "type1": "Psychic",
        "type2": "Fire",
        "weight": 40,
        "height": 0.4,
        "pokedexNumber": 494,
        "generation": 5
    },
    {
        "name": "Snivy",
        "type1": "Grass",
        "type2": null,
        "weight": 81,
        "height": 0.6,
        "pokedexNumber": 495,
        "generation": 5
    },
    {
        "name": "Servine",
        "type1": "Grass",
        "type2": null,
        "weight": 160,
        "height": 0.8,
        "pokedexNumber": 496,
        "generation": 5
    },
    {
        "name": "Serperior",
        "type1": "Grass",
        "type2": null,
        "weight": 630,
        "height": 3.3,
        "pokedexNumber": 497,
        "generation": 5
    },
    {
        "name": "Tepig",
        "type1": "Fire",
        "type2": null,
        "weight": 99,
        "height": 0.5,
        "pokedexNumber": 498,
        "generation": 5
    },
    {
        "name": "Pignite",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 555,
        "height": 1,
        "pokedexNumber": 499,
        "generation": 5
    },
    {
        "name": "Emboar",
        "type1": "Fire",
        "type2": "Fighting",
        "weight": 1500,
        "height": 1.6,
        "pokedexNumber": 500,
        "generation": 5
    },
    {
        "name": "Oshawott",
        "type1": "Water",
        "type2": null,
        "weight": 59,
        "height": 0.5,
        "pokedexNumber": 501,
        "generation": 5
    },
    {
        "name": "Dewott",
        "type1": "Water",
        "type2": null,
        "weight": 245,
        "height": 0.8,
        "pokedexNumber": 502,
        "generation": 5
    },
    {
        "name": "Samurott",
        "type1": "Water",
        "type2": null,
        "weight": 946,
        "height": 1.5,
        "pokedexNumber": 503,
        "generation": 5
    },
    {
        "name": "Patrat",
        "type1": "Normal",
        "type2": null,
        "weight": 116,
        "height": 0.5,
        "pokedexNumber": 504,
        "generation": 5
    },
    {
        "name": "Watchog",
        "type1": "Normal",
        "type2": null,
        "weight": 270,
        "height": 1.1,
        "pokedexNumber": 505,
        "generation": 5
    },
    {
        "name": "Lillipup",
        "type1": "Normal",
        "type2": null,
        "weight": 41,
        "height": 0.4,
        "pokedexNumber": 506,
        "generation": 5
    },
    {
        "name": "Herdier",
        "type1": "Normal",
        "type2": null,
        "weight": 147,
        "height": 0.9,
        "pokedexNumber": 507,
        "generation": 5
    },
    {
        "name": "Stoutland",
        "type1": "Normal",
        "type2": null,
        "weight": 610,
        "height": 1.2,
        "pokedexNumber": 508,
        "generation": 5
    },
    {
        "name": "Purrloin",
        "type1": "Dark",
        "type2": null,
        "weight": 101,
        "height": 0.4,
        "pokedexNumber": 509,
        "generation": 5
    },
    {
        "name": "Liepard",
        "type1": "Dark",
        "type2": null,
        "weight": 375,
        "height": 1.1,
        "pokedexNumber": 510,
        "generation": 5
    },
    {
        "name": "Pansage",
        "type1": "Grass",
        "type2": null,
        "weight": 105,
        "height": 0.6,
        "pokedexNumber": 511,
        "generation": 5
    },
    {
        "name": "Simisage",
        "type1": "Grass",
        "type2": null,
        "weight": 305,
        "height": 1.1,
        "pokedexNumber": 512,
        "generation": 5
    },
    {
        "name": "Pansear",
        "type1": "Fire",
        "type2": null,
        "weight": 110,
        "height": 0.6,
        "pokedexNumber": 513,
        "generation": 5
    },
    {
        "name": "Simisear",
        "type1": "Fire",
        "type2": null,
        "weight": 280,
        "height": 1,
        "pokedexNumber": 514,
        "generation": 5
    },
    {
        "name": "Panpour",
        "type1": "Water",
        "type2": null,
        "weight": 135,
        "height": 0.6,
        "pokedexNumber": 515,
        "generation": 5
    },
    {
        "name": "Simipour",
        "type1": "Water",
        "type2": null,
        "weight": 290,
        "height": 1,
        "pokedexNumber": 516,
        "generation": 5
    },
    {
        "name": "Munna",
        "type1": "Psychic",
        "type2": null,
        "weight": 233,
        "height": 0.6,
        "pokedexNumber": 517,
        "generation": 5
    },
    {
        "name": "Musharna",
        "type1": "Psychic",
        "type2": null,
        "weight": 605,
        "height": 1.1,
        "pokedexNumber": 518,
        "generation": 5
    },
    {
        "name": "Pidove",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 21,
        "height": 0.3,
        "pokedexNumber": 519,
        "generation": 5
    },
    {
        "name": "Tranquill",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 150,
        "height": 0.6,
        "pokedexNumber": 520,
        "generation": 5
    },
    {
        "name": "Unfezant",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 290,
        "height": 1.2,
        "pokedexNumber": 521,
        "generation": 5
    },
    {
        "name": "Blitzle",
        "type1": "Electric",
        "type2": null,
        "weight": 298,
        "height": 0.8,
        "pokedexNumber": 522,
        "generation": 5
    },
    {
        "name": "Zebstrika",
        "type1": "Electric",
        "type2": null,
        "weight": 795,
        "height": 1.6,
        "pokedexNumber": 523,
        "generation": 5
    },
    {
        "name": "Roggenrola",
        "type1": "Rock",
        "type2": null,
        "weight": 180,
        "height": 0.4,
        "pokedexNumber": 524,
        "generation": 5
    },
    {
        "name": "Boldore",
        "type1": "Rock",
        "type2": null,
        "weight": 1020,
        "height": 0.9,
        "pokedexNumber": 525,
        "generation": 5
    },
    {
        "name": "Gigalith",
        "type1": "Rock",
        "type2": null,
        "weight": 2600,
        "height": 1.7,
        "pokedexNumber": 526,
        "generation": 5
    },
    {
        "name": "Woobat",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 21,
        "height": 0.4,
        "pokedexNumber": 527,
        "generation": 5
    },
    {
        "name": "Swoobat",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 105,
        "height": 0.9,
        "pokedexNumber": 528,
        "generation": 5
    },
    {
        "name": "Drilbur",
        "type1": "Ground",
        "type2": null,
        "weight": 85,
        "height": 0.3,
        "pokedexNumber": 529,
        "generation": 5
    },
    {
        "name": "Excadrill",
        "type1": "Ground",
        "type2": "Steel",
        "weight": 404,
        "height": 0.7,
        "pokedexNumber": 530,
        "generation": 5
    },
    {
        "name": "Audino",
        "type1": "Normal",
        "type2": null,
        "weight": 310,
        "height": 1.1,
        "pokedexNumber": 531,
        "generation": 5
    },
    {
        "name": "Timburr",
        "type1": "Fighting",
        "type2": null,
        "weight": 125,
        "height": 0.6,
        "pokedexNumber": 532,
        "generation": 5
    },
    {
        "name": "Gurdurr",
        "type1": "Fighting",
        "type2": null,
        "weight": 400,
        "height": 1.2,
        "pokedexNumber": 533,
        "generation": 5
    },
    {
        "name": "Conkeldurr",
        "type1": "Fighting",
        "type2": null,
        "weight": 870,
        "height": 1.4,
        "pokedexNumber": 534,
        "generation": 5
    },
    {
        "name": "Tympole",
        "type1": "Water",
        "type2": null,
        "weight": 45,
        "height": 0.5,
        "pokedexNumber": 535,
        "generation": 5
    },
    {
        "name": "Palpitoad",
        "type1": "Water",
        "type2": "Ground",
        "weight": 170,
        "height": 0.8,
        "pokedexNumber": 536,
        "generation": 5
    },
    {
        "name": "Seismitoad",
        "type1": "Water",
        "type2": "Ground",
        "weight": 620,
        "height": 1.5,
        "pokedexNumber": 537,
        "generation": 5
    },
    {
        "name": "Throh",
        "type1": "Fighting",
        "type2": null,
        "weight": 555,
        "height": 1.3,
        "pokedexNumber": 538,
        "generation": 5
    },
    {
        "name": "Sawk",
        "type1": "Fighting",
        "type2": null,
        "weight": 510,
        "height": 1.4,
        "pokedexNumber": 539,
        "generation": 5
    },
    {
        "name": "Sewaddle",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 25,
        "height": 0.3,
        "pokedexNumber": 540,
        "generation": 5
    },
    {
        "name": "Swadloon",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 73,
        "height": 0.5,
        "pokedexNumber": 541,
        "generation": 5
    },
    {
        "name": "Leavanny",
        "type1": "Bug",
        "type2": "Grass",
        "weight": 205,
        "height": 1.2,
        "pokedexNumber": 542,
        "generation": 5
    },
    {
        "name": "Venipede",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 53,
        "height": 0.4,
        "pokedexNumber": 543,
        "generation": 5
    },
    {
        "name": "Whirlipede",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 585,
        "height": 1.2,
        "pokedexNumber": 544,
        "generation": 5
    },
    {
        "name": "Scolipede",
        "type1": "Bug",
        "type2": "Poison",
        "weight": 2005,
        "height": 2.5,
        "pokedexNumber": 545,
        "generation": 5
    },
    {
        "name": "Cottonee",
        "type1": "Grass",
        "type2": "Fairy",
        "weight": 6,
        "height": 0.3,
        "pokedexNumber": 546,
        "generation": 5
    },
    {
        "name": "Whimsicott",
        "type1": "Grass",
        "type2": "Fairy",
        "weight": 66,
        "height": 0.7,
        "pokedexNumber": 547,
        "generation": 5
    },
    {
        "name": "Petilil",
        "type1": "Grass",
        "type2": null,
        "weight": 66,
        "height": 0.5,
        "pokedexNumber": 548,
        "generation": 5
    },
    {
        "name": "Lilligant",
        "type1": "Grass",
        "type2": null,
        "weight": 163,
        "height": 1.1,
        "pokedexNumber": 549,
        "generation": 5
    },
    {
        "name": "Basculin-red-striped",
        "type1": "Water",
        "type2": null,
        "weight": 180,
        "height": 1,
        "pokedexNumber": 550,
        "generation": 5
    },
    {
        "name": "Sandile",
        "type1": "Ground",
        "type2": "Dark",
        "weight": 152,
        "height": 0.7,
        "pokedexNumber": 551,
        "generation": 5
    },
    {
        "name": "Krokorok",
        "type1": "Ground",
        "type2": "Dark",
        "weight": 334,
        "height": 1,
        "pokedexNumber": 552,
        "generation": 5
    },
    {
        "name": "Krookodile",
        "type1": "Ground",
        "type2": "Dark",
        "weight": 963,
        "height": 1.5,
        "pokedexNumber": 553,
        "generation": 5
    },
    {
        "name": "Darumaka",
        "type1": "Fire",
        "type2": null,
        "weight": 375,
        "height": 0.6,
        "pokedexNumber": 554,
        "generation": 5
    },
    {
        "name": "Darmanitan-standard",
        "type1": "Fire",
        "type2": null,
        "weight": 929,
        "height": 1.3,
        "pokedexNumber": 555,
        "generation": 5
    },
    {
        "name": "Maractus",
        "type1": "Grass",
        "type2": null,
        "weight": 280,
        "height": 1,
        "pokedexNumber": 556,
        "generation": 5
    },
    {
        "name": "Dwebble",
        "type1": "Bug",
        "type2": "Rock",
        "weight": 145,
        "height": 0.3,
        "pokedexNumber": 557,
        "generation": 5
    },
    {
        "name": "Crustle",
        "type1": "Bug",
        "type2": "Rock",
        "weight": 2000,
        "height": 1.4,
        "pokedexNumber": 558,
        "generation": 5
    },
    {
        "name": "Scraggy",
        "type1": "Dark",
        "type2": "Fighting",
        "weight": 118,
        "height": 0.6,
        "pokedexNumber": 559,
        "generation": 5
    },
    {
        "name": "Scrafty",
        "type1": "Dark",
        "type2": "Fighting",
        "weight": 300,
        "height": 1.1,
        "pokedexNumber": 560,
        "generation": 5
    },
    {
        "name": "Sigilyph",
        "type1": "Psychic",
        "type2": "Flying",
        "weight": 140,
        "height": 1.4,
        "pokedexNumber": 561,
        "generation": 5
    },
    {
        "name": "Yamask",
        "type1": "Ghost",
        "type2": null,
        "weight": 15,
        "height": 0.5,
        "pokedexNumber": 562,
        "generation": 5
    },
    {
        "name": "Cofagrigus",
        "type1": "Ghost",
        "type2": null,
        "weight": 765,
        "height": 1.7,
        "pokedexNumber": 563,
        "generation": 5
    },
    {
        "name": "Tirtouga",
        "type1": "Water",
        "type2": "Rock",
        "weight": 165,
        "height": 0.7,
        "pokedexNumber": 564,
        "generation": 5
    },
    {
        "name": "Carracosta",
        "type1": "Water",
        "type2": "Rock",
        "weight": 810,
        "height": 1.2,
        "pokedexNumber": 565,
        "generation": 5
    },
    {
        "name": "Archen",
        "type1": "Rock",
        "type2": "Flying",
        "weight": 95,
        "height": 0.5,
        "pokedexNumber": 566,
        "generation": 5
    },
    {
        "name": "Archeops",
        "type1": "Rock",
        "type2": "Flying",
        "weight": 320,
        "height": 1.4,
        "pokedexNumber": 567,
        "generation": 5
    },
    {
        "name": "Trubbish",
        "type1": "Poison",
        "type2": null,
        "weight": 310,
        "height": 0.6,
        "pokedexNumber": 568,
        "generation": 5
    },
    {
        "name": "Garbodor",
        "type1": "Poison",
        "type2": null,
        "weight": 1073,
        "height": 1.9,
        "pokedexNumber": 569,
        "generation": 5
    },
    {
        "name": "Zorua",
        "type1": "Dark",
        "type2": null,
        "weight": 125,
        "height": 0.7,
        "pokedexNumber": 570,
        "generation": 5
    },
    {
        "name": "Zoroark",
        "type1": "Dark",
        "type2": null,
        "weight": 811,
        "height": 1.6,
        "pokedexNumber": 571,
        "generation": 5
    },
    {
        "name": "Minccino",
        "type1": "Normal",
        "type2": null,
        "weight": 58,
        "height": 0.4,
        "pokedexNumber": 572,
        "generation": 5
    },
    {
        "name": "Cinccino",
        "type1": "Normal",
        "type2": null,
        "weight": 75,
        "height": 0.5,
        "pokedexNumber": 573,
        "generation": 5
    },
    {
        "name": "Gothita",
        "type1": "Psychic",
        "type2": null,
        "weight": 58,
        "height": 0.4,
        "pokedexNumber": 574,
        "generation": 5
    },
    {
        "name": "Gothorita",
        "type1": "Psychic",
        "type2": null,
        "weight": 180,
        "height": 0.7,
        "pokedexNumber": 575,
        "generation": 5
    },
    {
        "name": "Gothitelle",
        "type1": "Psychic",
        "type2": null,
        "weight": 440,
        "height": 1.5,
        "pokedexNumber": 576,
        "generation": 5
    },
    {
        "name": "Solosis",
        "type1": "Psychic",
        "type2": null,
        "weight": 10,
        "height": 0.3,
        "pokedexNumber": 577,
        "generation": 5
    },
    {
        "name": "Duosion",
        "type1": "Psychic",
        "type2": null,
        "weight": 80,
        "height": 0.6,
        "pokedexNumber": 578,
        "generation": 5
    },
    {
        "name": "Reuniclus",
        "type1": "Psychic",
        "type2": null,
        "weight": 201,
        "height": 1,
        "pokedexNumber": 579,
        "generation": 5
    },
    {
        "name": "Ducklett",
        "type1": "Water",
        "type2": "Flying",
        "weight": 55,
        "height": 0.5,
        "pokedexNumber": 580,
        "generation": 5
    },
    {
        "name": "Swanna",
        "type1": "Water",
        "type2": "Flying",
        "weight": 242,
        "height": 1.3,
        "pokedexNumber": 581,
        "generation": 5
    },
    {
        "name": "Vanillite",
        "type1": "Ice",
        "type2": null,
        "weight": 57,
        "height": 0.4,
        "pokedexNumber": 582,
        "generation": 5
    },
    {
        "name": "Vanillish",
        "type1": "Ice",
        "type2": null,
        "weight": 410,
        "height": 1.1,
        "pokedexNumber": 583,
        "generation": 5
    },
    {
        "name": "Vanilluxe",
        "type1": "Ice",
        "type2": null,
        "weight": 575,
        "height": 1.3,
        "pokedexNumber": 584,
        "generation": 5
    },
    {
        "name": "Deerling",
        "type1": "Normal",
        "type2": "Grass",
        "weight": 195,
        "height": 0.6,
        "pokedexNumber": 585,
        "generation": 5
    },
    {
        "name": "Sawsbuck",
        "type1": "Normal",
        "type2": "Grass",
        "weight": 925,
        "height": 1.9,
        "pokedexNumber": 586,
        "generation": 5
    },
    {
        "name": "Emolga",
        "type1": "Electric",
        "type2": "Flying",
        "weight": 50,
        "height": 0.4,
        "pokedexNumber": 587,
        "generation": 5
    },
    {
        "name": "Karrablast",
        "type1": "Bug",
        "type2": null,
        "weight": 59,
        "height": 0.5,
        "pokedexNumber": 588,
        "generation": 5
    },
    {
        "name": "Escavalier",
        "type1": "Bug",
        "type2": "Steel",
        "weight": 330,
        "height": 1,
        "pokedexNumber": 589,
        "generation": 5
    },
    {
        "name": "Foongus",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 10,
        "height": 0.2,
        "pokedexNumber": 590,
        "generation": 5
    },
    {
        "name": "Amoonguss",
        "type1": "Grass",
        "type2": "Poison",
        "weight": 105,
        "height": 0.6,
        "pokedexNumber": 591,
        "generation": 5
    },
    {
        "name": "Frillish",
        "type1": "Water",
        "type2": "Ghost",
        "weight": 330,
        "height": 1.2,
        "pokedexNumber": 592,
        "generation": 5
    },
    {
        "name": "Jellicent",
        "type1": "Water",
        "type2": "Ghost",
        "weight": 1350,
        "height": 2.2,
        "pokedexNumber": 593,
        "generation": 5
    },
    {
        "name": "Alomomola",
        "type1": "Water",
        "type2": null,
        "weight": 316,
        "height": 1.2,
        "pokedexNumber": 594,
        "generation": 5
    },
    {
        "name": "Joltik",
        "type1": "Bug",
        "type2": "Electric",
        "weight": 6,
        "height": 0.1,
        "pokedexNumber": 595,
        "generation": 5
    },
    {
        "name": "Galvantula",
        "type1": "Bug",
        "type2": "Electric",
        "weight": 143,
        "height": 0.8,
        "pokedexNumber": 596,
        "generation": 5
    },
    {
        "name": "Ferroseed",
        "type1": "Grass",
        "type2": "Steel",
        "weight": 188,
        "height": 0.6,
        "pokedexNumber": 597,
        "generation": 5
    },
    {
        "name": "Ferrothorn",
        "type1": "Grass",
        "type2": "Steel",
        "weight": 1100,
        "height": 1,
        "pokedexNumber": 598,
        "generation": 5
    },
    {
        "name": "Klink",
        "type1": "Steel",
        "type2": null,
        "weight": 210,
        "height": 0.3,
        "pokedexNumber": 599,
        "generation": 5
    },
    {
        "name": "Klang",
        "type1": "Steel",
        "type2": null,
        "weight": 510,
        "height": 0.6,
        "pokedexNumber": 600,
        "generation": 5
    },
    {
        "name": "Klinklang",
        "type1": "Steel",
        "type2": null,
        "weight": 810,
        "height": 0.6,
        "pokedexNumber": 601,
        "generation": 5
    },
    {
        "name": "Tynamo",
        "type1": "Electric",
        "type2": null,
        "weight": 3,
        "height": 0.2,
        "pokedexNumber": 602,
        "generation": 5
    },
    {
        "name": "Eelektrik",
        "type1": "Electric",
        "type2": null,
        "weight": 220,
        "height": 1.2,
        "pokedexNumber": 603,
        "generation": 5
    },
    {
        "name": "Eelektross",
        "type1": "Electric",
        "type2": null,
        "weight": 805,
        "height": 2.1,
        "pokedexNumber": 604,
        "generation": 5
    },
    {
        "name": "Elgyem",
        "type1": "Psychic",
        "type2": null,
        "weight": 90,
        "height": 0.5,
        "pokedexNumber": 605,
        "generation": 5
    },
    {
        "name": "Beheeyem",
        "type1": "Psychic",
        "type2": null,
        "weight": 345,
        "height": 1,
        "pokedexNumber": 606,
        "generation": 5
    },
    {
        "name": "Litwick",
        "type1": "Ghost",
        "type2": "Fire",
        "weight": 31,
        "height": 0.3,
        "pokedexNumber": 607,
        "generation": 5
    },
    {
        "name": "Lampent",
        "type1": "Ghost",
        "type2": "Fire",
        "weight": 130,
        "height": 0.6,
        "pokedexNumber": 608,
        "generation": 5
    },
    {
        "name": "Chandelure",
        "type1": "Ghost",
        "type2": "Fire",
        "weight": 343,
        "height": 1,
        "pokedexNumber": 609,
        "generation": 5
    },
    {
        "name": "Axew",
        "type1": "Dragon",
        "type2": null,
        "weight": 180,
        "height": 0.6,
        "pokedexNumber": 610,
        "generation": 5
    },
    {
        "name": "Fraxure",
        "type1": "Dragon",
        "type2": null,
        "weight": 360,
        "height": 1,
        "pokedexNumber": 611,
        "generation": 5
    },
    {
        "name": "Haxorus",
        "type1": "Dragon",
        "type2": null,
        "weight": 1055,
        "height": 1.8,
        "pokedexNumber": 612,
        "generation": 5
    },
    {
        "name": "Cubchoo",
        "type1": "Ice",
        "type2": null,
        "weight": 85,
        "height": 0.5,
        "pokedexNumber": 613,
        "generation": 5
    },
    {
        "name": "Beartic",
        "type1": "Ice",
        "type2": null,
        "weight": 2600,
        "height": 2.6,
        "pokedexNumber": 614,
        "generation": 5
    },
    {
        "name": "Cryogonal",
        "type1": "Ice",
        "type2": null,
        "weight": 1480,
        "height": 1.1,
        "pokedexNumber": 615,
        "generation": 5
    },
    {
        "name": "Shelmet",
        "type1": "Bug",
        "type2": null,
        "weight": 77,
        "height": 0.4,
        "pokedexNumber": 616,
        "generation": 5
    },
    {
        "name": "Accelgor",
        "type1": "Bug",
        "type2": null,
        "weight": 253,
        "height": 0.8,
        "pokedexNumber": 617,
        "generation": 5
    },
    {
        "name": "Stunfisk",
        "type1": "Ground",
        "type2": "Electric",
        "weight": 110,
        "height": 0.7,
        "pokedexNumber": 618,
        "generation": 5
    },
    {
        "name": "Mienfoo",
        "type1": "Fighting",
        "type2": null,
        "weight": 200,
        "height": 0.9,
        "pokedexNumber": 619,
        "generation": 5
    },
    {
        "name": "Mienshao",
        "type1": "Fighting",
        "type2": null,
        "weight": 355,
        "height": 1.4,
        "pokedexNumber": 620,
        "generation": 5
    },
    {
        "name": "Druddigon",
        "type1": "Dragon",
        "type2": null,
        "weight": 1390,
        "height": 1.6,
        "pokedexNumber": 621,
        "generation": 5
    },
    {
        "name": "Golett",
        "type1": "Ground",
        "type2": "Ghost",
        "weight": 920,
        "height": 1,
        "pokedexNumber": 622,
        "generation": 5
    },
    {
        "name": "Golurk",
        "type1": "Ground",
        "type2": "Ghost",
        "weight": 3300,
        "height": 2.8,
        "pokedexNumber": 623,
        "generation": 5
    },
    {
        "name": "Pawniard",
        "type1": "Dark",
        "type2": "Steel",
        "weight": 102,
        "height": 0.5,
        "pokedexNumber": 624,
        "generation": 5
    },
    {
        "name": "Bisharp",
        "type1": "Dark",
        "type2": "Steel",
        "weight": 700,
        "height": 1.6,
        "pokedexNumber": 625,
        "generation": 5
    },
    {
        "name": "Bouffalant",
        "type1": "Normal",
        "type2": null,
        "weight": 946,
        "height": 1.6,
        "pokedexNumber": 626,
        "generation": 5
    },
    {
        "name": "Rufflet",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 105,
        "height": 0.5,
        "pokedexNumber": 627,
        "generation": 5
    },
    {
        "name": "Braviary",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 410,
        "height": 1.5,
        "pokedexNumber": 628,
        "generation": 5
    },
    {
        "name": "Vullaby",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 90,
        "height": 0.5,
        "pokedexNumber": 629,
        "generation": 5
    },
    {
        "name": "Mandibuzz",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 395,
        "height": 1.2,
        "pokedexNumber": 630,
        "generation": 5
    },
    {
        "name": "Heatmor",
        "type1": "Fire",
        "type2": null,
        "weight": 580,
        "height": 1.4,
        "pokedexNumber": 631,
        "generation": 5
    },
    {
        "name": "Durant",
        "type1": "Bug",
        "type2": "Steel",
        "weight": 330,
        "height": 0.3,
        "pokedexNumber": 632,
        "generation": 5
    },
    {
        "name": "Deino",
        "type1": "Dark",
        "type2": "Dragon",
        "weight": 173,
        "height": 0.8,
        "pokedexNumber": 633,
        "generation": 5
    },
    {
        "name": "Zweilous",
        "type1": "Dark",
        "type2": "Dragon",
        "weight": 500,
        "height": 1.4,
        "pokedexNumber": 634,
        "generation": 5
    },
    {
        "name": "Hydreigon",
        "type1": "Dark",
        "type2": "Dragon",
        "weight": 1600,
        "height": 1.8,
        "pokedexNumber": 635,
        "generation": 5
    },
    {
        "name": "Larvesta",
        "type1": "Bug",
        "type2": "Fire",
        "weight": 288,
        "height": 1.1,
        "pokedexNumber": 636,
        "generation": 5
    },
    {
        "name": "Volcarona",
        "type1": "Bug",
        "type2": "Fire",
        "weight": 460,
        "height": 1.6,
        "pokedexNumber": 637,
        "generation": 5
    },
    {
        "name": "Cobalion",
        "type1": "Steel",
        "type2": "Fighting",
        "weight": 2500,
        "height": 2.1,
        "pokedexNumber": 638,
        "generation": 5
    },
    {
        "name": "Terrakion",
        "type1": "Rock",
        "type2": "Fighting",
        "weight": 2600,
        "height": 1.9,
        "pokedexNumber": 639,
        "generation": 5
    },
    {
        "name": "Virizion",
        "type1": "Grass",
        "type2": "Fighting",
        "weight": 2000,
        "height": 2,
        "pokedexNumber": 640,
        "generation": 5
    },
    {
        "name": "Tornadus-incarnate",
        "type1": "Flying",
        "type2": null,
        "weight": 630,
        "height": 1.5,
        "pokedexNumber": 641,
        "generation": 5
    },
    {
        "name": "Thundurus-incarnate",
        "type1": "Electric",
        "type2": "Flying",
        "weight": 610,
        "height": 1.5,
        "pokedexNumber": 642,
        "generation": 5
    },
    {
        "name": "Reshiram",
        "type1": "Dragon",
        "type2": "Fire",
        "weight": 3300,
        "height": 3.2,
        "pokedexNumber": 643,
        "generation": 5
    },
    {
        "name": "Zekrom",
        "type1": "Dragon",
        "type2": "Electric",
        "weight": 3450,
        "height": 2.9,
        "pokedexNumber": 644,
        "generation": 5
    },
    {
        "name": "Landorus-incarnate",
        "type1": "Ground",
        "type2": "Flying",
        "weight": 680,
        "height": 1.5,
        "pokedexNumber": 645,
        "generation": 5
    },
    {
        "name": "Kyurem",
        "type1": "Dragon",
        "type2": "Ice",
        "weight": 3250,
        "height": 3,
        "pokedexNumber": 646,
        "generation": 5
    },
    {
        "name": "Keldeo-ordinary",
        "type1": "Water",
        "type2": "Fighting",
        "weight": 485,
        "height": 1.4,
        "pokedexNumber": 647,
        "generation": 5
    },
    {
        "name": "Meloetta-aria",
        "type1": "Normal",
        "type2": "Psychic",
        "weight": 65,
        "height": 0.6,
        "pokedexNumber": 648,
        "generation": 5
    },
    {
        "name": "Genesect",
        "type1": "Bug",
        "type2": "Steel",
        "weight": 825,
        "height": 1.5,
        "pokedexNumber": 649,
        "generation": 5
    },
    {
        "name": "Chespin",
        "type1": "Grass",
        "type2": null,
        "weight": 90,
        "height": 0.4,
        "pokedexNumber": 650,
        "generation": 6
    },
    {
        "name": "Quilladin",
        "type1": "Grass",
        "type2": null,
        "weight": 290,
        "height": 0.7,
        "pokedexNumber": 651,
        "generation": 6
    },
    {
        "name": "Chesnaught",
        "type1": "Grass",
        "type2": "Fighting",
        "weight": 900,
        "height": 1.6,
        "pokedexNumber": 652,
        "generation": 6
    },
    {
        "name": "Fennekin",
        "type1": "Fire",
        "type2": null,
        "weight": 94,
        "height": 0.4,
        "pokedexNumber": 653,
        "generation": 6
    },
    {
        "name": "Braixen",
        "type1": "Fire",
        "type2": null,
        "weight": 145,
        "height": 1,
        "pokedexNumber": 654,
        "generation": 6
    },
    {
        "name": "Delphox",
        "type1": "Fire",
        "type2": "Psychic",
        "weight": 390,
        "height": 1.5,
        "pokedexNumber": 655,
        "generation": 6
    },
    {
        "name": "Froakie",
        "type1": "Water",
        "type2": null,
        "weight": 70,
        "height": 0.3,
        "pokedexNumber": 656,
        "generation": 6
    },
    {
        "name": "Frogadier",
        "type1": "Water",
        "type2": null,
        "weight": 109,
        "height": 0.6,
        "pokedexNumber": 657,
        "generation": 6
    },
    {
        "name": "Greninja",
        "type1": "Water",
        "type2": "Dark",
        "weight": 400,
        "height": 1.5,
        "pokedexNumber": 658,
        "generation": 6
    },
    {
        "name": "Bunnelby",
        "type1": "Normal",
        "type2": null,
        "weight": 50,
        "height": 0.4,
        "pokedexNumber": 659,
        "generation": 6
    },
    {
        "name": "Diggersby",
        "type1": "Normal",
        "type2": "Ground",
        "weight": 424,
        "height": 1,
        "pokedexNumber": 660,
        "generation": 6
    },
    {
        "name": "Fletchling",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 17,
        "height": 0.3,
        "pokedexNumber": 661,
        "generation": 6
    },
    {
        "name": "Fletchinder",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 160,
        "height": 0.7,
        "pokedexNumber": 662,
        "generation": 6
    },
    {
        "name": "Talonflame",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 245,
        "height": 1.2,
        "pokedexNumber": 663,
        "generation": 6
    },
    {
        "name": "Scatterbug",
        "type1": "Bug",
        "type2": null,
        "weight": 25,
        "height": 0.3,
        "pokedexNumber": 664,
        "generation": 6
    },
    {
        "name": "Spewpa",
        "type1": "Bug",
        "type2": null,
        "weight": 84,
        "height": 0.3,
        "pokedexNumber": 665,
        "generation": 6
    },
    {
        "name": "Vivillon",
        "type1": "Bug",
        "type2": "Flying",
        "weight": 170,
        "height": 1.2,
        "pokedexNumber": 666,
        "generation": 6
    },
    {
        "name": "Litleo",
        "type1": "Fire",
        "type2": "Normal",
        "weight": 135,
        "height": 0.6,
        "pokedexNumber": 667,
        "generation": 6
    },
    {
        "name": "Pyroar",
        "type1": "Fire",
        "type2": "Normal",
        "weight": 815,
        "height": 1.5,
        "pokedexNumber": 668,
        "generation": 6
    },
    {
        "name": "Flabebe",
        "type1": "Fairy",
        "type2": null,
        "weight": 1,
        "height": 0.1,
        "pokedexNumber": 669,
        "generation": 6
    },
    {
        "name": "Floette",
        "type1": "Fairy",
        "type2": null,
        "weight": 9,
        "height": 0.2,
        "pokedexNumber": 670,
        "generation": 6
    },
    {
        "name": "Florges",
        "type1": "Fairy",
        "type2": null,
        "weight": 100,
        "height": 1.1,
        "pokedexNumber": 671,
        "generation": 6
    },
    {
        "name": "Skiddo",
        "type1": "Grass",
        "type2": null,
        "weight": 310,
        "height": 0.9,
        "pokedexNumber": 672,
        "generation": 6
    },
    {
        "name": "Gogoat",
        "type1": "Grass",
        "type2": null,
        "weight": 910,
        "height": 1.7,
        "pokedexNumber": 673,
        "generation": 6
    },
    {
        "name": "Pancham",
        "type1": "Fighting",
        "type2": null,
        "weight": 80,
        "height": 0.6,
        "pokedexNumber": 674,
        "generation": 6
    },
    {
        "name": "Pangoro",
        "type1": "Fighting",
        "type2": "Dark",
        "weight": 1360,
        "height": 2.1,
        "pokedexNumber": 675,
        "generation": 6
    },
    {
        "name": "Furfrou",
        "type1": "Normal",
        "type2": null,
        "weight": 280,
        "height": 1.2,
        "pokedexNumber": 676,
        "generation": 6
    },
    {
        "name": "Espurr",
        "type1": "Psychic",
        "type2": null,
        "weight": 35,
        "height": 0.3,
        "pokedexNumber": 677,
        "generation": 6
    },
    {
        "name": "Meowstic-male",
        "type1": "Psychic",
        "type2": null,
        "weight": 85,
        "height": 0.6,
        "pokedexNumber": 678,
        "generation": 6
    },
    {
        "name": "Honedge",
        "type1": "Steel",
        "type2": "Ghost",
        "weight": 20,
        "height": 0.8,
        "pokedexNumber": 679,
        "generation": 6
    },
    {
        "name": "Doublade",
        "type1": "Steel",
        "type2": "Ghost",
        "weight": 45,
        "height": 0.8,
        "pokedexNumber": 680,
        "generation": 6
    },
    {
        "name": "Aegislash-shield",
        "type1": "Steel",
        "type2": "Ghost",
        "weight": 530,
        "height": 1.7,
        "pokedexNumber": 681,
        "generation": 6
    },
    {
        "name": "Spritzee",
        "type1": "Fairy",
        "type2": null,
        "weight": 5,
        "height": 0.2,
        "pokedexNumber": 682,
        "generation": 6
    },
    {
        "name": "Aromatisse",
        "type1": "Fairy",
        "type2": null,
        "weight": 155,
        "height": 0.8,
        "pokedexNumber": 683,
        "generation": 6
    },
    {
        "name": "Swirlix",
        "type1": "Fairy",
        "type2": null,
        "weight": 35,
        "height": 0.4,
        "pokedexNumber": 684,
        "generation": 6
    },
    {
        "name": "Slurpuff",
        "type1": "Fairy",
        "type2": null,
        "weight": 50,
        "height": 0.8,
        "pokedexNumber": 685,
        "generation": 6
    },
    {
        "name": "Inkay",
        "type1": "Dark",
        "type2": "Psychic",
        "weight": 35,
        "height": 0.4,
        "pokedexNumber": 686,
        "generation": 6
    },
    {
        "name": "Malamar",
        "type1": "Dark",
        "type2": "Psychic",
        "weight": 470,
        "height": 1.5,
        "pokedexNumber": 687,
        "generation": 6
    },
    {
        "name": "Binacle",
        "type1": "Rock",
        "type2": "Water",
        "weight": 310,
        "height": 0.5,
        "pokedexNumber": 688,
        "generation": 6
    },
    {
        "name": "Barbaracle",
        "type1": "Rock",
        "type2": "Water",
        "weight": 960,
        "height": 1.3,
        "pokedexNumber": 689,
        "generation": 6
    },
    {
        "name": "Skrelp",
        "type1": "Poison",
        "type2": "Water",
        "weight": 73,
        "height": 0.5,
        "pokedexNumber": 690,
        "generation": 6
    },
    {
        "name": "Dragalge",
        "type1": "Poison",
        "type2": "Dragon",
        "weight": 815,
        "height": 1.8,
        "pokedexNumber": 691,
        "generation": 6
    },
    {
        "name": "Clauncher",
        "type1": "Water",
        "type2": null,
        "weight": 83,
        "height": 0.5,
        "pokedexNumber": 692,
        "generation": 6
    },
    {
        "name": "Clawitzer",
        "type1": "Water",
        "type2": null,
        "weight": 353,
        "height": 1.3,
        "pokedexNumber": 693,
        "generation": 6
    },
    {
        "name": "Helioptile",
        "type1": "Electric",
        "type2": "Normal",
        "weight": 60,
        "height": 0.5,
        "pokedexNumber": 694,
        "generation": 6
    },
    {
        "name": "Heliolisk",
        "type1": "Electric",
        "type2": "Normal",
        "weight": 210,
        "height": 1,
        "pokedexNumber": 695,
        "generation": 6
    },
    {
        "name": "Tyrunt",
        "type1": "Rock",
        "type2": "Dragon",
        "weight": 260,
        "height": 0.8,
        "pokedexNumber": 696,
        "generation": 6
    },
    {
        "name": "Tyrantrum",
        "type1": "Rock",
        "type2": "Dragon",
        "weight": 2700,
        "height": 2.5,
        "pokedexNumber": 697,
        "generation": 6
    },
    {
        "name": "Amaura",
        "type1": "Rock",
        "type2": "Ice",
        "weight": 252,
        "height": 1.3,
        "pokedexNumber": 698,
        "generation": 6
    },
    {
        "name": "Aurorus",
        "type1": "Rock",
        "type2": "Ice",
        "weight": 2250,
        "height": 2.7,
        "pokedexNumber": 699,
        "generation": 6
    },
    {
        "name": "Sylveon",
        "type1": "Fairy",
        "type2": null,
        "weight": 235,
        "height": 1,
        "pokedexNumber": 700,
        "generation": 6
    },
    {
        "name": "Hawlucha",
        "type1": "Fighting",
        "type2": "Flying",
        "weight": 215,
        "height": 0.8,
        "pokedexNumber": 701,
        "generation": 6
    },
    {
        "name": "Dedenne",
        "type1": "Electric",
        "type2": "Fairy",
        "weight": 22,
        "height": 0.2,
        "pokedexNumber": 702,
        "generation": 6
    },
    {
        "name": "Carbink",
        "type1": "Rock",
        "type2": "Fairy",
        "weight": 57,
        "height": 0.3,
        "pokedexNumber": 703,
        "generation": 6
    },
    {
        "name": "Goomy",
        "type1": "Dragon",
        "type2": null,
        "weight": 28,
        "height": 0.3,
        "pokedexNumber": 704,
        "generation": 6
    },
    {
        "name": "Sliggoo",
        "type1": "Dragon",
        "type2": null,
        "weight": 175,
        "height": 0.8,
        "pokedexNumber": 705,
        "generation": 6
    },
    {
        "name": "Goodra",
        "type1": "Dragon",
        "type2": null,
        "weight": 1505,
        "height": 2,
        "pokedexNumber": 706,
        "generation": 6
    },
    {
        "name": "Klefki",
        "type1": "Steel",
        "type2": "Fairy",
        "weight": 30,
        "height": 0.2,
        "pokedexNumber": 707,
        "generation": 6
    },
    {
        "name": "Phantump",
        "type1": "Ghost",
        "type2": "Grass",
        "weight": 70,
        "height": 0.4,
        "pokedexNumber": 708,
        "generation": 6
    },
    {
        "name": "Trevenant",
        "type1": "Ghost",
        "type2": "Grass",
        "weight": 710,
        "height": 1.5,
        "pokedexNumber": 709,
        "generation": 6
    },
    {
        "name": "Pumpkaboo-average",
        "type1": "Ghost",
        "type2": "Grass",
        "weight": 50,
        "height": 0.4,
        "pokedexNumber": 710,
        "generation": 6
    },
    {
        "name": "Gourgeist-average",
        "type1": "Ghost",
        "type2": "Grass",
        "weight": 125,
        "height": 0.9,
        "pokedexNumber": 711,
        "generation": 6
    },
    {
        "name": "Bergmite",
        "type1": "Ice",
        "type2": null,
        "weight": 995,
        "height": 1,
        "pokedexNumber": 712,
        "generation": 6
    },
    {
        "name": "Avalugg",
        "type1": "Ice",
        "type2": null,
        "weight": 5050,
        "height": 2,
        "pokedexNumber": 713,
        "generation": 6
    },
    {
        "name": "Noibat",
        "type1": "Flying",
        "type2": "Dragon",
        "weight": 80,
        "height": 0.5,
        "pokedexNumber": 714,
        "generation": 6
    },
    {
        "name": "Noivern",
        "type1": "Flying",
        "type2": "Dragon",
        "weight": 850,
        "height": 1.5,
        "pokedexNumber": 715,
        "generation": 6
    },
    {
        "name": "Xerneas",
        "type1": "Fairy",
        "type2": null,
        "weight": 2150,
        "height": 3,
        "pokedexNumber": 716,
        "generation": 6
    },
    {
        "name": "Yveltal",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 2030,
        "height": 5.8,
        "pokedexNumber": 717,
        "generation": 6
    },
    {
        "name": "Zygarde-50",
        "type1": "Dragon",
        "type2": "Ground",
        "weight": 3050,
        "height": 5,
        "pokedexNumber": 718,
        "generation": 6
    },
    {
        "name": "Diancie",
        "type1": "Rock",
        "type2": "Fairy",
        "weight": 88,
        "height": 0.7,
        "pokedexNumber": 719,
        "generation": 6
    },
    {
        "name": "Hoopa",
        "type1": "Psychic",
        "type2": "Ghost",
        "weight": 90,
        "height": 0.5,
        "pokedexNumber": 720,
        "generation": 6
    },
    {
        "name": "Volcanion",
        "type1": "Fire",
        "type2": "Water",
        "weight": 1950,
        "height": 1.7,
        "pokedexNumber": 721,
        "generation": 6
    },
    {
        "name": "Rowlet",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 15,
        "height": 0.3,
        "pokedexNumber": 722,
        "generation": 7
    },
    {
        "name": "Dartrix",
        "type1": "Grass",
        "type2": "Flying",
        "weight": 160,
        "height": 0.7,
        "pokedexNumber": 723,
        "generation": 7
    },
    {
        "name": "Decidueye",
        "type1": "Grass",
        "type2": "Ghost",
        "weight": 366,
        "height": 1.6,
        "pokedexNumber": 724,
        "generation": 7
    },
    {
        "name": "Litten",
        "type1": "Fire",
        "type2": null,
        "weight": 43,
        "height": 0.4,
        "pokedexNumber": 725,
        "generation": 7
    },
    {
        "name": "Torracat",
        "type1": "Fire",
        "type2": null,
        "weight": 250,
        "height": 0.7,
        "pokedexNumber": 726,
        "generation": 7
    },
    {
        "name": "Incineroar",
        "type1": "Fire",
        "type2": "Dark",
        "weight": 830,
        "height": 1.8,
        "pokedexNumber": 727,
        "generation": 7
    },
    {
        "name": "Popplio",
        "type1": "Water",
        "type2": null,
        "weight": 75,
        "height": 0.4,
        "pokedexNumber": 728,
        "generation": 7
    },
    {
        "name": "Brionne",
        "type1": "Water",
        "type2": null,
        "weight": 175,
        "height": 0.6,
        "pokedexNumber": 729,
        "generation": 7
    },
    {
        "name": "Primarina",
        "type1": "Water",
        "type2": "Fairy",
        "weight": 440,
        "height": 1.8,
        "pokedexNumber": 730,
        "generation": 7
    },
    {
        "name": "Pikipek",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 12,
        "height": 0.3,
        "pokedexNumber": 731,
        "generation": 7
    },
    {
        "name": "Trumbeak",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 148,
        "height": 0.6,
        "pokedexNumber": 732,
        "generation": 7
    },
    {
        "name": "Toucannon",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 260,
        "height": 1.1,
        "pokedexNumber": 733,
        "generation": 7
    },
    {
        "name": "Yungoos",
        "type1": "Normal",
        "type2": null,
        "weight": 60,
        "height": 0.4,
        "pokedexNumber": 734,
        "generation": 7
    },
    {
        "name": "Gumshoos",
        "type1": "Normal",
        "type2": null,
        "weight": 142,
        "height": 0.7,
        "pokedexNumber": 735,
        "generation": 7
    },
    {
        "name": "Grubbin",
        "type1": "Bug",
        "type2": null,
        "weight": 44,
        "height": 0.4,
        "pokedexNumber": 736,
        "generation": 7
    },
    {
        "name": "Charjabug",
        "type1": "Bug",
        "type2": "Electric",
        "weight": 105,
        "height": 0.5,
        "pokedexNumber": 737,
        "generation": 7
    },
    {
        "name": "Vikavolt",
        "type1": "Bug",
        "type2": "Electric",
        "weight": 450,
        "height": 1.5,
        "pokedexNumber": 738,
        "generation": 7
    },
    {
        "name": "Crabrawler",
        "type1": "Fighting",
        "type2": null,
        "weight": 70,
        "height": 0.6,
        "pokedexNumber": 739,
        "generation": 7
    },
    {
        "name": "Crabominable",
        "type1": "Fighting",
        "type2": "Ice",
        "weight": 1800,
        "height": 1.7,
        "pokedexNumber": 740,
        "generation": 7
    },
    {
        "name": "Oricorio-baile",
        "type1": "Fire",
        "type2": "Flying",
        "weight": 34,
        "height": 0.6,
        "pokedexNumber": 741,
        "generation": 7
    },
    {
        "name": "Cutiefly",
        "type1": "Bug",
        "type2": "Fairy",
        "weight": 2,
        "height": 0.1,
        "pokedexNumber": 742,
        "generation": 7
    },
    {
        "name": "Ribombee",
        "type1": "Bug",
        "type2": "Fairy",
        "weight": 5,
        "height": 0.2,
        "pokedexNumber": 743,
        "generation": 7
    },
    {
        "name": "Rockruff",
        "type1": "Rock",
        "type2": null,
        "weight": 92,
        "height": 0.5,
        "pokedexNumber": 744,
        "generation": 7
    },
    {
        "name": "Lycanroc-midday",
        "type1": "Rock",
        "type2": null,
        "weight": 250,
        "height": 0.8,
        "pokedexNumber": 745,
        "generation": 7
    },
    {
        "name": "Wishiwashi-solo",
        "type1": "Water",
        "type2": null,
        "weight": 3,
        "height": 0.2,
        "pokedexNumber": 746,
        "generation": 7
    },
    {
        "name": "Mareanie",
        "type1": "Poison",
        "type2": "Water",
        "weight": 80,
        "height": 0.4,
        "pokedexNumber": 747,
        "generation": 7
    },
    {
        "name": "Toxapex",
        "type1": "Poison",
        "type2": "Water",
        "weight": 145,
        "height": 0.7,
        "pokedexNumber": 748,
        "generation": 7
    },
    {
        "name": "Mudbray",
        "type1": "Ground",
        "type2": null,
        "weight": 1100,
        "height": 1,
        "pokedexNumber": 749,
        "generation": 7
    },
    {
        "name": "Mudsdale",
        "type1": "Ground",
        "type2": null,
        "weight": 9200,
        "height": 2.5,
        "pokedexNumber": 750,
        "generation": 7
    },
    {
        "name": "Dewpider",
        "type1": "Water",
        "type2": "Bug",
        "weight": 40,
        "height": 0.3,
        "pokedexNumber": 751,
        "generation": 7
    },
    {
        "name": "Araquanid",
        "type1": "Water",
        "type2": "Bug",
        "weight": 820,
        "height": 1.8,
        "pokedexNumber": 752,
        "generation": 7
    },
    {
        "name": "Fomantis",
        "type1": "Grass",
        "type2": null,
        "weight": 15,
        "height": 0.3,
        "pokedexNumber": 753,
        "generation": 7
    },
    {
        "name": "Lurantis",
        "type1": "Grass",
        "type2": null,
        "weight": 185,
        "height": 0.9,
        "pokedexNumber": 754,
        "generation": 7
    },
    {
        "name": "Morelull",
        "type1": "Grass",
        "type2": "Fairy",
        "weight": 15,
        "height": 0.2,
        "pokedexNumber": 755,
        "generation": 7
    },
    {
        "name": "Shiinotic",
        "type1": "Grass",
        "type2": "Fairy",
        "weight": 115,
        "height": 1,
        "pokedexNumber": 756,
        "generation": 7
    },
    {
        "name": "Salandit",
        "type1": "Poison",
        "type2": "Fire",
        "weight": 48,
        "height": 0.6,
        "pokedexNumber": 757,
        "generation": 7
    },
    {
        "name": "Salazzle",
        "type1": "Poison",
        "type2": "Fire",
        "weight": 222,
        "height": 1.2,
        "pokedexNumber": 758,
        "generation": 7
    },
    {
        "name": "Stufful",
        "type1": "Normal",
        "type2": "Fighting",
        "weight": 68,
        "height": 0.5,
        "pokedexNumber": 759,
        "generation": 7
    },
    {
        "name": "Bewear",
        "type1": "Normal",
        "type2": "Fighting",
        "weight": 1350,
        "height": 2.1,
        "pokedexNumber": 760,
        "generation": 7
    },
    {
        "name": "Bounsweet",
        "type1": "Grass",
        "type2": null,
        "weight": 32,
        "height": 0.3,
        "pokedexNumber": 761,
        "generation": 7
    },
    {
        "name": "Steenee",
        "type1": "Grass",
        "type2": null,
        "weight": 82,
        "height": 0.7,
        "pokedexNumber": 762,
        "generation": 7
    },
    {
        "name": "Tsareena",
        "type1": "Grass",
        "type2": null,
        "weight": 214,
        "height": 1.2,
        "pokedexNumber": 763,
        "generation": 7
    },
    {
        "name": "Comfey",
        "type1": "Fairy",
        "type2": null,
        "weight": 3,
        "height": 0.1,
        "pokedexNumber": 764,
        "generation": 7
    },
    {
        "name": "Oranguru",
        "type1": "Normal",
        "type2": "Psychic",
        "weight": 760,
        "height": 1.5,
        "pokedexNumber": 765,
        "generation": 7
    },
    {
        "name": "Passimian",
        "type1": "Fighting",
        "type2": null,
        "weight": 828,
        "height": 2,
        "pokedexNumber": 766,
        "generation": 7
    },
    {
        "name": "Wimpod",
        "type1": "Bug",
        "type2": "Water",
        "weight": 120,
        "height": 0.5,
        "pokedexNumber": 767,
        "generation": 7
    },
    {
        "name": "Golisopod",
        "type1": "Bug",
        "type2": "Water",
        "weight": 1080,
        "height": 2,
        "pokedexNumber": 768,
        "generation": 7
    },
    {
        "name": "Sandygast",
        "type1": "Ghost",
        "type2": "Ground",
        "weight": 700,
        "height": 0.5,
        "pokedexNumber": 769,
        "generation": 7
    },
    {
        "name": "Palossand",
        "type1": "Ghost",
        "type2": "Ground",
        "weight": 2500,
        "height": 1.3,
        "pokedexNumber": 770,
        "generation": 7
    },
    {
        "name": "Pyukumuku",
        "type1": "Water",
        "type2": null,
        "weight": 12,
        "height": 0.3,
        "pokedexNumber": 771,
        "generation": 7
    },
    {
        "name": "Type-null",
        "type1": "Normal",
        "type2": null,
        "weight": 1205,
        "height": 1.9,
        "pokedexNumber": 772,
        "generation": 7
    },
    {
        "name": "Silvally",
        "type1": "Normal",
        "type2": null,
        "weight": 1005,
        "height": 2.3,
        "pokedexNumber": 773,
        "generation": 7
    },
    {
        "name": "Minior-red-meteor",
        "type1": "Rock",
        "type2": "Flying",
        "weight": 400,
        "height": 0.3,
        "pokedexNumber": 774,
        "generation": 7
    },
    {
        "name": "Komala",
        "type1": "Normal",
        "type2": null,
        "weight": 199,
        "height": 0.4,
        "pokedexNumber": 775,
        "generation": 7
    },
    {
        "name": "Turtonator",
        "type1": "Fire",
        "type2": "Dragon",
        "weight": 2120,
        "height": 2,
        "pokedexNumber": 776,
        "generation": 7
    },
    {
        "name": "Togedemaru",
        "type1": "Electric",
        "type2": "Steel",
        "weight": 33,
        "height": 0.3,
        "pokedexNumber": 777,
        "generation": 7
    },
    {
        "name": "Mimikyu-disguised",
        "type1": "Ghost",
        "type2": "Fairy",
        "weight": 7,
        "height": 0.2,
        "pokedexNumber": 778,
        "generation": 7
    },
    {
        "name": "Bruxish",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 190,
        "height": 0.9,
        "pokedexNumber": 779,
        "generation": 7
    },
    {
        "name": "Drampa",
        "type1": "Normal",
        "type2": "Dragon",
        "weight": 1850,
        "height": 3,
        "pokedexNumber": 780,
        "generation": 7
    },
    {
        "name": "Dhelmise",
        "type1": "Ghost",
        "type2": "Grass",
        "weight": 2100,
        "height": 3.9,
        "pokedexNumber": 781,
        "generation": 7
    },
    {
        "name": "Jangmo-o",
        "type1": "Dragon",
        "type2": null,
        "weight": 297,
        "height": 0.6,
        "pokedexNumber": 782,
        "generation": 7
    },
    {
        "name": "Hakamo-o",
        "type1": "Dragon",
        "type2": "Fighting",
        "weight": 470,
        "height": 1.2,
        "pokedexNumber": 783,
        "generation": 7
    },
    {
        "name": "Kommo-o",
        "type1": "Dragon",
        "type2": "Fighting",
        "weight": 782,
        "height": 1.6,
        "pokedexNumber": 784,
        "generation": 7
    },
    {
        "name": "Tapu-koko",
        "type1": "Electric",
        "type2": "Fairy",
        "weight": 205,
        "height": 1.8,
        "pokedexNumber": 785,
        "generation": 7
    },
    {
        "name": "Tapu-lele",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 186,
        "height": 1.2,
        "pokedexNumber": 786,
        "generation": 7
    },
    {
        "name": "Tapu-bulu",
        "type1": "Grass",
        "type2": "Fairy",
        "weight": 455,
        "height": 1.9,
        "pokedexNumber": 787,
        "generation": 7
    },
    {
        "name": "Tapu-fini",
        "type1": "Water",
        "type2": "Fairy",
        "weight": 212,
        "height": 1.3,
        "pokedexNumber": 788,
        "generation": 7
    },
    {
        "name": "Cosmog",
        "type1": "Psychic",
        "type2": null,
        "weight": 1,
        "height": 0.2,
        "pokedexNumber": 789,
        "generation": 7
    },
    {
        "name": "Cosmoem",
        "type1": "Psychic",
        "type2": null,
        "weight": 9999,
        "height": 0.1,
        "pokedexNumber": 790,
        "generation": 7
    },
    {
        "name": "Solgaleo",
        "type1": "Psychic",
        "type2": "Steel",
        "weight": 2300,
        "height": 3.4,
        "pokedexNumber": 791,
        "generation": 7
    },
    {
        "name": "Lunala",
        "type1": "Psychic",
        "type2": "Ghost",
        "weight": 1200,
        "height": 4,
        "pokedexNumber": 792,
        "generation": 7
    },
    {
        "name": "Nihilego",
        "type1": "Rock",
        "type2": "Poison",
        "weight": 555,
        "height": 1.2,
        "pokedexNumber": 793,
        "generation": 7
    },
    {
        "name": "Buzzwole",
        "type1": "Bug",
        "type2": "Fighting",
        "weight": 3336,
        "height": 2.4,
        "pokedexNumber": 794,
        "generation": 7
    },
    {
        "name": "Pheromosa",
        "type1": "Bug",
        "type2": "Fighting",
        "weight": 250,
        "height": 1.8,
        "pokedexNumber": 795,
        "generation": 7
    },
    {
        "name": "Xurkitree",
        "type1": "Electric",
        "type2": null,
        "weight": 1000,
        "height": 3.8,
        "pokedexNumber": 796,
        "generation": 7
    },
    {
        "name": "Celesteela",
        "type1": "Steel",
        "type2": "Flying",
        "weight": 9999,
        "height": 9.2,
        "pokedexNumber": 797,
        "generation": 7
    },
    {
        "name": "Kartana",
        "type1": "Grass",
        "type2": "Steel",
        "weight": 1,
        "height": 0.3,
        "pokedexNumber": 798,
        "generation": 7
    },
    {
        "name": "Guzzlord",
        "type1": "Dark",
        "type2": "Dragon",
        "weight": 8880,
        "height": 5.5,
        "pokedexNumber": 799,
        "generation": 7
    },
    {
        "name": "Necrozma",
        "type1": "Psychic",
        "type2": null,
        "weight": 2300,
        "height": 2.4,
        "pokedexNumber": 800,
        "generation": 7
    },
    {
        "name": "Magearna",
        "type1": "Steel",
        "type2": "Fairy",
        "weight": 805,
        "height": 1,
        "pokedexNumber": 801,
        "generation": 7
    },
    {
        "name": "Marshadow",
        "type1": "Fighting",
        "type2": "Ghost",
        "weight": 222,
        "height": 0.7,
        "pokedexNumber": 802,
        "generation": 7
    },
    {
        "name": "Poipole",
        "type1": "Poison",
        "type2": null,
        "weight": 18,
        "height": 0.6,
        "pokedexNumber": 803,
        "generation": 7
    },
    {
        "name": "Naganadel",
        "type1": "Poison",
        "type2": "Dragon",
        "weight": 1500,
        "height": 3.6,
        "pokedexNumber": 804,
        "generation": 7
    },
    {
        "name": "Stakataka",
        "type1": "Rock",
        "type2": "Steel",
        "weight": 8200,
        "height": 5.5,
        "pokedexNumber": 805,
        "generation": 7
    },
    {
        "name": "Blacephalon",
        "type1": "Fire",
        "type2": "Ghost",
        "weight": 130,
        "height": 1.8,
        "pokedexNumber": 806,
        "generation": 7
    },
    {
        "name": "Zeraora",
        "type1": "Electric",
        "type2": null,
        "weight": 445,
        "height": 1.5,
        "pokedexNumber": 807,
        "generation": 7
    },
    {
        "name": "Meltan",
        "type1": "Steel",
        "type2": null,
        "weight": 80,
        "height": 0.2,
        "pokedexNumber": 808,
        "generation": 7
    },
    {
        "name": "Melmetal",
        "type1": "Steel",
        "type2": null,
        "weight": 8000,
        "height": 2.5,
        "pokedexNumber": 809,
        "generation": 7
    },
    {
        "name": "Grookey",
        "type1": "Grass",
        "type2": null,
        "weight": 50,
        "height": 0.3,
        "pokedexNumber": 810,
        "generation": 8
    },
    {
        "name": "Thwackey",
        "type1": "Grass",
        "type2": null,
        "weight": 140,
        "height": 0.7,
        "pokedexNumber": 811,
        "generation": 8
    },
    {
        "name": "Rillaboom",
        "type1": "Grass",
        "type2": null,
        "weight": 900,
        "height": 2.1,
        "pokedexNumber": 812,
        "generation": 8
    },
    {
        "name": "Scorbunny",
        "type1": "Fire",
        "type2": null,
        "weight": 45,
        "height": 0.3,
        "pokedexNumber": 813,
        "generation": 8
    },
    {
        "name": "Raboot",
        "type1": "Fire",
        "type2": null,
        "weight": 90,
        "height": 0.6,
        "pokedexNumber": 814,
        "generation": 8
    },
    {
        "name": "Cinderace",
        "type1": "Fire",
        "type2": null,
        "weight": 330,
        "height": 1.4,
        "pokedexNumber": 815,
        "generation": 8
    },
    {
        "name": "Sobble",
        "type1": "Water",
        "type2": null,
        "weight": 40,
        "height": 0.3,
        "pokedexNumber": 816,
        "generation": 8
    },
    {
        "name": "Drizzile",
        "type1": "Water",
        "type2": null,
        "weight": 115,
        "height": 0.7,
        "pokedexNumber": 817,
        "generation": 8
    },
    {
        "name": "Inteleon",
        "type1": "Water",
        "type2": null,
        "weight": 452,
        "height": 1.9,
        "pokedexNumber": 818,
        "generation": 8
    },
    {
        "name": "Skwovet",
        "type1": "Normal",
        "type2": null,
        "weight": 25,
        "height": 0.3,
        "pokedexNumber": 819,
        "generation": 8
    },
    {
        "name": "Greedent",
        "type1": "Normal",
        "type2": null,
        "weight": 60,
        "height": 0.6,
        "pokedexNumber": 820,
        "generation": 8
    },
    {
        "name": "Rookidee",
        "type1": "Flying",
        "type2": null,
        "weight": 18,
        "height": 0.2,
        "pokedexNumber": 821,
        "generation": 8
    },
    {
        "name": "Corvisquire",
        "type1": "Flying",
        "type2": null,
        "weight": 160,
        "height": 0.8,
        "pokedexNumber": 822,
        "generation": 8
    },
    {
        "name": "Corviknight",
        "type1": "Flying",
        "type2": "Steel",
        "weight": 750,
        "height": 2.2,
        "pokedexNumber": 823,
        "generation": 8
    },
    {
        "name": "Blipbug",
        "type1": "Bug",
        "type2": null,
        "weight": 80,
        "height": 0.4,
        "pokedexNumber": 824,
        "generation": 8
    },
    {
        "name": "Dottler",
        "type1": "Bug",
        "type2": "Psychic",
        "weight": 195,
        "height": 0.4,
        "pokedexNumber": 825,
        "generation": 8
    },
    {
        "name": "Orbeetle",
        "type1": "Bug",
        "type2": "Psychic",
        "weight": 408,
        "height": 0.4,
        "pokedexNumber": 826,
        "generation": 8
    },
    {
        "name": "Nickit",
        "type1": "Dark",
        "type2": null,
        "weight": 89,
        "height": 0.6,
        "pokedexNumber": 827,
        "generation": 8
    },
    {
        "name": "Thievul",
        "type1": "Dark",
        "type2": null,
        "weight": 199,
        "height": 1.2,
        "pokedexNumber": 828,
        "generation": 8
    },
    {
        "name": "Gossifleur",
        "type1": "Grass",
        "type2": null,
        "weight": 22,
        "height": 0.4,
        "pokedexNumber": 829,
        "generation": 8
    },
    {
        "name": "Eldegoss",
        "type1": "Grass",
        "type2": null,
        "weight": 25,
        "height": 0.5,
        "pokedexNumber": 830,
        "generation": 8
    },
    {
        "name": "Wooloo",
        "type1": "Normal",
        "type2": null,
        "weight": 60,
        "height": 0.6,
        "pokedexNumber": 831,
        "generation": 8
    },
    {
        "name": "Dubwool",
        "type1": "Normal",
        "type2": null,
        "weight": 430,
        "height": 1.3,
        "pokedexNumber": 832,
        "generation": 8
    },
    {
        "name": "Chewtle",
        "type1": "Water",
        "type2": null,
        "weight": 85,
        "height": 0.3,
        "pokedexNumber": 833,
        "generation": 8
    },
    {
        "name": "Drednaw",
        "type1": "Water",
        "type2": "Rock",
        "weight": 1155,
        "height": 1,
        "pokedexNumber": 834,
        "generation": 8
    },
    {
        "name": "Yamper",
        "type1": "Electric",
        "type2": null,
        "weight": 135,
        "height": 0.3,
        "pokedexNumber": 835,
        "generation": 8
    },
    {
        "name": "Boltund",
        "type1": "Electric",
        "type2": null,
        "weight": 340,
        "height": 1,
        "pokedexNumber": 836,
        "generation": 8
    },
    {
        "name": "Rolycoly",
        "type1": "Rock",
        "type2": null,
        "weight": 120,
        "height": 0.3,
        "pokedexNumber": 837,
        "generation": 8
    },
    {
        "name": "Carkol",
        "type1": "Rock",
        "type2": "Fire",
        "weight": 780,
        "height": 1.1,
        "pokedexNumber": 838,
        "generation": 8
    },
    {
        "name": "Coalossal",
        "type1": "Rock",
        "type2": "Fire",
        "weight": 3105,
        "height": 2.8,
        "pokedexNumber": 839,
        "generation": 8
    },
    {
        "name": "Applin",
        "type1": "Grass",
        "type2": "Dragon",
        "weight": 5,
        "height": 0.2,
        "pokedexNumber": 840,
        "generation": 8
    },
    {
        "name": "Flapple",
        "type1": "Grass",
        "type2": "Dragon",
        "weight": 10,
        "height": 0.3,
        "pokedexNumber": 841,
        "generation": 8
    },
    {
        "name": "Appletun",
        "type1": "Grass",
        "type2": "Dragon",
        "weight": 130,
        "height": 0.4,
        "pokedexNumber": 842,
        "generation": 8
    },
    {
        "name": "Silicobra",
        "type1": "Ground",
        "type2": null,
        "weight": 76,
        "height": 2.2,
        "pokedexNumber": 843,
        "generation": 8
    },
    {
        "name": "Sandaconda",
        "type1": "Ground",
        "type2": null,
        "weight": 655,
        "height": 3.8,
        "pokedexNumber": 844,
        "generation": 8
    },
    {
        "name": "Cramorant",
        "type1": "Flying",
        "type2": "Water",
        "weight": 180,
        "height": 0.8,
        "pokedexNumber": 845,
        "generation": 8
    },
    {
        "name": "Arrokuda",
        "type1": "Water",
        "type2": null,
        "weight": 10,
        "height": 0.5,
        "pokedexNumber": 846,
        "generation": 8
    },
    {
        "name": "Barraskewda",
        "type1": "Water",
        "type2": null,
        "weight": 300,
        "height": 1.3,
        "pokedexNumber": 847,
        "generation": 8
    },
    {
        "name": "Toxel",
        "type1": "Electric",
        "type2": "Poison",
        "weight": 110,
        "height": 0.4,
        "pokedexNumber": 848,
        "generation": 8
    },
    {
        "name": "Toxtricity-amped",
        "type1": "Electric",
        "type2": "Poison",
        "weight": 400,
        "height": 1.6,
        "pokedexNumber": 849,
        "generation": 8
    },
    {
        "name": "Sizzlipede",
        "type1": "Fire",
        "type2": "Bug",
        "weight": 10,
        "height": 0.7,
        "pokedexNumber": 850,
        "generation": 8
    },
    {
        "name": "Centiskorch",
        "type1": "Fire",
        "type2": "Bug",
        "weight": 1200,
        "height": 3,
        "pokedexNumber": 851,
        "generation": 8
    },
    {
        "name": "Clobbopus",
        "type1": "Fighting",
        "type2": null,
        "weight": 40,
        "height": 0.6,
        "pokedexNumber": 852,
        "generation": 8
    },
    {
        "name": "Grapploct",
        "type1": "Fighting",
        "type2": null,
        "weight": 390,
        "height": 1.6,
        "pokedexNumber": 853,
        "generation": 8
    },
    {
        "name": "Sinistea",
        "type1": "Ghost",
        "type2": null,
        "weight": 2,
        "height": 0.1,
        "pokedexNumber": 854,
        "generation": 8
    },
    {
        "name": "Polteageist",
        "type1": "Ghost",
        "type2": null,
        "weight": 4,
        "height": 0.2,
        "pokedexNumber": 855,
        "generation": 8
    },
    {
        "name": "Hatenna",
        "type1": "Psychic",
        "type2": null,
        "weight": 34,
        "height": 0.4,
        "pokedexNumber": 856,
        "generation": 8
    },
    {
        "name": "Hattrem",
        "type1": "Psychic",
        "type2": null,
        "weight": 48,
        "height": 0.6,
        "pokedexNumber": 857,
        "generation": 8
    },
    {
        "name": "Hatterene",
        "type1": "Psychic",
        "type2": "Fairy",
        "weight": 51,
        "height": 2.1,
        "pokedexNumber": 858,
        "generation": 8
    },
    {
        "name": "Impidimp",
        "type1": "Dark",
        "type2": "Fairy",
        "weight": 55,
        "height": 0.4,
        "pokedexNumber": 859,
        "generation": 8
    },
    {
        "name": "Morgrem",
        "type1": "Dark",
        "type2": "Fairy",
        "weight": 125,
        "height": 0.8,
        "pokedexNumber": 860,
        "generation": 8
    },
    {
        "name": "Grimmsnarl",
        "type1": "Dark",
        "type2": "Fairy",
        "weight": 610,
        "height": 1.5,
        "pokedexNumber": 861,
        "generation": 8
    },
    {
        "name": "Obstagoon",
        "type1": "Dark",
        "type2": "Normal",
        "weight": 460,
        "height": 1.6,
        "pokedexNumber": 862,
        "generation": 8
    },
    {
        "name": "Perrserker",
        "type1": "Steel",
        "type2": null,
        "weight": 280,
        "height": 0.8,
        "pokedexNumber": 863,
        "generation": 8
    },
    {
        "name": "Cursola",
        "type1": "Ghost",
        "type2": null,
        "weight": 4,
        "height": 1,
        "pokedexNumber": 864,
        "generation": 8
    },
    {
        "name": "Sirfetchd",
        "type1": "Fighting",
        "type2": null,
        "weight": 1170,
        "height": 0.8,
        "pokedexNumber": 865,
        "generation": 8
    },
    {
        "name": "Mr-rime",
        "type1": "Ice",
        "type2": "Psychic",
        "weight": 582,
        "height": 1.5,
        "pokedexNumber": 866,
        "generation": 8
    },
    {
        "name": "Runerigus",
        "type1": "Ground",
        "type2": "Ghost",
        "weight": 666,
        "height": 1.6,
        "pokedexNumber": 867,
        "generation": 8
    },
    {
        "name": "Milcery",
        "type1": "Fairy",
        "type2": null,
        "weight": 3,
        "height": 0.2,
        "pokedexNumber": 868,
        "generation": 8
    },
    {
        "name": "Alcremie",
        "type1": "Fairy",
        "type2": null,
        "weight": 5,
        "height": 0.3,
        "pokedexNumber": 869,
        "generation": 8
    },
    {
        "name": "Falinks",
        "type1": "Fighting",
        "type2": null,
        "weight": 620,
        "height": 3,
        "pokedexNumber": 870,
        "generation": 8
    },
    {
        "name": "Pincurchin",
        "type1": "Electric",
        "type2": null,
        "weight": 10,
        "height": 0.3,
        "pokedexNumber": 871,
        "generation": 8
    },
    {
        "name": "Snom",
        "type1": "Ice",
        "type2": "Bug",
        "weight": 38,
        "height": 0.3,
        "pokedexNumber": 872,
        "generation": 8
    },
    {
        "name": "Frosmoth",
        "type1": "Ice",
        "type2": "Bug",
        "weight": 420,
        "height": 1.3,
        "pokedexNumber": 873,
        "generation": 8
    },
    {
        "name": "Stonjourner",
        "type1": "Rock",
        "type2": null,
        "weight": 5200,
        "height": 2.5,
        "pokedexNumber": 874,
        "generation": 8
    },
    {
        "name": "Eiscue-ice",
        "type1": "Ice",
        "type2": null,
        "weight": 890,
        "height": 1.4,
        "pokedexNumber": 875,
        "generation": 8
    },
    {
        "name": "Indeedee-male",
        "type1": "Psychic",
        "type2": "Normal",
        "weight": 280,
        "height": 0.9,
        "pokedexNumber": 876,
        "generation": 8
    },
    {
        "name": "Morpeko-full-belly",
        "type1": "Electric",
        "type2": "Dark",
        "weight": 30,
        "height": 0.3,
        "pokedexNumber": 877,
        "generation": 8
    },
    {
        "name": "Cufant",
        "type1": "Steel",
        "type2": null,
        "weight": 1000,
        "height": 1.2,
        "pokedexNumber": 878,
        "generation": 8
    },
    {
        "name": "Copperajah",
        "type1": "Steel",
        "type2": null,
        "weight": 6500,
        "height": 3,
        "pokedexNumber": 879,
        "generation": 8
    },
    {
        "name": "Dracozolt",
        "type1": "Electric",
        "type2": "Dragon",
        "weight": 1900,
        "height": 1.8,
        "pokedexNumber": 880,
        "generation": 8
    },
    {
        "name": "Arctozolt",
        "type1": "Electric",
        "type2": "Ice",
        "weight": 1500,
        "height": 2.3,
        "pokedexNumber": 881,
        "generation": 8
    },
    {
        "name": "Dracovish",
        "type1": "Water",
        "type2": "Dragon",
        "weight": 2150,
        "height": 2.3,
        "pokedexNumber": 882,
        "generation": 8
    },
    {
        "name": "Arctovish",
        "type1": "Water",
        "type2": "Ice",
        "weight": 1750,
        "height": 2,
        "pokedexNumber": 883,
        "generation": 8
    },
    {
        "name": "Duraludon",
        "type1": "Steel",
        "type2": "Dragon",
        "weight": 400,
        "height": 1.8,
        "pokedexNumber": 884,
        "generation": 8
    },
    {
        "name": "Dreepy",
        "type1": "Dragon",
        "type2": "Ghost",
        "weight": 20,
        "height": 0.5,
        "pokedexNumber": 885,
        "generation": 8
    },
    {
        "name": "Drakloak",
        "type1": "Dragon",
        "type2": "Ghost",
        "weight": 110,
        "height": 1.4,
        "pokedexNumber": 886,
        "generation": 8
    },
    {
        "name": "Dragapult",
        "type1": "Dragon",
        "type2": "Ghost",
        "weight": 500,
        "height": 3,
        "pokedexNumber": 887,
        "generation": 8
    },
    {
        "name": "Zacian",
        "type1": "Fairy",
        "type2": null,
        "weight": 1100,
        "height": 2.8,
        "pokedexNumber": 888,
        "generation": 8
    },
    {
        "name": "Zamazenta",
        "type1": "Fighting",
        "type2": null,
        "weight": 2100,
        "height": 2.9,
        "pokedexNumber": 889,
        "generation": 8
    },
    {
        "name": "Eternatus",
        "type1": "Poison",
        "type2": "Dragon",
        "weight": 9500,
        "height": 20,
        "pokedexNumber": 890,
        "generation": 8
    },
    {
        "name": "Kubfu",
        "type1": "Fighting",
        "type2": null,
        "weight": 120,
        "height": 0.6,
        "pokedexNumber": 891,
        "generation": 8
    },
    {
        "name": "Urshifu-single-strike",
        "type1": "Fighting",
        "type2": "Dark",
        "weight": 1050,
        "height": 1.9,
        "pokedexNumber": 892,
        "generation": 8
    },
    {
        "name": "Zarude",
        "type1": "Dark",
        "type2": "Grass",
        "weight": 700,
        "height": 1.8,
        "pokedexNumber": 893,
        "generation": 8
    },
    {
        "name": "Regieleki",
        "type1": "Electric",
        "type2": null,
        "weight": 1450,
        "height": 1.2,
        "pokedexNumber": 894,
        "generation": 8
    },
    {
        "name": "Regidrago",
        "type1": "Dragon",
        "type2": null,
        "weight": 2000,
        "height": 2.1,
        "pokedexNumber": 895,
        "generation": 8
    },
    {
        "name": "Glastrier",
        "type1": "Ice",
        "type2": null,
        "weight": 8000,
        "height": 2.2,
        "pokedexNumber": 896,
        "generation": 8
    },
    {
        "name": "Spectrier",
        "type1": "Ghost",
        "type2": null,
        "weight": 445,
        "height": 2,
        "pokedexNumber": 897,
        "generation": 8
    },
    {
        "name": "Calyrex",
        "type1": "Psychic",
        "type2": "Grass",
        "weight": 77,
        "height": 1.1,
        "pokedexNumber": 898,
        "generation": 8
    },
    {
        "name": "Wyrdeer",
        "type1": "Normal",
        "type2": "Psychic",
        "weight": 951,
        "height": 1.8,
        "pokedexNumber": 899,
        "generation": 8
    },
    {
        "name": "Kleavor",
        "type1": "Bug",
        "type2": "Rock",
        "weight": 890,
        "height": 1.8,
        "pokedexNumber": 900,
        "generation": 8
    },
    {
        "name": "Ursaluna",
        "type1": "Ground",
        "type2": "Normal",
        "weight": 2900,
        "height": 2.4,
        "pokedexNumber": 901,
        "generation": 8
    },
    {
        "name": "Basculegion-male",
        "type1": "Water",
        "type2": "Ghost",
        "weight": 1100,
        "height": 3,
        "pokedexNumber": 902,
        "generation": 8
    },
    {
        "name": "Sneasler",
        "type1": "Fighting",
        "type2": "Poison",
        "weight": 430,
        "height": 1.3,
        "pokedexNumber": 903,
        "generation": 8
    },
    {
        "name": "Overqwil",
        "type1": "Dark",
        "type2": "Poison",
        "weight": 605,
        "height": 2.5,
        "pokedexNumber": 904,
        "generation": 8
    },
    {
        "name": "Enamorus-incarnate",
        "type1": "Fairy",
        "type2": "Flying",
        "weight": 480,
        "height": 1.6,
        "pokedexNumber": 905,
        "generation": 8
    },
    {
        "name": "Sprigatito",
        "type1": "Grass",
        "type2": null,
        "weight": 41,
        "height": 0.4,
        "pokedexNumber": 906,
        "generation": 9
    },
    {
        "name": "Floragato",
        "type1": "Grass",
        "type2": null,
        "weight": 122,
        "height": 0.9,
        "pokedexNumber": 907,
        "generation": 9
    },
    {
        "name": "Meowscarada",
        "type1": "Grass",
        "type2": "Dark",
        "weight": 312,
        "height": 1.5,
        "pokedexNumber": 908,
        "generation": 9
    },
    {
        "name": "Fuecoco",
        "type1": "Fire",
        "type2": null,
        "weight": 98,
        "height": 0.4,
        "pokedexNumber": 909,
        "generation": 9
    },
    {
        "name": "Crocalor",
        "type1": "Fire",
        "type2": null,
        "weight": 307,
        "height": 1,
        "pokedexNumber": 910,
        "generation": 9
    },
    {
        "name": "Skeledirge",
        "type1": "Fire",
        "type2": "Ghost",
        "weight": 3265,
        "height": 1.6,
        "pokedexNumber": 911,
        "generation": 9
    },
    {
        "name": "Quaxly",
        "type1": "Water",
        "type2": null,
        "weight": 61,
        "height": 0.5,
        "pokedexNumber": 912,
        "generation": 9
    },
    {
        "name": "Quaxwell",
        "type1": "Water",
        "type2": null,
        "weight": 215,
        "height": 1.2,
        "pokedexNumber": 913,
        "generation": 9
    },
    {
        "name": "Quaquaval",
        "type1": "Water",
        "type2": "Fighting",
        "weight": 619,
        "height": 1.8,
        "pokedexNumber": 914,
        "generation": 9
    },
    {
        "name": "Lechonk",
        "type1": "Normal",
        "type2": null,
        "weight": 102,
        "height": 0.5,
        "pokedexNumber": 915,
        "generation": 9
    },
    {
        "name": "Oinkologne",
        "type1": "Normal",
        "type2": null,
        "weight": 1200,
        "height": 1,
        "pokedexNumber": 916,
        "generation": 9
    },
    {
        "name": "Tarountula",
        "type1": "Bug",
        "type2": null,
        "weight": 40,
        "height": 0.3,
        "pokedexNumber": 917,
        "generation": 9
    },
    {
        "name": "Spidops",
        "type1": "Bug",
        "type2": null,
        "weight": 165,
        "height": 1,
        "pokedexNumber": 918,
        "generation": 9
    },
    {
        "name": "Nymble",
        "type1": "Bug",
        "type2": null,
        "weight": 10,
        "height": 0.2,
        "pokedexNumber": 919,
        "generation": 9
    },
    {
        "name": "Lokix",
        "type1": "Bug",
        "type2": "Dark",
        "weight": 175,
        "height": 1,
        "pokedexNumber": 920,
        "generation": 9
    },
    {
        "name": "Pawmi",
        "type1": "Electric",
        "type2": null,
        "weight": 25,
        "height": 0.3,
        "pokedexNumber": 921,
        "generation": 9
    },
    {
        "name": "Pawmo",
        "type1": "Electric",
        "type2": "Fighting",
        "weight": 65,
        "height": 0.4,
        "pokedexNumber": 922,
        "generation": 9
    },
    {
        "name": "Pawmot",
        "type1": "Electric",
        "type2": "Fighting",
        "weight": 410,
        "height": 0.9,
        "pokedexNumber": 923,
        "generation": 9
    },
    {
        "name": "Tandemaus",
        "type1": "Normal",
        "type2": null,
        "weight": 18,
        "height": 0.3,
        "pokedexNumber": 924,
        "generation": 9
    },
    {
        "name": "Maushold",
        "type1": "Normal",
        "type2": null,
        "weight": 23,
        "height": 0.3,
        "pokedexNumber": 925,
        "generation": 9
    },
    {
        "name": "Fidough",
        "type1": "Fairy",
        "type2": null,
        "weight": 109,
        "height": 0.3,
        "pokedexNumber": 926,
        "generation": 9
    },
    {
        "name": "Dachsbun",
        "type1": "Fairy",
        "type2": null,
        "weight": 149,
        "height": 0.5,
        "pokedexNumber": 927,
        "generation": 9
    },
    {
        "name": "Smoliv",
        "type1": "Grass",
        "type2": "Normal",
        "weight": 65,
        "height": 0.3,
        "pokedexNumber": 928,
        "generation": 9
    },
    {
        "name": "Dolliv",
        "type1": "Grass",
        "type2": "Normal",
        "weight": 119,
        "height": 0.6,
        "pokedexNumber": 929,
        "generation": 9
    },
    {
        "name": "Arboliva",
        "type1": "Grass",
        "type2": "Normal",
        "weight": 482,
        "height": 1.4,
        "pokedexNumber": 930,
        "generation": 9
    },
    {
        "name": "Squawkabilly",
        "type1": "Normal",
        "type2": "Flying",
        "weight": 24,
        "height": 0.6,
        "pokedexNumber": 931,
        "generation": 9
    },
    {
        "name": "Nacli",
        "type1": "Rock",
        "type2": null,
        "weight": 160,
        "height": 0.4,
        "pokedexNumber": 932,
        "generation": 9
    },
    {
        "name": "Naclstack",
        "type1": "Rock",
        "type2": null,
        "weight": 1050,
        "height": 0.6,
        "pokedexNumber": 933,
        "generation": 9
    },
    {
        "name": "Garganacl",
        "type1": "Rock",
        "type2": null,
        "weight": 2400,
        "height": 2.3,
        "pokedexNumber": 934,
        "generation": 9
    },
    {
        "name": "Charcadet",
        "type1": "Fire",
        "type2": null,
        "weight": 105,
        "height": 0.6,
        "pokedexNumber": 935,
        "generation": 9
    },
    {
        "name": "Armarouge",
        "type1": "Fire",
        "type2": "Psychic",
        "weight": 850,
        "height": 1.5,
        "pokedexNumber": 936,
        "generation": 9
    },
    {
        "name": "Ceruledge",
        "type1": "Fire",
        "type2": "Ghost",
        "weight": 620,
        "height": 1.6,
        "pokedexNumber": 937,
        "generation": 9
    },
    {
        "name": "Tadbulb",
        "type1": "Electric",
        "type2": null,
        "weight": 4,
        "height": 0.3,
        "pokedexNumber": 938,
        "generation": 9
    },
    {
        "name": "Bellibolt",
        "type1": "Electric",
        "type2": null,
        "weight": 1130,
        "height": 1.2,
        "pokedexNumber": 939,
        "generation": 9
    },
    {
        "name": "Wattrel",
        "type1": "Electric",
        "type2": "Flying",
        "weight": 36,
        "height": 0.4,
        "pokedexNumber": 940,
        "generation": 9
    },
    {
        "name": "Kilowattrel",
        "type1": "Electric",
        "type2": "Flying",
        "weight": 386,
        "height": 1.4,
        "pokedexNumber": 941,
        "generation": 9
    },
    {
        "name": "Maschiff",
        "type1": "Dark",
        "type2": null,
        "weight": 160,
        "height": 0.5,
        "pokedexNumber": 942,
        "generation": 9
    },
    {
        "name": "Mabosstiff",
        "type1": "Dark",
        "type2": null,
        "weight": 610,
        "height": 1.1,
        "pokedexNumber": 943,
        "generation": 9
    },
    {
        "name": "Shroodle",
        "type1": "Poison",
        "type2": "Normal",
        "weight": 7,
        "height": 0.2,
        "pokedexNumber": 944,
        "generation": 9
    },
    {
        "name": "Grafaiai",
        "type1": "Poison",
        "type2": "Normal",
        "weight": 272,
        "height": 0.7,
        "pokedexNumber": 945,
        "generation": 9
    },
    {
        "name": "Bramblin",
        "type1": "Grass",
        "type2": "Ghost",
        "weight": 6,
        "height": 0.6,
        "pokedexNumber": 946,
        "generation": 9
    },
    {
        "name": "Brambleghast",
        "type1": "Grass",
        "type2": "Ghost",
        "weight": 60,
        "height": 1.2,
        "pokedexNumber": 947,
        "generation": 9
    },
    {
        "name": "Toedscool",
        "type1": "Ground",
        "type2": "Grass",
        "weight": 330,
        "height": 0.9,
        "pokedexNumber": 948,
        "generation": 9
    },
    {
        "name": "Toedscruel",
        "type1": "Ground",
        "type2": "Grass",
        "weight": 580,
        "height": 1.9,
        "pokedexNumber": 949,
        "generation": 9
    },
    {
        "name": "Klawf",
        "type1": "Rock",
        "type2": null,
        "weight": 790,
        "height": 1.3,
        "pokedexNumber": 950,
        "generation": 9
    },
    {
        "name": "Capsakid",
        "type1": "Grass",
        "type2": null,
        "weight": 30,
        "height": 0.3,
        "pokedexNumber": 951,
        "generation": 9
    },
    {
        "name": "Scovillain",
        "type1": "Grass",
        "type2": "Fire",
        "weight": 150,
        "height": 0.9,
        "pokedexNumber": 952,
        "generation": 9
    },
    {
        "name": "Rellor",
        "type1": "Bug",
        "type2": null,
        "weight": 10,
        "height": 0.2,
        "pokedexNumber": 953,
        "generation": 9
    },
    {
        "name": "Rabsca",
        "type1": "Bug",
        "type2": "Psychic",
        "weight": 35,
        "height": 0.3,
        "pokedexNumber": 954,
        "generation": 9
    },
    {
        "name": "Flittle",
        "type1": "Psychic",
        "type2": null,
        "weight": 15,
        "height": 0.2,
        "pokedexNumber": 955,
        "generation": 9
    },
    {
        "name": "Espathra",
        "type1": "Psychic",
        "type2": null,
        "weight": 900,
        "height": 1.9,
        "pokedexNumber": 956,
        "generation": 9
    },
    {
        "name": "Tinkatink",
        "type1": "Fairy",
        "type2": "Steel",
        "weight": 89,
        "height": 0.4,
        "pokedexNumber": 957,
        "generation": 9
    },
    {
        "name": "Tinkatuff",
        "type1": "Fairy",
        "type2": "Steel",
        "weight": 591,
        "height": 0.7,
        "pokedexNumber": 958,
        "generation": 9
    },
    {
        "name": "Tinkaton",
        "type1": "Fairy",
        "type2": "Steel",
        "weight": 1128,
        "height": 0.7,
        "pokedexNumber": 959,
        "generation": 9
    },
    {
        "name": "Wiglett",
        "type1": "Water",
        "type2": null,
        "weight": 18,
        "height": 1.2,
        "pokedexNumber": 960,
        "generation": 9
    },
    {
        "name": "Wugtrio",
        "type1": "Water",
        "type2": null,
        "weight": 54,
        "height": 1.2,
        "pokedexNumber": 961,
        "generation": 9
    },
    {
        "name": "Bombirdier",
        "type1": "Flying",
        "type2": "Dark",
        "weight": 429,
        "height": 1.5,
        "pokedexNumber": 962,
        "generation": 9
    },
    {
        "name": "Finizen",
        "type1": "Water",
        "type2": null,
        "weight": 602,
        "height": 1.3,
        "pokedexNumber": 963,
        "generation": 9
    },
    {
        "name": "Palafin",
        "type1": "Water",
        "type2": null,
        "weight": 602,
        "height": 1.3,
        "pokedexNumber": 964,
        "generation": 9
    },
    {
        "name": "Varoom",
        "type1": "Steel",
        "type2": "Poison",
        "weight": 350,
        "height": 1,
        "pokedexNumber": 965,
        "generation": 9
    },
    {
        "name": "Revavroom",
        "type1": "Steel",
        "type2": "Poison",
        "weight": 1200,
        "height": 1.8,
        "pokedexNumber": 966,
        "generation": 9
    },
    {
        "name": "Cyclizar",
        "type1": "Dragon",
        "type2": "Normal",
        "weight": 630,
        "height": 1.6,
        "pokedexNumber": 967,
        "generation": 9
    },
    {
        "name": "Orthworm",
        "type1": "Steel",
        "type2": null,
        "weight": 3100,
        "height": 2.5,
        "pokedexNumber": 968,
        "generation": 9
    },
    {
        "name": "Glimmet",
        "type1": "Rock",
        "type2": "Poison",
        "weight": 80,
        "height": 0.7,
        "pokedexNumber": 969,
        "generation": 9
    },
    {
        "name": "Glimmora",
        "type1": "Rock",
        "type2": "Poison",
        "weight": 450,
        "height": 1.5,
        "pokedexNumber": 970,
        "generation": 9
    },
    {
        "name": "Greavard",
        "type1": "Ghost",
        "type2": null,
        "weight": 350,
        "height": 0.6,
        "pokedexNumber": 971,
        "generation": 9
    },
    {
        "name": "Houndstone",
        "type1": "Ghost",
        "type2": null,
        "weight": 150,
        "height": 2,
        "pokedexNumber": 972,
        "generation": 9
    },
    {
        "name": "Flamigo",
        "type1": "Flying",
        "type2": "Fighting",
        "weight": 370,
        "height": 1.6,
        "pokedexNumber": 973,
        "generation": 9
    },
    {
        "name": "Cetoddle",
        "type1": "Ice",
        "type2": null,
        "weight": 450,
        "height": 1.2,
        "pokedexNumber": 974,
        "generation": 9
    },
    {
        "name": "Cetitan",
        "type1": "Ice",
        "type2": null,
        "weight": 7000,
        "height": 4.5,
        "pokedexNumber": 975,
        "generation": 9
    },
    {
        "name": "Veluza",
        "type1": "Water",
        "type2": "Psychic",
        "weight": 900,
        "height": 2.5,
        "pokedexNumber": 976,
        "generation": 9
    },
    {
        "name": "Dondozo",
        "type1": "Water",
        "type2": null,
        "weight": 2200,
        "height": 12,
        "pokedexNumber": 977,
        "generation": 9
    },
    {
        "name": "Tatsugiri",
        "type1": "Dragon",
        "type2": "Water",
        "weight": 80,
        "height": 0.3,
        "pokedexNumber": 978,
        "generation": 9
    },
    {
        "name": "Annihilape",
        "type1": "Fighting",
        "type2": "Ghost",
        "weight": 560,
        "height": 1.2,
        "pokedexNumber": 979,
        "generation": 9
    },
    {
        "name": "Clodsire",
        "type1": "Poison",
        "type2": "Ground",
        "weight": 2230,
        "height": 1.8,
        "pokedexNumber": 980,
        "generation": 9
    },
    {
        "name": "Farigiraf",
        "type1": "Normal",
        "type2": "Psychic",
        "weight": 1600,
        "height": 3.2,
        "pokedexNumber": 981,
        "generation": 9
    },
    {
        "name": "Dudunsparce",
        "type1": "Normal",
        "type2": null,
        "weight": 392,
        "height": 3.6,
        "pokedexNumber": 982,
        "generation": 9
    },
    {
        "name": "Kingambit",
        "type1": "Dark",
        "type2": "Steel",
        "weight": 1200,
        "height": 2,
        "pokedexNumber": 983,
        "generation": 9
    },
    {
        "name": "Great-tusk",
        "type1": "Ground",
        "type2": "Fighting",
        "weight": 3200,
        "height": 2.2,
        "pokedexNumber": 984,
        "generation": 9
    },
    {
        "name": "Scream-tail",
        "type1": "Fairy",
        "type2": "Psychic",
        "weight": 80,
        "height": 1.2,
        "pokedexNumber": 985,
        "generation": 9
    },
    {
        "name": "Brute-bonnet",
        "type1": "Grass",
        "type2": "Dark",
        "weight": 210,
        "height": 1.2,
        "pokedexNumber": 986,
        "generation": 9
    },
    {
        "name": "Flutter-mane",
        "type1": "Ghost",
        "type2": "Fairy",
        "weight": 40,
        "height": 1.4,
        "pokedexNumber": 987,
        "generation": 9
    },
    {
        "name": "Slither-wing",
        "type1": "Bug",
        "type2": "Fighting",
        "weight": 920,
        "height": 3.2,
        "pokedexNumber": 988,
        "generation": 9
    },
    {
        "name": "Sandy-shocks",
        "type1": "Electric",
        "type2": "Ground",
        "weight": 600,
        "height": 2.3,
        "pokedexNumber": 989,
        "generation": 9
    },
    {
        "name": "Iron-treads",
        "type1": "Ground",
        "type2": "Steel",
        "weight": 2400,
        "height": 0.9,
        "pokedexNumber": 990,
        "generation": 9
    },
    {
        "name": "Iron-bundle",
        "type1": "Ice",
        "type2": "Water",
        "weight": 110,
        "height": 0.6,
        "pokedexNumber": 991,
        "generation": 9
    },
    {
        "name": "Iron-hands",
        "type1": "Fighting",
        "type2": "Electric",
        "weight": 3807,
        "height": 1.8,
        "pokedexNumber": 992,
        "generation": 9
    },
    {
        "name": "Iron-jugulis",
        "type1": "Dark",
        "type2": "Flying",
        "weight": 1110,
        "height": 1.3,
        "pokedexNumber": 993,
        "generation": 9
    },
    {
        "name": "Iron-moth",
        "type1": "Fire",
        "type2": "Poison",
        "weight": 360,
        "height": 1.2,
        "pokedexNumber": 994,
        "generation": 9
    },
    {
        "name": "Iron-thorns",
        "type1": "Rock",
        "type2": "Electric",
        "weight": 3030,
        "height": 1.6,
        "pokedexNumber": 995,
        "generation": 9
    },
    {
        "name": "Frigibax",
        "type1": "Dragon",
        "type2": "Ice",
        "weight": 170,
        "height": 0.5,
        "pokedexNumber": 996,
        "generation": 9
    },
    {
        "name": "Arctibax",
        "type1": "Dragon",
        "type2": "Ice",
        "weight": 300,
        "height": 0.8,
        "pokedexNumber": 997,
        "generation": 9
    },
    {
        "name": "Baxcalibur",
        "type1": "Dragon",
        "type2": "Ice",
        "weight": 2100,
        "height": 2.1,
        "pokedexNumber": 998,
        "generation": 9
    },
    {
        "name": "Gimmighoul",
        "type1": "Ghost",
        "type2": null,
        "weight": 50,
        "height": 0.3,
        "pokedexNumber": 999,
        "generation": 9
    },
    {
        "name": "Gholdengo",
        "type1": "Steel",
        "type2": "Ghost",
        "weight": 300,
        "height": 1.2,
        "pokedexNumber": 1000,
        "generation": 9
    },
    {
        "name": "Wo-chien",
        "type1": "Dark",
        "type2": "Grass",
        "weight": 742,
        "height": 1.5,
        "pokedexNumber": 1001,
        "generation": 9
    },
    {
        "name": "Chien-pao",
        "type1": "Dark",
        "type2": "Ice",
        "weight": 1522,
        "height": 1.9,
        "pokedexNumber": 1002,
        "generation": 9
    },
    {
        "name": "Ting-lu",
        "type1": "Dark",
        "type2": "Ground",
        "weight": 6997,
        "height": 2.7,
        "pokedexNumber": 1003,
        "generation": 9
    },
    {
        "name": "Chi-yu",
        "type1": "Dark",
        "type2": "Fire",
        "weight": 49,
        "height": 0.4,
        "pokedexNumber": 1004,
        "generation": 9
    },
    {
        "name": "Roaring-moon",
        "type1": "Dragon",
        "type2": "Dark",
        "weight": 3800,
        "height": 2,
        "pokedexNumber": 1005,
        "generation": 9
    },
    {
        "name": "Iron-valiant",
        "type1": "Fairy",
        "type2": "Fighting",
        "weight": 350,
        "height": 1.4,
        "pokedexNumber": 1006,
        "generation": 9
    },
    {
        "name": "Koraidon",
        "type1": "Fighting",
        "type2": "Dragon",
        "weight": 3030,
        "height": 2.5,
        "pokedexNumber": 1007,
        "generation": 9
    },
    {
        "name": "Miraidon",
        "type1": "Electric",
        "type2": "Dragon",
        "weight": 2400,
        "height": 3.5,
        "pokedexNumber": 1008,
        "generation": 9
    },
    {
        "name": "Walking-wake",
        "type1": "Water",
        "type2": "Dragon",
        "weight": 2800,
        "height": 3.5,
        "pokedexNumber": 1009,
        "generation": 9
    },
    {
        "name": "Iron-leaves",
        "type1": "Grass",
        "type2": "Psychic",
        "weight": 1250,
        "height": 1.5,
        "pokedexNumber": 1010,
        "generation": 9
    },
    {
        "name": "Dipplin",
        "type1": "Grass",
        "type2": "Dragon",
        "weight": 97,
        "height": 0.4,
        "pokedexNumber": 1011,
        "generation": 9
    },
    {
        "name": "Poltchageist",
        "type1": "Grass",
        "type2": "Ghost",
        "weight": 11,
        "height": 0.1,
        "pokedexNumber": 1012,
        "generation": 9
    },
    {
        "name": "Sinistcha",
        "type1": "Grass",
        "type2": "Ghost",
        "weight": 22,
        "height": 0.2,
        "pokedexNumber": 1013,
        "generation": 9
    },
    {
        "name": "Okidogi",
        "type1": "Poison",
        "type2": "Fighting",
        "weight": 922,
        "height": 1.8,
        "pokedexNumber": 1014,
        "generation": 9
    },
    {
        "name": "Munkidori",
        "type1": "Poison",
        "type2": "Psychic",
        "weight": 122,
        "height": 1,
        "pokedexNumber": 1015,
        "generation": 9
    },
    {
        "name": "Fezandipiti",
        "type1": "Poison",
        "type2": "Fairy",
        "weight": 301,
        "height": 1.4,
        "pokedexNumber": 1016,
        "generation": 9
    },
    {
        "name": "Ogerpon",
        "type1": "Grass",
        "type2": null,
        "weight": 398,
        "height": 1.2,
        "pokedexNumber": 1017,
        "generation": 9
    },
    {
        "name": "Archaludon",
        "type1": "Steel",
        "type2": "Dragon",
        "weight": 600,
        "height": 2,
        "pokedexNumber": 1018,
        "generation": 9
    },
    {
        "name": "Hydrapple",
        "type1": "Grass",
        "type2": "Dragon",
        "weight": 930,
        "height": 1.8,
        "pokedexNumber": 1019,
        "generation": 9
    },
    {
        "name": "Gouging-fire",
        "type1": "Fire",
        "type2": "Dragon",
        "weight": 5900,
        "height": 3.5,
        "pokedexNumber": 1020,
        "generation": 9
    },
    {
        "name": "Raging-bolt",
        "type1": "Electric",
        "type2": "Dragon",
        "weight": 4800,
        "height": 5.2,
        "pokedexNumber": 1021,
        "generation": 9
    },
    {
        "name": "Iron-boulder",
        "type1": "Rock",
        "type2": "Psychic",
        "weight": 1625,
        "height": 1.5,
        "pokedexNumber": 1022,
        "generation": 9
    },
    {
        "name": "Iron-crown",
        "type1": "Steel",
        "type2": "Psychic",
        "weight": 1560,
        "height": 1.6,
        "pokedexNumber": 1023,
        "generation": 9
    },
    {
        "name": "Terapagos",
        "type1": "Normal",
        "type2": null,
        "weight": 65,
        "height": 0.2,
        "pokedexNumber": 1024,
        "generation": 9
    },
    {
        "name": "Pecharunt",
        "type1": "Poison",
        "type2": "Ghost",
        "weight": 3,
        "height": 0.3,
        "pokedexNumber": 1025,
        "generation": 9
    }
];