import React from 'react';
import { useContext,useState } from 'react';
import FlightContext from '../../contexts/flight';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column' ,
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                alignSelf: 'center'
            }
        },
    }),
);

const SearchBar = () => {
    const [value,changeValue] = useState('');
    const [context, setContext] = useContext(FlightContext);
    const classes = useStyles();
    const search = (e)=>{
        e.preventDefault();
        // Call axios here 
        fetch('https://reqres.in/api/users').then(data=>data.json()).then(data=>{
            setContext(data.data);   
        }).catch(err=>{
            //do nothing
        })
            
    }
    return (
    <div className="search_bar">
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Flight Name" variant="outlined" onChange={e => changeValue(e.target.value)}/>
            <Button className="hiddenButton" variant="contained" color="primary"  type="submit" onClick={search}>Search</Button>
         </form>
    </div>);
};

export default SearchBar;