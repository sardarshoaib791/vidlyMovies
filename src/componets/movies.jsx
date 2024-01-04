import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import { paginate } from './utils/paginate';
import Pagination from './common/pagination';
class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage:1
      };

    handleDelete= (movie)=> {

        const movies= this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies})

    };
    handleLike=(movie)=>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index]= {...movies[index]};
        movies[index].liked =!movies[index].liked;
        this.setState({movies})


    };


    handlePageChange=page=>{

        this.setState({currentPage: page})
    };

      
      
    render() { 
        const {length: count} = this.state.movies
        const{currentPage, pageSize, movies: allMovies}=this.state;
        if(count===0) return <p>Please add movies list</p>;
        const movies= paginate(allMovies, currentPage, pageSize);
        

        return  (
            <React.Fragment>
        <p>there are {count} in this list</p>
        <table className='table'>
         <thead>
         <tr>
         <th>Title</th>
         <th>Genera</th>
         <th>Stock</th>
         <th>Rate</th>
         <th></th>
         <th></th>
         </tr>
         </thead>
         <tbody>
         {movies.map(movie=> (
            <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like onClick={()=>this.handleLike(movie)}
                    liked={movie.liked}
                /></td>
                <td><button onClick={()=>this.handleDelete(movie)}  className='btn btn-danger btn-sm'>Delete</button></td>
            </tr>))}
            
         </tbody>
         </table>
         <Pagination 
         itemsCount={count} 
         pageSize={pageSize} 
         onPageChange={this.handlePageChange}
         currentPage={currentPage}
         />
         </React.Fragment>)
    }
}
 
export default Movies;