import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector ,connect , useDispatch} from 'react-redux';
const Counter = () => {
  // const toggleCounterHandler = () => {};
  const counter=useSelector(state =>state.counter);
  const dispatch = useDispatch();
  const show=useSelector(state => state.showCounter);
  const incrementHandler=()=>{
    dispatch({type : 'increment'})
  };
  const decrementHandler=()=>{
    dispatch({type : 'decrement'})
  };
  const increaseHandler=()=>{
    dispatch({type:'increase',
    amount : 10})
    
  }
  const toggleCounterHandler=()=>{
    dispatch({type : 'toggle'})
  };

  const decreasehandler=()=>{
    dispatch({type:'decrease'});
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button  onClick={incrementHandler}>Increment</button>
        <button  onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decreasehandler}>Decrease by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div> 
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{

//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){
//     this.props.toggle();
//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button  onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Reset</button>
//       </main>
//     );
//   }
// }


// const mapStateToProps = state=>{
//   return{
//     counter: state.counter
//   };
// }

// const mapDispactToProps= dispatch=>{
//   return {
//     increment : ()=>dispatch({type:'increment'}),
//     decrement : ()=>dispatch({type:'decrement'}),
//     toggle : ()=>dispatch({type:'toggle'})
//   };
// }

// // export default Counter;

// export default connect(mapStateToProps,mapDispactToProps)(Counter);
