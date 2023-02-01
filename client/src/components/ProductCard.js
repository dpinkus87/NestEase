import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const styles = {
  color: {
    background: '#003554'
  }
}


const ProductCard = ({
  productName,
  productDescr,
  productPrice,
  showName = true,
  showDescr = true,
  showPrice = true,
}) => {
  if (!productName.length) {
    return <h3>No Products Available</h3>;
  }
  return (
    <div class="row" style={styles.color}>
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="" alt="IMG"></img>
            <span class="card-title"></span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">Add to Cart</i>
            </a>
          </div>
          <div class="card-content">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
