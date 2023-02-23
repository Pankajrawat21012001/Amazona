// import logo from './logo.svg';
// import './App.css';
import data from './data.js';

function App() {
  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((products) => (
            <div className="product" key={products.slug}>
              <a href={`/products/${products.slug}`}>
                <img src={products.images} alt={products.slug} />
              </a>
              <div className="product-info">
                <a href={`/products/${products.slug}`}>
                  <p>{products.name}</p>
                </a>
                <p>
                  <strong>${products.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
