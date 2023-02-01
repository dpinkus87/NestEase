import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
  color: {
      background: '#051923'
  }
}

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer class="page-footer" style={styles.color}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thank You For Choosing NestEase!</h5>
                <p class="grey-text text-lighten-4">Rental Services are a quick and convienent way to make some extra money.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Developers</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/alexanderlbarlow/">Alexander Barlow</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Dylan Pinkus</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jamie Harris</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2023 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">ADD REPO LINK VIA FAVICON</a>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
