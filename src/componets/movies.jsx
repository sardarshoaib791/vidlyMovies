import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import { paginate } from './utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
class Movies extends Component {
    state = {
        movies: [],
        genres:[],
        pageSize: 4,
        currentPage:1
      };

      componentDidMount() {
        const genres=[{name:"All Genres"},...getGenres()]
        this.setState({movies: getMovies(), genres});

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

    handleGenreSelect=genre=>{
        this.setState({selectedGenre:genre , currentPage: 1});


    };

      
      
    render() { 
        const {length: count} = this.state.movies
        const{currentPage, pageSize, movies: allMovies, selectedGenre}=this.state;
        if(count===0) return <p>Please add movies list</p>;
        const filtered= selectedGenre && selectedGenre._id? allMovies.filter(m=>m.genre._id===selectedGenre._id): allMovies;
        const movies= paginate(filtered, currentPage, pageSize);
        

        return  (
            <div className='row'>
            <div className='col-2'>
            <ListGroup 
            items={this.state.genres}  
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
            />
            </div>
            <div className='col'>
            <p>there are {filtered.length} in this list</p>
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
         itemsCount={filtered.length} 
         pageSize={pageSize} 
         onPageChange={this.handlePageChange}
         currentPage={currentPage}
         /></div>
        
         </div>)
    }
}
 
export default Movies;