import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const Citizens = () => {
    // Initial citizens array
    const initialCitizens = [
        { name: 'Amante Christel Mae', age: 25, address: 'Badian, Cebu, Philippines', status: 'Active' },
        { name: 'Mike Bustamante', age: 30, address: 'Minglanilla, Cebu, Philippines', status: 'Inactive' },
        { name: 'Pocong', age: 40, address: 'Manila Philippines', status: 'Active' },
        { name: 'Itzy Shin Ryujin', age: 22, address: 'Fujian China', status: 'Inactive' },
        { name: 'John Ericson Brigildo', age: 55, address: 'Naga City of Cebu', status: 'Active' },
        { name: 'Alice Guo', age: 35, address: 'Fujian Fukien China', status: 'Inactive' },
        { name: 'Mike', age: 45, address: 'Lahug, Cebu City', status: 'Active' },
        { name: 'Eva', age: 60, address: 'Santander, Cebu, Philippines', status: 'Active' },
        { name: 'Degamo', age: 65, address: 'Negros Oriental,Philippines', status: 'Active' },
        { name: 'Jane', age: 70, address: '707 Boulevard, Bamban Tarlac Pogo Hub', status: 'Inactive' },
    ];

    // State variables
    const [citizens, setCitizens] = useState(initialCitizens);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

    // Function to toggle citizen status
    const toggleStatus = (index) => {
        const updatedCitizens = [...citizens];
        updatedCitizens[index].status = updatedCitizens[index].status === 'Active' ? 'Inactive' : 'Active';
        setCitizens(updatedCitizens);
        setFilteredCitizens(updatedCitizens.filter(citizen =>
            citizen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            citizen.address.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    };

    return (
        <div className="citizens-container">
            <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                citizens={citizens}
                setFilteredCitizens={setFilteredCitizens}
            />
            <div className="cards-container">
                {filteredCitizens.map((citizen, index) => (
                    <Citizen
                        key={index}
                        index={index}
                        citizen={citizen}
                        toggleStatus={toggleStatus}
                    />
                ))}
            </div>
        </div>
    );
};

export default Citizens;
