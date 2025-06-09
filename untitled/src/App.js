import './App.css';
import {useState} from "react";

function addProduct(products, product) {
  return [...products, product]
}

function removeProduct(products, product) {
  return products.filter(p => p !== product)
}
class Product {
  constructor(name, category) {
    this.name = name
    this.category = category
  }
}

const categories = {
  'electronics': 'Elektronika',
    'books': 'Książki',
    'clothes': 'Odzież'
}

function filterProducts(filter, products) {
  if (filter !== 'all')
    return products.filter(p => p.category === filter)
  else
    return products
}

function App() {
  let [products, setProducts] = useState([])
  let [filter, setFilter] = useState('all')
  return (
    <div className="App">
      <form onSubmit={
        (e) => {
          e.preventDefault()
          const name = e.target[0].value
          const category = e.target[1].value
          const product = new Product(name, category)
          setProducts(addProduct(products, product))
        }
      }>
        <input type={'text'}/>
        <select id={'category'}>
          <option selected={true} value={'electronics'}>Elektronika</option>
          <option value={'books'}>Książki</option>
          <option value={'clothes'}>Odzież</option>
        </select>
        <input type={'submit'} value={'Dodaj'} />
        <select id={'filter'} onChange={event => {
          setFilter(event.target.value)
        }}>
          <option value={'all'}>Wszystkie</option>
          <option value={'electronics'}>Elektronika</option>
          <option value={'books'}>Książki</option>
          <option value={'clothes'}>Odzież</option>
        </select>
      </form>
      <ul id={'products-list'}>
        {filterProducts(filter, products).map(p => {
          return (
              <li key={p.name}>
                {p.name} ({categories[p.category]}) <button onClick={
                  () => {
                    setProducts(removeProduct(products, p))
                    console.log(products, p)
                  }
                }>Usuń</button>
              </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
