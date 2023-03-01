import React from 'react';

import DraggableImageWithCaption from './DraggableImageWithCaption';

import RoseImage from './img/rose.png';
import SamImage from './img/sam.png';
import KitImage from './img/kit.png';
import GeorgeImage from './img/george.png';
import CamilleImage from './img/camille.jpg';
import SunnyImage from './img/sunny.jpg';
import PennyImage from './img/penny.png';
import AlexisImage from './img/alexis.jpg';

const DraggableImageGallery = () => {

    const centerY = window.innerHeight / 2 - 50; // 50px above the center
    const centerX = window.innerWidth / 2 - 50;

    const rowOneOffset = -400
    const rowTwoOffset = 300

    const xOffset = -25

    return (
    <div>
        
        {/* First Row! */}
        <DraggableImageWithCaption
            src={AlexisImage}
            alt="Alexis Face"
            name="Alexis"
            quote="Happy Birthday my love! I can't wait to go on holiday with u xx"
            initialX={centerX - 300 + xOffset}
            initialY={centerY + rowOneOffset} 
        />

        <DraggableImageWithCaption
            src={SamImage}
            alt="Sam Face"
            name="Sam"
            quote="happy birthday to the best lil commie"
            initialX={centerX - 150 + xOffset}
            initialY={centerY + rowOneOffset}      
        />

        

        <DraggableImageWithCaption
            src="https://w7.pngwing.com/pngs/604/713/png-transparent-duck-cartoon-happy-duck-painted-animals-hand.png"
            alt="Example Image"
            name="Charlotte"
            quote="n/a"
            initialX={centerX + xOffset}
            initialY={centerY + rowOneOffset}
        />

        <DraggableImageWithCaption
            src={PennyImage}
            alt="Penny Face"
            name="Penny"
            quote="Dont get lost in the hall of mirrors"
            initialX={centerX + 150 + xOffset}
            initialY={centerY + rowOneOffset}
        />

        <DraggableImageWithCaption
            src={CamilleImage}
            alt="Camille Face"
            name="Camille"
            quote="Hi Allie, HAPPY BIRTHDAY🎉🥳!! I hope you're recovering well ! Take care, see you soon xoxoxo            "
            initialX={centerX + 300 + xOffset}
            initialY={centerY + rowOneOffset}
        />

        {/* Second Row! */}
        <DraggableImageWithCaption
            src={SunnyImage}
            alt="Sunny Face"
            name="Sunny"
            quote='Happy Birthday comrade! I look forward to our continued perseverance against the capitalist scum of the west -Love Sunny xxx'
            initialX={centerX - 300 + xOffset}
            initialY={centerY + rowTwoOffset}
        />

        <DraggableImageWithCaption
            src="https://w7.pngwing.com/pngs/604/713/png-transparent-duck-cartoon-happy-duck-painted-animals-hand.png"
            alt="Example Image"
            name="Jessie"
            quote="tw: imma be sappy
            you're incredibly sweet, naturally just lovely, and you've been so kind to and patient with me just so much, honestly you're wonderful ^^
            
            I hope you enjoy your burfdayyy!!
            you deserve nice things 🥰
            
            ur great ❤️
            
            Jamie 💋"
            initialX={centerX - 150 + xOffset}
            initialY={centerY + rowTwoOffset}
        />

        <DraggableImageWithCaption
            src={RoseImage}
            alt="Rose Face"
            name="Rose"
            quote="Happy birthday Allie! I’m really glad your surgery went well and I hope the rest of your recovery goes smoothly and quickly. And I hope this year is filled with love and joy ❤️"
            initialX={centerX + xOffset}
            initialY={centerY + rowTwoOffset}
        />

        <DraggableImageWithCaption
            src={KitImage}
            alt="Kit Face"
            name="Kit"
            quote="Happy birthday Allie! I hope Hamilton or Avatar 2 or whatever theatre you went to was good! Hopefully we all can do pride again this year 🏳️‍🌈 🎉"
            initialX={centerX + 150 + xOffset}
            initialY={centerY + rowTwoOffset}
        />

        <DraggableImageWithCaption
            src={GeorgeImage}
            alt="George Face"
            name="George"
            quote="Happy bday Allie hope you are well!"
            initialX={centerX + 300 + xOffset}
            initialY={centerY + rowTwoOffset}
        />



    </div>
    );
};

export default DraggableImageGallery;
