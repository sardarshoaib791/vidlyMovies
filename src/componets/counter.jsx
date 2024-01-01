import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        // console.log("props c", this.props);
        return (
            <div className='row'>

                <div className='col-1 m-2'><span className={this.getBadgeClasses()}>{this.formateCount()}</span></div>
                <div className='col'>
                <button className='btn btn-secondary btn-sm' onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
                <button className='btn btn-secondary btn-sm m-2' 
                onClick={()=>this.props.onDecrement(this.props.counter)}
                disabled={this.props.counter.value===0? "disabled": ""}>-</button>
                <button className='btn btn-danger btn-sm m-2' onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
            </div>
        );
    }
    
    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes+= this.props.counter.value===0? 'warning' : "primary";
        return classes;

    };

    formateCount(){
        return this.props.counter.value===0? "zero": this.props.counter.value;

    }


}
 
export default Counter;