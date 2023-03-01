import React from 'react';
import altImage from './img/allie/alt.jpg';
import gremlinImage from './img/allie/gremlin.jpg';
import elevatorImage from './img/allie/elevator.jpg';
import kissImage from './img/allie/kiss.jpg';
import pinkImage from './img/allie/pink.jpg';
import streetImage from './img/allie/street.jpg';
import iceImage from './img/allie/ice.jpg';
import './BigImages.css';

const BigImages = () => {

  const topPX = 700
  const lineIntervalPX = 30

  return (
    <div>   
        <div className="container" style={{ marginTop: topPX}}>
            <figure>
                <img src={altImage} className="image" alt="Allie dressing in alternative fashion"  />
                <figcaption>Allie dressed in alternative fashion</figcaption>
            </figure>
            <div className="gap" />
            <figure>
                <img src={gremlinImage} className="image" alt="Allie crouched like a gremlin"/>
                <figcaption>Allie crouched like a gremlin</figcaption>
            </figure>
        </div>

        <div className="container" style={{ marginTop: lineIntervalPX}}>
            <figure>
                <img src={elevatorImage} className="image" alt="Allie in an elevator"  />
                <figcaption>Allie in an elevator</figcaption>
            </figure>
            <div className="gap" />
            <figure>
                <img src={streetImage} className="image" alt="Allie on the street"  />
                <figcaption>Allie on the street</figcaption>
            </figure>
            <div className="gap" />
            <figure>
                <img src={pinkImage} className="image" alt="Allie in pink lighting"/>
                <figcaption>Allie in pink lighting</figcaption>
            </figure>
        </div>
        <div className="container" style={{marginTop: lineIntervalPX, display: 'flex', justifyContent: 'center'}}>
            <figure>
            <img src={iceImage} className="image" alt="Allie in the ice" style={{ maxWidth: '100%', height: 'auto', maxHeight: '700px' }} />
                <figcaption>Allie and Alexis on the ice</figcaption>
            </figure>
        </div>
    </div>
  );
};

export default BigImages;
