import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery, citizens, setFilteredCitizens }) => {

    // Function to handle search input changes
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = citizens.filter(citizen =>
            citizen.name.toLowerCase().includes(query.toLowerCase()) ||
            citizen.address.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCitizens(filtered);
    };

    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchFilter;
