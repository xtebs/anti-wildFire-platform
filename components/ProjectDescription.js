import React from 'react'
import ReactDOM from 'react-dom';
import ProjectIdea from './ProjectIdea';


//var ScrollArea = require('react-scrollbar/no-css');

export default class ProjectDescription extends React.Component {

  constructor () {
    super();


       };


mouseHover(){

		
}
	
	//https://www.gofundme.com/plataforma-antifogos-100-civil
	
  //https://www.qualcomm.com/news/onq/2017/05/03/qualcomm-technologies-releases-lte-drone-trial-results


  render() {

    var descript_full1 = "O primeiro passo é construir um drone solar de testes, que consiga voar durante horas, controlado remotamente por LTE, demonstrando assim a credibilidade do projecto.";
    var descript_full2 = "Com drone já construído, podemos já demonstrar a sua utilidade extrema ao transmitir conteúdo em directo para uma base. Segundo passo passa por usar cloud image processing (Amazon, IBM) para detectar anomalias automaticamente. (e.g. Fogos)"
    var descript_full3 = "Uma das capacidades imediatas do HW previamente instalado no Drone, é a possibilidade de vigia e controlo de descargas ou outras situações sensíveis a negligências/crimes contra o ambiente.";
    var descript_full4 = "O último passo será criar condições de software e de logística para que uma frota significativa possa circular e recolher dados valiosos de forma autónoma, controlada e segura.";

    return (
      <div style={{display: "flex", flex:1,  flexWrap:"wrap", width:"100%", padding:5}}  >
        <div> <p style={bigProjectTitle} > PLATAFORMA ANTI-FOGOS </p> </div>
        <div style={projectsContainer}>
          <ProjectIdea title="Avião Solar"  descript2="1" descript_full={descript_full1}  imageURL="../static/solar_rcPlane.jpg" />
          <ProjectIdea title="Vigilância das Florestas"  descript2="2" descript_full={descript_full2} imageURL="../static/floresta_small.jpg" />
          <ProjectIdea title="Crimes ambientais"  descript2="3" descript_full={descript_full3} imageURL="../static/water_pollution.jpg" />
		      <ProjectIdea title="Plataforma final"  descript2="OMG2" descript_full={descript_full4}  imageURL="../static/mission_planner.png" />
		    </div>
      </div>
    )
  }
}

const bigProjectTitle = {
  position:'absolute',
  top:-40,
  left:"30%",
  'z-index': 10,
	color:'white',
	fontFamily: 'Anton' , 
	fontSize: 50,    
	padding: 0,
	webkitTextStrokeWidth: "2px",
  webkitTextStrokeColor: "black",
}

const projectsContainer = {
display: "flex", 
flex:1,  
flexWrap:"wrap",
paddingTop:80, 
marginLeft:"50px" 
}

