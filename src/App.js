import './App.css';
import Product from './Components/Product/Product';

function App() {
  const products = [
    {
      name: 'ביסלי',
      price: '5.90',
      picture: 'bisli.png'
    },
    {
      name: 'במבה',
      price: '3.90',
      picture: 'bamba.png'
    },
    {
      name: 'תפוצ׳יפס',
      price: '4.90',
      picture: 'chips.png'
    },
  ];

  function renderProducts() {
    return products.map((product, index) => <Product key={index} product={product}/>);
  }

  return (
    <div className="App">
      <div className='products'>
        <div className='productsTitle'>רשימת מוצרים</div>
        {renderProducts()}
      </div>
    </div>
  );
}

export default App;
