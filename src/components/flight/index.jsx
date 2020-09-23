import React from 'react';
import './index.css';
import { useContext } from 'react';
import FlightContext from '../../contexts/flight';
import SearchBar from './searchBar';
import List from './list';
import Brand from './brand';

const Flight = () => {
    const [context,changeContext] = useContext(FlightContext);
    return (
        <React.Fragment>
            <div className="flight_body">               
                <SearchBar></SearchBar>               
                <div className="flight_content">
                    {(context.length>0)?<List/>:<Brand/>}
                </div>                
            </div>            
        </React.Fragment>
    );
};

export default Flight;