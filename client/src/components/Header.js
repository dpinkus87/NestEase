import React from "react";
import Navigation from "./Navbar";
import Products from "../pages/Product";
import Services from "../pages/Services";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import CheckoutPage from "../pages/CheckoutPage";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const styles = {
  header: {
    background: "#51923",
  },
};

export default function Header() {


    return (
        <div>
            <Navbar />
        </div>
    )
}
