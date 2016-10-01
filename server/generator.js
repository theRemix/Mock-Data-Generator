/*
 * each generator adds new record to existing dataset
 * and returns the entire array back
 *
 * each call will randomly add data (not on every call)
 * set CHANCE_FOR_NEW_DATA from 0.1 (10% of each call will add new) to 0.9 (90% chance)
 *   defaults to 0.4
 */

const CHANCE_FOR_NEW_DATA = process.env.CHANCE_FOR_NEW_DATA || 0.4;
const randomDataSet = require('./data/randomData');

const currentPeople = [];
const currentPlanets = [];
const currentStarships = [];

const getRandomData = name => randomDataSet[name][Math.floor(Math.random()*randomDataSet[name].length)];
const newPerson = _ => ({
  name : getRandomData('personNames')
});
const newPlanet = _ => ({
  name : getRandomData('planetNames')
});
const newStarship = _ => ({
  name : getRandomData('starshipNames')
});

const randomlyPush = randomFunc => ({
  alwaysReturn(collection){
    if(Math.random() < CHANCE_FOR_NEW_DATA) collection.push(randomFunc());
    return collection;
  }
});

const people = _ => randomlyPush(newPerson).alwaysReturn(currentPeople);
const planets = _ => randomlyPush(newPlanet).alwaysReturn(currentPlanets);
const starships = _ => randomlyPush(newStarship).alwaysReturn(currentStarships);

module.exports = {
  people,
  planets,
  starships,
};


