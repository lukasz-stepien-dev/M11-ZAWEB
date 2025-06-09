import React, { useState } from 'react';

const App = () => {
    const products = [
        { id: 1, name: 'Raspberry PI 10', category: 'Elektronika' },
        { id: 2, name: 'Harry Potter 20', category: 'Książki' },
        { id: 3, name: 'Koszulka polo', category: 'Odzież' },
    ];

    const categories = ['Wszystkie', 'Elektronika', 'Książki', 'Odzież'];

    const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if (category === 'Wszystkie') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.category === category));
        }
    };

    const handleRemoveProduct = (id) => {
        const updatedProducts = filteredProducts.filter((product) => product.id !== id);
        setFilteredProducts(updatedProducts);
    };

    return (
        <div>
            <h1>Filtracja produktów</h1>

            <select value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} ({product.category}){' '}
                        <button onClick={() => handleRemoveProduct(product.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
