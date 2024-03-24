import './App.css';
import Movies from './componets/movies';
// import Counter from './componets/counter';
import Counters from './componets/counters';
import Navbar from './componets/navbar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Customers from './componets/customers';
import MoviesForm from './componets/moviesForm';
import NotFound from './componets/notFount';
import Rentals from './componets/rentals';
import Navebar1 from './componets/navBar1';
import Login from './componets/login';




class App extends Component {

   state = {
      counters: [
         { id: 1, value: 4 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 0 }
      ]
   };

   handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
      // console.log("delete called", counterId);
   };
   handleReset = () => {
      const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
      })
      this.setState({ counters });

   };

   handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });

   };

   handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });

   };

   render() {
      return (
         <Router>
            <div className='container'>

               {/* <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
     <main className='container'>
     <Counters 
      counters={this.state.counters}
      onDelete={this.handleDelete}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
            />
     </main> */}
               {/* <Movies/> */}
               <Navebar1/>
               <Switch>
               <Route path="/login" component={Login}></Route>
               <Route path="/movies/:id" component={MoviesForm}></Route>
               <Route path="/movies" component={Movies}></Route>
               <Route path="/customers" component={Customers}></Route>
               <Route path="/not-found" component={NotFound}></Route>
               <Route path="/rentals" component={Rentals}></Route>
               <Redirect from="/" exact to="/movies"></Redirect>
               <Redirect to ="/not-found"></Redirect>
               </Switch>


            </div>
         </Router>
      );
   }
}

export default App;
