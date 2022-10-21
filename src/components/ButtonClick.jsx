import React from 'react';

const ButtonClick = () => {

    const increment = ( ) => {
        const anotherRandom = Math.floor(Math.random()* quotes.length);
        setNumber(anotherRandom);

    } 

    return (

        <div>
            <button onClick={increment}>clic</button>   
        </div>
    );
};

export default ButtonClick;