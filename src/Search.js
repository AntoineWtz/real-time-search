import React, { useState } from 'react';
import './Search.css';

const data = [
    { id: 1, name: 'Apple', description: 'A sweet red fruit' },
    { id: 2, name: 'Banana', description: 'A long yellow fruit' },
    { id: 3, name: 'Cherry', description: 'A small red fruit' },
    { id: 4, name: 'Date', description: 'A sweet brown fruit' },
    { id: 5, name: 'Elderberry', description: 'A small dark purple fruit' },
    { id: 6, name: 'Fig', description: 'A sweet fruit with a soft skin' },
    { id: 7, name: 'Grape', description: 'A small round fruit, often purple or green' },
    { id: 8, name: 'Honeydew', description: 'A sweet green melon' },
    { id: 9, name: 'Kiwi', description: 'A small brown fruit with green flesh' },
    { id: 10, name: 'Lemon', description: 'A sour yellow fruit' },
    { id: 11, name: 'Mango', description: 'A sweet orange fruit' },
    { id: 12, name: 'Nectarine', description: 'A sweet orange fruit with a smooth skin' },
    { id: 13, name: 'Orange', description: 'A round juicy citrus fruit with a tough bright reddish-yellow rind' },
    { id: 14, name: 'Papaya', description: 'A large oval fruit with a yellowish skin' },
    { id: 15, name: 'Quince', description: 'A hard, yellow fruit that looks like a large apple' },
    { id: 16, name: 'Raspberry', description: 'A small soft red fruit' },
    { id: 17, name: 'Strawberry', description: 'A small juicy red fruit' },
    { id: 18, name: 'Tangerine', description: 'A small citrus fruit with a loose skin' },
    { id: 19, name: 'Ugli fruit', description: 'A large, sweet, juicy fruit that is a cross between a grapefruit and a tangerine' },
    { id: 20, name: 'Watermelon', description: 'A large fruit with a hard green skin, red pulp, and watery juice' },
];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            <div className="results">
                {filteredData.map((item) => (
                    <div key={item.id} className="result-item">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;