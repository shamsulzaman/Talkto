import {Component} from "react"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=> response.json() //This returns promise
    ).then((users)=> this.setState(()=>{
      return {monsters:users}
    },()=>{console.log(this.state)}))
  }



  render(){
    return (
      <div className="App">

        <input className="search-box" type="search" placeholder="Search Monsters" onChange={(e)=>{
          console.log(e)
          const searchString = e.target.value.toLowerCase()
          const filterMonsters = this.state.monsters.filter((monster)=>{
            return monster.name.toLowerCase().includes(searchString)
          })
          this.setState(()=>{
            return {monsters: filterMonsters}
          })
        }}/>

        {
          //this.setState is use to rerender the changes and call back to update the state async
          this.state.monsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        
        
      </div>
    );
  }
  
}

export default App;
