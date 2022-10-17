import {Component} from "react"
import logo from './logo.svg';
import './App.css';

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
    },()=>{console.log(this.state)}))
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

        <input className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchDChange}/>

        {
          //this.setState is use to rerender the changes and call back to update the state async
          filterMonsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        
        
      </div>
    );
  }
  
}

export default App;
