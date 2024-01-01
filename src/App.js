import './App.css';
import Movies from './componets/movies';
// import Counter from './componets/counter';
import Counters from './componets/counters';
import Navbar from './componets/navbar';
import React, { Component } from 'react';




class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 };

 handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId);
    this.setState({counters});
    // console.log("delete called", counterId);
 };
 handleReset=()=>{
    const counters= this.state.counters.map(c=>{
        c.value=0;
        return c;
    })
    this.setState({counters});

 };

 handleIncrement=(counter)=>{
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value++;
    this.setState({counters});

 };

 handleDecrement=(counter)=>{
   const counters= [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index]= {...counter};
   counters[index].value--;
   this.setState({counters});

};

  render() { 
  return (
    <React.Fragment>
    
     <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
     <main className='container'>
     <Counters 
      counters={this.state.counters}
      onDelete={this.handleDelete}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
            />
     </main>
      {/* <Movies/> */}


      </React.Fragment>    
  );
}
}

export default App;
