import React from 'react'
import ReactDOM from 'react-dom';
import ProjectIdea from './ProjectIdea';

export default class ProjectDescription extends React.Component {

  constructor () {
    super();

    };


  render() {
    return (
      <div style={{height:800, width:"100%", flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', }}>
        <div style={bigProjectTitle} > <p> Plataforma Anti-Fogos </p> </div>
        <div style={{ display: "flex", flex:1,width:"100%", height:400 }}>
          <ProjectIdea descript1="Drone Solar"  descript2="OMG2" imageURL="../static/solar_test_rc_plane.jpg" />
          <ProjectIdea descript1="Vigilância das Florestas"  descript2="OMG3" imageURL="../static/floresta_small.jpg" />
          <ProjectIdea descript1="Crimes ambientais"  descript2="OMG3" imageURL="../static/water_pollution.jpg" />
        </div>
        <img style={{width:"100%", height:210,  objectFit: 'contain', position:'relative', top:"-10%", left:"0%",  'zIndex': -10,}} src={'../static/forestDrones.png'} /> 
      </div>
    )
  }
}

const bigProjectTitle = {
  position:'relative',
  top:0,
  left:"30%",
  'z-index': 1,
  color:'DarkBlue ',
  fontFamily: 'Anton' , 
  fontSize: 50,    
  padding: 0 
}