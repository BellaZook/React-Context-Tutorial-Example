import React from 'react';
import MyContext from './files/MyContext';
import MyApp from "./files/MyApp";
import MyFirstChild from './files/MyFirstChild';

const Instrctions = () => {
    return (
        <div>
            <MyContext />
            <MyApp />
            <MyFirstChild />
        </div>
    )
}

export default Instrctions;