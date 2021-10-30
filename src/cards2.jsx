import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "./images/forest14.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Sap from "./images/forest.jpg";
import Gaurav from "./images/pexels-photo-207247.jpeg";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Rahul from "./images/Nature-quotes-2-768x768.png";
import Jagat from "./images/img.jpg";
import Ankit from "./images/image1.jpg";
import Button from 'react-bootstrap/Card';
import Sum from "./images/pexels-photo-207247.jpeg";

const Ashoak = ()=>{
    return(
      <>
         <center>
      <h1><i>Designer Gaurav joshi</i></h1>
     
      <div className="gaurav8">
      <img
      className="d-block w-100"
      src={yoo}
      alt="First slide"
      
    /> 
      </div>
      </center>
<Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><b>Home</b></Nav.Link>
        <Nav.Link href="#link"><b>Abought</b></Nav.Link>
        <Nav.Link href="#link"><b>Meet the team</b></Nav.Link>
        <Nav.Link href="#link"><b>Contact us</b></Nav.Link>
        <Nav.Link href="#link"><b>Services</b></Nav.Link>
        <Nav.Link href="#link"><b>Special offer</b></Nav.Link>
        <Nav.Link href="#link"><b>Set relation</b></Nav.Link>
        <Nav.Link href="#link"><b>Set advice</b></Nav.Link>
        <Nav.Link href="#link"><b>Boarding</b></Nav.Link>
        <Nav.Link href="#link"><b>Take a tour</b></Nav.Link>
        <Nav.Link href="#link"><b>Employment</b></Nav.Link>
        <Nav.Link href="#link"><b>FAQ</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Sap}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Our nature</h3>
      <p>Nothing compares to nature‘s beauty, as these
           famous quotes about nature agree. From spring‘s
            hopeful new blooms and fall’s exquisite array of
             colors to winter’s magic and summer’s energy, 
             each season abounds with different types of natural
              beauty to explore and admire. However, after being
               totally cooped up during COVID-19 quarantine for so 
               many weeks now, you might be starting to forget what
                being in nature even feels like—which is where these
                 best nature quotes come in!

From enchanting nature’s beauty quotes that
 evoke visions of lush meadows full of brilliantly-colored
  flowers or dense forests with sky-high trees to famous quotes
   about nature’s ever-present—and absolutely fundamental—role
    in our lives, these 101 quotes about nature will have you
     itching to get off your couch and get outside. For famous
      quotes about nature, we have them here!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Gaurav}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>101 Nature Quotes</h1>
      <p>1. In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful. –Alice Walker

2. Forget not that the earth delights to feel your bare feet and the winds long to play with your hair. —Khalil Gibran

3. Look deep into nature, and then you will understand everything better. —Albert Einstein

4. Heaven is under our feet as well as over our heads. —Henry David Thoreau

5. To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug. —Helen Keller

6. We don’t inherit the earth from our ancestors, we borrow it from our children. —Native American proverb</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>Inspiring nature sayings to lift your spirits</h1>
      <p>The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere where they can be quite alone with the heavens, nature and God. Because only then does one feel that all is as it should be and that God wishes to see people happy, amidst the simple beauty of nature. As longs as this exists, and it certainly always will, I know that then there will always be comfort for every sorrow, whatever the circumstances may be. And I firmly believe that nature brings solace in all troubles.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1>Beauty and the Love of Nature Quotes</h1>

Louie Schwartzberg, known as Louis Schwartzberg, is an American director, producer, and filmmaker. Schwartzberg is a pioneer of high-end time-lapse cinematography and is the only cinematographer in the world to shoot time-lapse films 24 hours a day, 7 days a week for over four decades. Schwartzberg is a visual artist focused on mysteries and human connections with the subtleties of nature.

Nature quotes can inspire us to protect what we fall in love with. Schwartzberg believes nature seduces us as a way of fighting for her survival. Nature wants humans to fall in love with her so that they can all protect her. In essence, if we’re going to keep the beauty we see around us, we need to love nature and protect her.
<CardGroup>
  <Card>
    <Card.Img variant="top" src={ Ankit} />
    <Card.Body>
      <Card.Title>Inspiring nature sayings to lift your spirits</Card.Title>
      <Card.Text>
      Irish physicist, John Joly, was a geology professor at Dublin University, known for his use of radiotherapy to treat cancer. The industry also knows him for uranium-thorium dating, a procedure used to estimate the age of geological objects and events. Joly published over 270 scientific books and journals in his lifetime and was the first to explain ice’s slipperiness.

We can all agree that the sea is one of the most beautiful sights of nature. Looking at the tall mountains, rivers, and oceans, you can't help but be impressed by their beauty. Joly’s nature quote encourages us to stop and appreciate the sea and everything underneath, for nature is inarguably beautiful
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Jagat} />
    <Card.Body>
      <Card.Title><h4>Quotes about the presence of nature and its persistence</h4></Card.Title>
      <Card.Text>
      When all the world appears to be in a tumult, and nature itself is feeling the assault of climate change, the seasons retain their essential rhythm. Yes, fall gives us a premonition of winter, but then, winter, will be forced to relent, once again, to the new beginnings of soft greens, longer light, and the sweet air of spring.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Rahul} />
    <Card.Body>
      <Card.Title>Quotes about what we can learn from nature</Card.Title>
      <Card.Text>
      Radhanath Swami has been a bhakti-traditional monk for nearly 50 years, dedicating his life to helping people find meaning while leading social initiatives from his Mumbai base. Swami is the author of the books The Journey Home and The Journey Within (both on Amazon) and is the inspiration behind numerous social-aid initiatives across India like the ISKCON’s free meals for over 1million school kids.

Nature has a language. Only a peaceful mind and sincere observers can understand her language. In this nature quote, Swami opines that nature speaks through her outlets. The animals in their natural settings.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

{/* card 3 */}
<center>
<Card  style={{ width: '18rem' }} className="gaurav">
  <Card.Img variant="top" src={Sum} />
  <Card.Body>
    <Card.Title><h1>Nature quotes related to the heart, soul, and the mind</h1></Card.Title>
    <Card.Text>
    Nature is not always tricked in holiday attire, but the same scene which yesterday breathed perfume and glittered as for the frolic of the nymphs, is overspread with melancholy today. Nature always wears the colors of the spirit. To a man laboring under calamity, the heat of his own fire hath sadness in it.
    Humans and their impacts
This section of nature quotes inspires us to look at our actions’ impact on our natural surroundings. We’re but here for a short time on this earth. We can choose to save wildlife and protect the biodiversity we have for future generations. As the nature quotes below suggest, we’d argue that our mutual interest is to do nothing other.


    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</center>
<h1>Nature</h1>
<p className="gaurav1">Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]

The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since. During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[5][6] With the Industrial revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the presocratic one, got reborn at the same time, especially after Charles Darwin.[1]

Within the various uses of the word today, "nature" often refers to geology and wildlife. Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth. It is often taken to mean the "natural environment" or wilderness—wild animals, rocks, forest, and in general those things that have not been substantially altered by human intervention, or which persist despite human intervention. For example, manufactured objects and human interaction generally are not considered part of nature, unless qualified as, for example, "human nature" or "the whole of nature". This more traditional concept of natural things that can still be found today implies a distinction between the natural and the artificial, with the artificial being understood as that which has been brought into being by a human consciousness or a human mind. Depending on the particular context, the term "natural" might also be distinguished from the unnatural or the supernatural.[1]</p>
<h1>Earth</h1>
<p className="gaurav3">Earth is the only planet known to support life, and its natural features are the subject of many fields of scientific research. Within the solar system, it is third closest to the sun; it is the largest terrestrial planet and the fifth largest overall. Its most prominent climatic features are its two large polar regions, two relatively narrow temperate zones, and a wide equatorial tropical to subtropical region.[7] Precipitation varies widely with location, from several metres of water per year to less than a millimetre. 71 percent of the Earth's surface is covered by salt-water oceans. The remainder consists of continents and islands, with most of the inhabited land in the Northern Hemisphere.

Earth has evolved through geological and biological processes that have left traces of the original conditions. The outer surface is divided into several gradually migrating tectonic plates. The interior remains active, with a thick layer of plastic mantle and an iron-filled core that generates a magnetic field. This iron core is composed of a solid inner phase, and a fluid outer phase. Convective motion in the core generates electric currents through dynamo action, and these, in turn, generate the geomagnetic field.

The atmospheric conditions have been significantly altered from the original conditions by the presence of life-forms,[8] which create an ecological balance that stabilizes the surface conditions. Despite the wide regional variations in climate by latitude and other geographic factors, the long-term average global climate is quite stable during interglacial periods,[9] and variations of a degree or two of average global temperature have historically had major effects on the ecological balance, and on the actual geography of the Earth.[10][11]</p>
<h1>Geology</h1>
<p className="gaurav2">Geology is the science and study of the solid and liquid matter that constitutes the earth. The field of geology encompasses the study of the composition, structure, physical properties, dynamics, and history of Earth materials, and the processes by which they are formed, moved, and changed. The field is a major academic discipline, and is also important for mineral and hydrocarbon extraction, knowledge about and mitigation of natural hazards, some Geotechnical engineering fields, and understanding past climates and environments.
The geology of an area evolves through time as rock units are deposited and inserted and deformational processes change their shapes and locations.

Rock units are first emplaced either by deposition onto the surface or intrude into the overlying rock. Deposition can occur when sediments settle onto the surface of the Earth and later lithify into sedimentary rock, or when as volcanic material such as volcanic ash or lava flows, blanket the surface. Igneous intrusions such as batholiths, laccoliths, dikes, and sills, push upwards into the overlying rock, and crystallize as they intrude.

After the initial sequence of rocks has been deposited, the rock units can be deformed and/or metamorphosed. Deformation typically occurs as a result of horizontal shortening, horizontal extension, or side-to-side (strike-slip) motion. These structural regimes broadly relate to convergent boundaries, divergent boundaries, and transform boundaries, respectively, between tectonic plates.
</p>
      </>


    )
}
export default  Ashoak;
