import React from 'react';
import {getSearch} from '../util/apis';

var inp ='';



function myFunction() {
    const ass = document.getElementById("myInput").value;
    
    document.getElementById("myInput").value = ' ';
    inp = ass;
    console.log(getSearch(ass)[0]);
    // console.log(inp);


}

const SearchBar = () => (
    <div>
        <input type="text" placeholder="Search" id="myInput"/>
       <button onClick={() => myFunction()}>Search</button>
    </div>
);

if (inp!=='') {console.log(String(inp));}


export default SearchBar;