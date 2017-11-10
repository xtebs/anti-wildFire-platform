import { Parallax, Background } from 'react-parallax';
import Head from 'next/head';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectDescription from '../components/ProjectDescription';

const image2 = "../static/forest1.jpg";
const image1 = "../static/forest2.jpg";
const image6 = "../static/plataforma.svg";
const videoWildFire = "../static/videoFire.mp4";

export default class TheContainer extends Component {

  constructor () {
    super();
	this.state = { //later to change language by state (simpler and faster)
			language: [
				"english":{
					protectTheForest: "PROTECTING OUR FOREST",
				},
				"portuguese":{
					protectTheForest: "PROTEGER A FLORESTA PORTUGUESA",
				},

			],
			selectedLanguage : "english",
	  }
    };
	
	//console.log ( (this.state.selectedLanguage=="english")? (this.state.language.english.protectTheForest):(this.state.language.portuguese.protectTheForest) )
	
render () {

return (

<div>

	<Head>
		<link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
	</Head>



	<Parallax bgImage={image1} blur={{min: -5,max:5}}
      strength={500}>
      <div style={{height: 500}} >
		<div  style={title1Style} >
		<p>PROTEGER A FLORESTA PORTUGUESA</p>
		</div>
		<div style={title2Style}>
		<p>Com tecnologia limpa e inovadora.</p>
		</div>  
		<div >
		<a style={crowdsourced_text} href='https://www.gofundme.com/plataforma-antifogos-100-civil'>Projecto Crowdsourced. Contribua aqui.</a>
		</div>  
      </div>
    </Parallax>
	
	<div style={blackBar}> </div>  
	

		<div style={styles.containerVideo}> 

		<video style={styles.video}   src={videoWildFire} autoPlay loop muted={true} type="video/mp4">
		</video>
			<div  style={textOverVideo} >
				<p>CHEGA.</p>
			</div>
		</div> 
<div style={blackBar}> </div>  
		<Parallax bgImage={image2} strength={500}  blur={{min: 1,max: 4}}>
			<div > 
				<ProjectDescription language={this.state.selectedLanguage}/>
			</div>
		</Parallax>
    
      <div style={plan}>
			  
	  </div>
    

</div>

)}
}


const styles = {
	containerVideo: {
      width:'100%',
      height:300,
      overflow: 'hidden',
      'z-index': 0,
  },
	video: {
      objectFit: 'cover',
      width:'100%',
      height:"100%",
      'z-index': 0,
  }
  

}

const title1Style = {
	position: 'absolute',
	top:"30%",
	left:"50%",
	marginLeft:"-300px",
	'z-index': 0,
	color:'white',
	fontFamily: 'Anton' , 
	fontSize: 50,    
	padding: 20 
};

const title2Style = {
	position: 'absolute',
	top:"50%",
	left:"50%",
	marginLeft:"-170px",
	'z-index': -10,
	color:'white',
	fontFamily: 'Roboto', 
	fontSize: 20,    
	padding: 20 
};

const crowdsourced_text = {
	position: 'absolute',
	top:400,
	left:"50%",
	marginLeft:"-190px",
	'z-index': -10,
	color:'white',
	fontFamily: 'Roboto', 
	fontSize: 20,    
	padding: 20 
};

const textOverVideo = {
	position: 'absolute',
	top:480,
	left:"50%",
	marginLeft:"-140px",
	'z-index': 10,
	color:'black',
	fontFamily: 'Anton' , 
	fontSize: 100,    
	padding: 20 
};

const title3Style = {
	color:'white' ,
	fontFamily: 'Impact' , 
	fontSize: 50, 
	padding: 20, 
};

const blackBar = {
	backgroundColor:'black',
	height:20 };
	
const plan = {
	backgroundImage:"url(../static/plataforma.svg)",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	height:900 };






