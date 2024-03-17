import { Component } from 'react';
import React from 'react';
import Like from './common/like';
import Table from './common/table';


class MoviesTable extends Component {
    columns=[
        {path:'title', label:'Title'},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Number In Stock'},
        {path:'dailyRentalRate', label:'R-Rate'},
        {key:"like", content: movie=>(<Like onClick={()=>this.props.onLike(movie)}
        liked={movie.liked}
    />)},
        {key:"delete", content: movie=>(<button onClick={()=>this.props.onDelete(movie)}  className='btn btn-danger btn-sm'>Delete</button>)},
    ];
    

    render() { 

        const{movies, onSort, sortColumn}=this.props;
    return ( <Table data={movies} onSort={onSort} sortColumn={sortColumn} columns={this.columns }/> );
        
    }
}
 
export default MoviesTable;
