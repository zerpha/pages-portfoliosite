import React from 'react';
import "../App.css";
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pfp from '../images/pfp.jpg'
import { FadeInSection } from '../effects/fadeIn';

class homeComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className = "topdiv" id="home">
             <div className = "center" style = {{width: "1000px"}}>
             <FadeInSection><header style = {{fontSize: "50px", fontWeight: "bold"}}>MY LIFE</header></FadeInSection>
              <div style={{height: "5em"}}></div>
              <FadeInSection>
              <p>
              Hi there! I am a guy that likes coding and video games. My passion is working with backend software and DevOps, but
              I also really enjoy front-end web development as it forces me to be creative rather than just logical.
              Right now I am studying cloud computing and trying to get my AWS Associates Certificate. 
              I am currently a senior undergraduate student studying 
              Computer Science for a Bachelors Degree at University of
              California, Santa Cruz. Currently looking for 
              a Software Engineer internship or full-time for the coming 2021 summer. 
              
              </p></FadeInSection><div style={{height: "3em"}}></div>
            </div>
    
            <div className = "container">
              <div className = "row">
                  <div className = "col-6">
                  <FadeInSection>
                  <p  className = "float-right" style = {{ width: "350px"}}>
                  <br></br>
                    Outside of coding, I love playing any sort of competitive and strategic games.
                    I love TCG games such as Legends of Runeterra and Hearthstone. I also really enjoy fighting games with its high-skill
                    executions and mind games. Right now I am really looking forward to Guilty Gear Strive coming out. I am also really into Smash Bros. 
                    I am also having a chess phase right now where I am trying to learn mid game to the best of my ability.
                  </p>
                  </FadeInSection>
                  </div>
                  <div className = "col-6"> 
                    <Image src = {pfp} style = {{height:"600px"}}/>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default homeComponent;