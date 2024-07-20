import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic margherita pizza with fresh tomatoes, mozzarella cheese, and basil.',
      price: '$10.99'
    },
    {
      id: 2,
      name: 'Cheeseburger',
      description: 'Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and pickles.',
      price: '$8.99'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Crispy romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
      price: '$7.99'
    },
    {
      id: 4,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti with creamy carbonara sauce, pancetta, and Parmesan cheese.',
      price: '$12.99'
    },
    // Add more menu items as needed
  ];

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
