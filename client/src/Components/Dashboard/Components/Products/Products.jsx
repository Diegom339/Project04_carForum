import React, { useState } from 'react';
import Sidebar from '../SideBar Section/Sidebar'; // Adjust the path as necessary
import './Products.css';

// Import images directly
import exhaustImage from '../../Assets/Exhaust.jpg'; // Adjust path as necessary
import carCoverImage from '../../Assets/Carcover.jpg'; // Adjust path as necessary
import toolKitImage from '../../Assets/Toolkit.jpg'; // Adjust path as necessary
import tiresImage from '../../Assets/Tires.jpg'; // Adjust path as necessary

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Example product data with imported images
  const products = [
    {
      id: 1,
      name: 'Performance Exhaust',
      description: 'Enhance your car\'s performance with this top-notch exhaust system.',
      imageUrl: exhaustImage,
      category: 'Performance Mods',
      price: '$399'
    },
    {
      id: 2,
      name: 'Classic Car Cover',
      description: 'Protect your classic car with a premium, durable car cover.',
      imageUrl: carCoverImage,
      category: 'Classic Cars',
      price: '$199'
    },
    {
      id: 3,
      name: 'DIY Tool Kit',
      description: 'Everything you need for DIY car repairs in one comprehensive kit.',
      imageUrl: toolKitImage,
      category: 'DIY Repairs',
      price: '$149'
    },
    {
      id: 4,
      name: 'Track Day Tires',
      description: 'High-performance tires designed for track days and racing events.',
      imageUrl: tiresImage,
      category: 'Upcoming Events',
      price: '$599'
    }
  ];

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="productsPage">
      <Sidebar />
      <div className="productsContent">
        <h1>Our Products</h1>
        <div className="filterSection">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">All Categories</option>
            <option value="Performance Mods">Performance Mods</option>
            <option value="Classic Cars">Classic Cars</option>
            <option value="DIY Repairs">DIY Repairs</option>
            <option value="Upcoming Events">Upcoming Events</option>
          </select>
        </div>
        <div className="productList">
          {filteredProducts.map(product => (
            <div key={product.id} className="productCard">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
