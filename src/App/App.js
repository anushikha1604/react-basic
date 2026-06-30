import './App.css';
import MyButton from '../Button/button';
import ProductList from '../Products/products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn React
        </p>
        <p>A Button </p>
        <MyButton />
        <p>Product List</p>
        <ProductList />
      </header>
    </div>
  );
}

export default App;
