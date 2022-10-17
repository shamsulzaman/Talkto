import { Component } from "react";

class SearchBox extends Component{
    render(){
        const {onSearchDChange} = this.props
        return(
            <input className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchDChange}/>
        )
    }
}
export default SearchBox