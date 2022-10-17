import {Component} from "react"
import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/Search-box/search-box.component";

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=> response.json() //This returns promise
    ).then((users)=> this.setState(()=>{
      return {monsters:users}
    }))
  }

  onSearchDChange = (e)=>{
    const searchField = e.target.value.toLowerCase()          
    this.setState(()=>{
      return {searchField}
    })
  }



  render(){

    const {monsters, searchField} = this.state
    const {onSearchDChange} = this

    const filterMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField)
    })



    return (
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>
        

        {/* <input className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchDChange}/> */}
        <SearchBox className="monster-search-box" onChangeHandler={onSearchDChange} placeholder ='search monster'/>
        <CardList monsters={filterMonsters}/>

        {/* {
          //this.setState is use to rerender the changes and call back to update the state async
          filterMonsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        } */}
        
        
      </div>
    );
  }
  
}

export default App;
