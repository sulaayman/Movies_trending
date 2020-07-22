import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            value:''

        }
        this.doSearch = this.doSearch.bind(this);

    }
    timeout = null;
    
    doSearch(event){
        // const  value = event.target.value;
        this.setState({ value:event.target.value })

        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500);


        // if(!value){
        //     return '';
        // }
        // else{
        //     endpoint =`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=${this.state.currentPage+1}`;
        // }

    }
    
    render() {
        return(
            <div className='rmdb-searchbar'>
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name='search' size='2x' />
                    <input type="text"
                        placeholder="Search"
                        className="rmdb-searchbar-input"
                        onChange = {this.doSearch}
                        value = {this.state.value}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;
