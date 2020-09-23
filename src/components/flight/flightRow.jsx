import React from 'react';

const FlightRow = (props) =>{
    let row = props.row;
    return(<span className="row" key={row.id}>{row.first_name}</span>);
};

export default FlightRow;