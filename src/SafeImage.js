import React, {useState, useEffect} from 'react';

export default function SafeImage(props) {
    return(
        <img src={ props.src } alt={ props.alt } referrerPolicy="no-referrer"/>
    )
}
