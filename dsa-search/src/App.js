import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 
      50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 
      62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 
      9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 
      17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 
      42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      value: null,
  }

indexOf = (array, value) => {
    let count = 0

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] == value) {
            return `item found. number of tries: ${count}, index: ${i}`;
        }
    }
    return `item not found, number of tries: ${count}`;
};

binarySearch = (array, value, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

 if (start > end) {
     return -1;
 }

 const index = Math.floor((start + end) / 2);
 const item = array[index];

 console.log(start, end);
 if (item == value) {
     return index;
 }
 else if (item < value) {
     return this.binarySearch(array, value, index + 1, end);
 }
 else if (item > value) {
     return this.binarySearch(array, value, start, index - 1);
 }
};

  linear = (event) => {
    event.preventDefault()
    console.log(event.target.search.value)
    let val = this.indexOf(this.state.data, event.target.search.value)
    this.setState({ value: val})
  }

  render() {
  return (
    <div className="App">
      <p>hello world</p>
      <form onSubmit={this.linear}>
        <label htmlFor="search"> search</label>
        <input name="search" type='text'></input>
        <input type='submit'></input>
      </form>
    {this.state.value && <p>{' '}
      {this.state.value}</p>}
    </div>
  );
  }
}

export default App;
