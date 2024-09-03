planets=[
    {
        name: "Mercury",
        moons: 0,
        backColor: "grey",
    },
    {
        name: "Venus",
        moons: 0,
        backColor: "yellow",
    },
    {
        name: "Earth",
        moons: 1,
        backColor: "blue",
    },
    {
        name: "Mars",
        moons: 2,
        backColor: "red",
    },
    {
        name: "Jupiter",
        moons: 4,
        backColor: "orange",
    },
    {
        name: "Saturn",
        moons: 5,
        backColor: "yellow",
    },
    {
        name: "Uranus",
        moons: 2,
        backColor: "lightblue",
    },
    {
        name: "Neptune",
        moons: 1,
        backColor: "blue",
    }
    
];

console.log(planets);

section=document.getElementsByClassName('listPlanets')[0];

for (planet of planets){
    for (let i=0; i<planet.moons; i++){
        newMoon=document.createElement('div');
        newMoon.className='moon';
        section.appendChild(newMoon);
    }
    newPlanet=document.createElement('div');
    newPlanet.className='planet';
    newPlanet.style.backgroundColor=planet.backColor;
    section.appendChild(newPlanet);

    
}