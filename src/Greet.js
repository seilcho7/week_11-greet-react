import React from 'react';

function lower(aName) {
    return aName.toLowerCase();
}

function leet(word) {
    let leetWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "l") {
            leetWord += "1";
        } else if (word[i] === "e") {
            leetWord += "3";
        } else if (word[i] === "t") {
            leetWord += "7";        
        } else {
            leetWord += word[i];
        }
    }
    return leetWord;
}

function LowerCase(props) {
    return (
        <h1>
            Hello {props.name ? lower(props.name) : "You"} 
        </h1>
    )
}

function Leet(props) {
    return (
        <h1>
            {props.leet ? leet(props.leet) : "Nothing"}
        </h1>

    );
}

export {
    LowerCase,
    Leet
}