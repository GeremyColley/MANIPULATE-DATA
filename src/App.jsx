//import { useState } from 'react'
import './App.css'
import categorie from './assets/categories.json'
//import product from './assets/products.json'

/****************************************************************************************************
 * Méthode : Pour utiliser les données de data compliqué 
 * 
 * Etape 1 : Obsevation !!! 
 *    D'abord savoir si les données sont sous la forme d'un JSON {} ou un Tableau de JSON [ {} , {} , ..., {}]
 * 
 * Etape 2 : Pour les tableaux utilisés les méthodes ci-dessous avec des callback
 *  filter : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *  foreach : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *  reducer : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *  map : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 *  Utiliser les méthodes : find, push, pop, join, split, slice, sort, reverse, unshift et shift 
 *   => https://www.w3schools.com/js/js_array_methods.asp
 * 
 * Etape 3 : Utiliser les méthodes JSON => https://www.w3schools.com/js/js_json.asp
 *    
 * REX : Pour l'affichage de map en jsx preferer l'utilisation de "key" sinon vous aurez un warning
 *    (elem, index) => (<p key={index}>
 * 
 * Méthode : Pour mener à bien une manipulation de données dans react 
 *  utiliser une application simple (comme celle-ci)
 *  utiliser des console log dans le corps de la fonction. (Avec des const)
 *  utiliser la console du navigateur pour voir le résultat
 *  Puis passer en JSX
 * 
 */



function App() {
  //const [count, setCount] = useState(0)
  //console.log(categorie.pop());
  //console.log(categorie.map((elem) => (elem._id)));
  //console.log(categorie.filter( elem => elem._id === "6182aa554bab0dc0d5be5e8f"));
  //console.log(categorie.filter( elem => elem.is_special));

  const idMiddle = categorie.filter( elem => elem._id === "6181841060c425f76e57b60a");
  console.log(idMiddle);
  const myJson = JSON.stringify(idMiddle.pop());
  console.log("My json : " + myJson);
  const categorieSpecial = categorie.filter( elem => elem.is_special);
  console.log("ma liste : " + categorieSpecial);


  return (
    <div className='App'>
      <h1>Hello Alice</h1>
      <p>{categorie.length}</p>
      <ul>
      {categorieSpecial.map( (elem, index) => (
        <p key={index}>{elem.name}</p>
      ))}

      <p>Json - {myJson}</p>
      </ul>
    </div>
  )
}

export default App
