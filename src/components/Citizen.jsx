import React from 'react';

const Citizen = ({ citizen, index, toggleStatus }) => {
    return (
        <div className="card">
            <div className="card-header">
                <strong>{index + 1}. {citizen.name}</strong>
            </div>
            <div className="card-body">
                <p><strong>Age:</strong> {citizen.age}</p>
                <p><strong>Address:</strong> {citizen.address}</p>
                <p>

                    <strong>Status:</strong>
                    <span className={`status-text ${citizen.status.toLowerCase()}`}>
                        <span className={`status-icon ${citizen.status.toLowerCase()}`}></span>
                        {citizen.status}
                    </span>
                </p>
                <button onClick={() => toggleStatus(index)}>Toggle Status</button>
            </div>
        </div>
    );
};

export default Citizen;
