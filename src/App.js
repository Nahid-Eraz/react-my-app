import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const peoples = ['jhon wick', 'tom', 'ben', 'mask', 'bond']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$70.99' },
    { name: 'Lightroom', price: '$100.99' },
    { name: 'Premium EL', price: '$200.99' }
  ]
  // const productNames = products.map(product => product.name)

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to react world</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            peoples.map(people => <li>{people}</li>)
          }
          {products.map(product => <li>{product.name}</li>)}
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name + "    " + user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    color: 'black',
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

export default App;
