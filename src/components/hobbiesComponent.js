import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../App.css";
import molly1 from '../images/molly.jpg'
import smash from '../images/smash.png'
import { FadeLeftSection } from '../effects/fadeLeft';

class hobbiesComponent extends React.Component{
    render(){
        return(
            <div className = "hobbies" id = "hobbies">
            <div style = {{fontSize: "50px", fontWeight: "bold",  paddingBottom: "100px", color: "white", textAlign: "left"}}>
                      <FadeLeftSection><header>HOBBIES</header></FadeLeftSection>
            </div>
              <FadeLeftSection>
              <Carousel>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src={molly1}
                    alt="First slide"
                    height = "1000px"
                  />
                  <Carousel.Caption style = {{fontWeight: "bold", fontSize: "24px"}}>
                    <h1>Molly</h1>
                    <p>When I find the time, I love taking my dog, Molly, to the park and on walks. </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src={smash}
                    alt="Third slide"
                    height = "1000px"
                  />
                  <Carousel.Caption style = {{color: "black", fontWeight: "bold", fontSize: "24px"}}>
                    <h1>Video Games</h1>
                    <p>Video games have been a part of me since growing up. Starting from Pokemon and Mario 64 to current games such as Smash Bros, I don't know where I'd be without them.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src="https://images.chesscomfiles.com/uploads/v1/article/17623.87bb05cd.668x375o.47d81802f1eb@2x.jpeg"
                    alt="Third slide"
                    height = "1000px"
                  />
                  <Carousel.Caption style = {{fontWeight: "bold", fontSize: "24px"}}>
                    <h1>Chess</h1>
                    <p>I have recently picked up chess and am really enjoying the amount of creativity I can employ in my strategies. Right now I am learning mid-game and my favorite opening is
                      the King's Indian.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </FadeLeftSection>
            </div>
        );
    }
}

export default hobbiesComponent;