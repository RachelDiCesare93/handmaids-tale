import React from 'react';

const HandmaidCard = ({handmaid}) => {
    const {Aliases,Name,poster} = handmaid;

    return (
        <div className="handmaid-card">
        <h3>{Aliases}</h3>
        <div className="real-name">
        Name: <h4>{Name}</h4>
        </div>
        <img src={poster} alt="Handmaid Poster" />
        </div>
    );
};

export default HandmaidCard;