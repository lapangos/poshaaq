import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Graphic Tee",
    price: 24.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Vintage T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Summer Tee",
    price: 22.99,
    image: "https://via.placeholder.com/300",
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
