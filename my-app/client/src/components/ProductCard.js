import React from 'react';

export default function ProductCard(props) {
    return(
        <div>
            <div>
            <img>
            {props.img}
            </img>
            </div>
            <div>
                <h2>
                {props.description}
                </h2>
                <h1>
                ${props.price}
                </h1>
                <button>    
                
                </button>
            </div>
        </div>
    );
}