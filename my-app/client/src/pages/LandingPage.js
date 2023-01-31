import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
    h1: {
        color: '#FF7F50',
        fontFamily: 'Hanalei Fill',
        padding: '50px',
        textAlign: 'left',

    }
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems, options);
  });

export default function LandingPage() {
  return (
    <div>
      <div className="container">
        <h1 className='font-link' style={styles.h1}>Renting Made Easy</h1>
        <p>
          Login or Sign up to rent products or services near you! Want to start
          making some extra dough! You too can add your items to the market
          place.
        </p>
        <img src="Hotpot.png"></img>
      </div>
    </div>
  );
}
