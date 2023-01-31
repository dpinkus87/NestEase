import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function ProductCard(props) {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={img.props}></img>
            <span class="card-title">{props.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">Add to Cart</i>
            </a>
          </div>
          <div class="card-content">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
