import { Parallax, Background } from 'react-parallax';
import Head from 'next/head';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectDescription from '../components/ProjectDescription';

const image2 = "../static/forest1.jpg";
const image1 = "../static/forest2.jpg";
const image3 = "../static/drone-bleu.png";
const image4 = "../static/forest2.jpg";
const image5 = "../static/andre-robillard-298.jpg";
const videoWildFire = "../static/videoFire.mp4";

export default class TheContainer extends Component {

  constructor () {
    super();
	this.state = {
			language:{
				english:{
					protectTheForest: "PROTECT OUR FOREST",

				},
				portuguese:{
					protectTheForest: "PROTEGER A FLORESTA PORTUGUESA",


				},

			}


	}

    };

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
      <div style={containerTitle1} style={{height: 500}}   strength={500}>
		<div  style={title1Style} >
		<p>{this.state.language.english.protectTheForest}</p>
		</div>
		<div style={title2Style}>
		<p>Com tecnologia limpa e inovadora.</p>
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

	<ProjectDescription/>

    <Parallax bgImage={image2} strength={500}  blur={{min: -5,max: 10}}>
      <div style={{height: 500}}>
		<div > 
			<div style={title3Style}>ToDo</div>  
		</div> 
	  </div>
    </Parallax>
    <Parallax bgImage={image5} strength={-300}>
      <div style={{height: 700}}>
        <div style={title1Style}>Reverse direction</div>
      </div>
    </Parallax>

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
	left:"25%",
	'z-index': 0,
	color:'white',
	fontFamily: 'Anton' , 
	fontSize: 50,    
	padding: 20 
};

const title2Style = {
	position: 'absolute',
	top:"50%",
	left:"37%",
	'z-index': -10,
	color:'white',
	fontFamily: 'Roboto', 
	fontSize: 20,    
	padding: 20 
};

const textOverVideo = {
	position: 'absolute',
	top:650,
	left:"80%",
	'z-index': 10,
	color:'black',
	fontFamily: 'Anton' , 
	fontSize: 50,    
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
	fontFamily: 'Verdana' , 
	height:20 , 
	fontSize: 50 }
	;



const containerTitle1 = { 
	    position: 'absolute',
        top: 0,
        'z-index': -10,

};


