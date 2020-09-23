import React from 'react';
import { useContext } from 'react';
import FlightContext from '../../contexts/flight';
import FlightRow from './flightRow';

const List = () => {
    const [context, setContext] = useContext(FlightContext);
    return (
        <div className="search_bar">{
            context.map(values => (<FlightRow row={values}></FlightRow>))}
        </div>);
};

export default List;