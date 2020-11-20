import './App.css';
import React from 'react';
import './index.css'
import { Navbar, Nav, Image, Card, CardDeck, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pfp from './images/pfp.jpg'
import marble from './images/marble.jpeg'
import molly from './images/molly.jpg'
import bay from './images/bayarea.jpg'
import smash from './images/smash.png'
//bootstrap react doesnt come with bootstrap css
// margin: "0 auto" to center
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top" bg = "white">
        <Navbar.Brand href="#home" className = "navheader">HENRY NGUYEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
            <Nav.Link href="#resume" download = "Henry Nguyen, Resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className = "topdiv" id="home">
        <div className = "center" style = {{width: "1000px"}}>
          <header style = {{fontSize: "50px", fontWeight: "bold"}}>MY LIFE</header>
          <br></br><br></br>
          <p>
          Hi there! I am a guy that likes coding and video games. My passion is working with backend software, but
          I also really enjoy front-end web development as a forces me to be creative rather than just logical.
          Right now I am studying cloud computing and trying to get my AWS Associates Certificate. 
          I am currently a senior ungraduate student studying 
          Computer Science for a Bachelors Degree at University of
          California, Santa Cruz. Currently looking for 
          a Software Engineer internship or full-time for the coming 2021 summer. 
          </p><br></br>
        </div>

        <div className = "container">
          <div className = "row">
              <div className = "col-6">
              <p  className = "float-right" style = {{ width: "350px"}}>
              <br></br>
                Outside of coding, I love playing any sort of competitive and strategic games.
                I love TCG games such as Legends of Runeterra and Hearthstone. I also really enjoy fighting games with its high-skill
                executions and mind games. Right now I am really looking forward to Guilty Gear Strive coming out. I am also really into Smash Bros. 
                I am also having a chess phase right now where I am trying to learn mid game to the best of my ability.
              </p>
              </div>
              <div className = "col-6"> 
                <Image src = {pfp} style = {{height:"600px"}}/>
              </div>
          </div>
        </div>
      </div>

      <div className= "education" id="education">
            <div style = {{fontSize: "50px", fontWeight: "bold",  paddingBottom: "100px", textAlign: "left"}}>
                <header style = {{color: "white"}}>EDUCATION</header>
            </div>
            <div className = "center" style = {{width: "100%", height: "600px", backgroundImage: `url(${marble})`, justifyContent: "center", alignItems: "center"}}>
              <div style = {{width: "80%", height: "500px", margin: "0 auto", marginTop: "50px", textAlign: "left"}}>
                  <p>
                    <br></br>
                    I started off going to community college at De Anza College. Some of the best and most passionate professors I have ever for 
                    programming and physics where from De Anza College, and it is definitely 
                    the community college I would recommend if you ever go that route. I then went to University of California, Santa Cruz for my bachelors in Computer Science.
                    I can say that the people in this school are some of the most humblest people I have ever met, and it is a really great community if you want a 
                    fun college experience. Not only that, the school is in the middle of the forest, so if you love the environment like me this is the place. <br></br><br></br><br></br><br></br>

                    University of California, Santa Cruz              Expected: 07/2021 <br></br>
                    Bachelor of Arts, Computer Science              Honor's Society <br></br> <br></br> 
                    De Anza College 09/2016 - 06/2019              GPA: 3.81  <br></br><br></br><br></br>
                    Relevant Coursework: Data Structures and Algorithms, Operating Systems, Compilers, Machine Learning, Natural Language Processing, Computer Networking, Database Systems,
                    Computer Systems, Technical Writing for Computer Science
                  </p>
              </div>
            </div>
      </div>

      <div>
        <div className = "experiences">
        
        </div>
      </div>

      <div className="projects" id="projects">
        <div style = {{fontSize: "50px", fontWeight: "bold",  paddingBottom: "100px"}}>
                <header>PROJECTS</header>
        </div>
        <CardDeck>
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
      </div>
      <div className = "hobbies" id = "hobbies">
      <div style = {{fontSize: "50px", fontWeight: "bold",  paddingBottom: "100px", color: "white", textAlign: "left"}}>
                <header>HOBBIES</header>
      </div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={molly}
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
              src={bay}
              alt="Second slide"
              height = "1000px"
            />
            <Carousel.Caption style = {{color: "black", fontWeight: "bold", fontSize: "24px"}}>
              <h1>Sailing</h1>
              <p>I love going sailing and just relaxing with my family at sea. Sadly its so cold to sail in California for most of the year. </p>
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
      </div>
    </div>
  );
}

export default App;
