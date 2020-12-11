import React from 'react';
import { CardDeck, Card} from 'react-bootstrap';
import axios from "axios";
import "../App.css";
import { FadeInSection } from '../effects/fadeIn';

class projectsComponent extends React.Component{

    render(){
        return(
          <div className="projects" id="projects">
            <div style = {{fontSize: "50px", fontWeight: "bold",  paddingBottom: "100px"}}>
                    <FadeInSection><header>PROJECTS</header></FadeInSection>
            </div>
            <FadeInSection>
            <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/t/clean-soft-pink-background-wide-angle-light-blur-white-gradient-texture-design-beautiful-abstract-panoramic-wallpaper-122497959.jpg" />
                <Card.Body>
                  <Card.Title>PinkNotes</Card.Title>
                  <Card.Text>
                  Designed a single-page note taking web application to help students create and organize their notes using MERN technologies.
                  Used Passport.js and jsonwebtoken to authenticate users when calling CRUD operations.
                  Built a REST API using Node and Express to create a client-server architecture.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/zerpha/PinkNotes">Source Code</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://rocketeers.gg/wp-content/uploads/2018/01/discord.jpg" />
                <Card.Body>
                  <Card.Title>Pokebot</Card.Title>
                  <Card.Text>
                  A pokemon gacha machine built using the Discord API in Python. Inspired by Mudae Bot, this bot lets users roll for random unowned Pokemon periodically, and add them to their collection. 
                  Users are able to collect, trade, and release hundreds of Pokemon.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/zerpha/PokeGacha">Source Code</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://miro.medium.com/max/2560/1*UmNaiFF4p60YawHnZNF94w.jpeg" />
                <Card.Body>
                  <Card.Title>TenCoin</Card.Title>
                  <Card.Text>
                    This application is meant to visualize and interact with a blockchain. I built a blockchain in JavaScript and let people visualize and interact with the blockchain with AngularJS.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://zerpha.github.io/TenCoin/">Interact</Card.Link>
                  <Card.Link href="https://github.com/zerpha/TenCoin">Source Code</Card.Link>
                </Card.Footer>
              </Card>
            </CardDeck>
            </FadeInSection>
            <br></br>
            <FadeInSection>
            <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://cdn.hipwallpaper.com/i/56/62/KeAIlY.png"/>
                <Card.Body>
                  <Card.Title>Pokedex</Card.Title>
                  <Card.Text>
                  From the popular franchise, Pokemon, I lead a group of four in recreating the the Pokedex in C++. 
                  Using BSTs and a hashtable we created a database of Pokemon where you could input and search for Pokemon based on names or other attributes.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/zerpha/Pokedex">Source Code</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/27-272725_imdb-hd-png-download.png" />
                <Card.Body>
                  <Card.Title>IMDb Text Classifer</Card.Title>
                  <Card.Text>
                  Classifies text from an IMDb review dataset with natural language processing to check for negative or positive reviews. 
                  Created a Keras model to embed the review as a sequence of vectors and uses a GRU layer to turn that sequence into a vector. Finally applies a neural network to get a label.
                  Built in Python using TensorFlow.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/zerpha/CSE143-Assignments/tree/master/ass2">Source Code</Card.Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://vistapointe.net/images/firewall-1.jpg" />
                <Card.Body>
                  <Card.Title>Network Firewall</Card.Title>
                  <Card.Text>
                  Created a SDN Firewall for a make-believe company using a POX OpenFlow controller and Mininet. Controls the IP packets between servers, trusted users and untrusted users.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/zerpha/SDN-Firewall">Source Code</Card.Link>
                </Card.Footer>
              </Card>
            </CardDeck>
            </FadeInSection>
          </div>
        );
    }
}

export default projectsComponent;