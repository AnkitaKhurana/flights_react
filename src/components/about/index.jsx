import React, {useEffect,useState} from 'react';

const About = () =>{
  const [about, updateAbout] = useState();  
  useEffect(()=>{
    fetch('https://reqres.in/api/users').then(data=>data.json()).then(data=>{
        updateAbout(data.data);   
    }).catch(err=>{
        //do nothing
    });    
  },[]);
    return(<div>{about && about.map(v=>v.id)}</div>);
};

export default About;