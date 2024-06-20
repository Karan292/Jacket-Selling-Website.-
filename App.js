import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to Karan Store </h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="Hero-section">
      <h2>Welcome to Karan Store</h2>
      <p>Your one-stop shop for stylish and comfortable jackets. Discover our exclusive collection of jackets that blend fashion and comfort. Perfect for any season, our jackets keep you looking sharp. Shop now and elevate your style!</p>
      <button>Shop Now</button>
    </section>
  );
}

function Products() {
  return (
    <section className="Products" id="products">
      <h2>Our Products</h2>
      <div className="Product-list">
        <Product name="Classic Leather Jacket" description="Timeless design with premium leather." price="₹6500" />
        <Product name="Denim Jacket" description="Casual and stylish, perfect for everyday wear." price="₹4500" />
        <Product name="Winter Parka" description="Stay warm and cozy with our insulated parka." price="₹2500" />
      </div>
    </section>
  );
}

function Product({ name, description, price }) {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 Jacket Store. All rights reserved.</p>
    </footer>
  );
}

export default App;
