import { Button } from 'bootstrap';
import React, { Component } from 'react';

const MoviesForm = ({match, history}) => {
    return ( <div>
    <h1>Movies Form:</h1>
    <span>{match.params.id}</span>
    <br></br>
    <br></br>
    <button className='btn btn-primary sm' onClick={()=>history.push('/movies')}>
        save
    </button>



    </div> );
}
 
export default MoviesForm;