
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
const [searchField, setSearchField] = useState("");
const [monsters, setMonsters] = useState([]);



const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
}


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => setMonsters(users));
}, []);

const filteredMonster = monsters.filter((monster) => {
  const filteredMonsterString = monster.name.toLocaleLowerCase().includes(searchField)
  return filteredMonsterString
})

  return (
    <div className="App">
           <h1 className='app-text'>MONSTER ROLODEX</h1>
            <SearchBox 
             onChange= {onSearchChange}
              placeholder={'search monster'}
               className={'monster-search-box'}
            />
              
           <CardList monsters={filteredMonster} />

            </div>
  )
} 





// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
      
      
//     };
    

//   }

// componentDidMount() {
  
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => this.setState(
//     () => {
//       return {monsters: users};
//      }
//     // () => {
//     //   console.log(this.state);
//     // }
//   ))
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {searchField};
//     });
//   };

//   render () {
// const { monsters, searchField } = this.state;
// const { onSearchChange } = this;



//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })
    
//     return (
//             <div className="App">
//             <h1 className='app-text'>MONSTER ROLODEX</h1>
//             <SearchBox 
//               onChange= {onSearchChange}
//               placeholder={'search monster'}
//               className={'monster-search-box'}
//             />
              
//             <CardList monsters={filteredMonster} />

//             </div>
//           );
//   }
// }




export default App;
