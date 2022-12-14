import React, { useState } from 'react';
import quotes from '../quotes.json';
import ButtonClick from './ButtonClick';

const QuoteBox = () => {
    let mRandom = Math.floor(Math.random() * quotes.length);
    const [number, setNumber] = useState(mRandom);

    const increment = () => {
        const anotherRandom = Math.floor(Math.random() * quotes.length);
        setNumber(anotherRandom);
    }

    const colors = ["#d65db1", "#845ec2", "#ff6f91", "#f9f871", "#00c9a7", "#845ec2", "#4ffbdf", "#c031b5", ]
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColorIndex]}`;
        
    return (
        <div>
            <div className='card' style={{ color: colors[randomColorIndex] }}>
                <h2> <i className="fa-solid fa-quote-left"></i>  {quotes[number].quote}</h2>
                <ul>
                    <li>{quotes[number].author}</li>
                </ul>
                <div>
                    <ButtonClick 
                        colors = {colors}
                        randomColorIndex = {randomColorIndex}
                        sStyles = {document.body.style}
                        number = {number}
                        increment = {increment}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;