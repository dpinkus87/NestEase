import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import ProfilePageMain from "../components/Profile/Profile";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { borderRadius, width } from "@mui/system";

const styles = {
  height: {
    height: "100vh",
    padding: "2px",
  },
  btn: {
    fontSize: "1.25rem", 
    fontWeight: "700", 
    color: "#00A6FB",
    background: "#051923",
    padding: '5px',
    width: '14%',
    boxShadow: "5px 5px 5px #00A6FB"
    // border: '2px solid #000',
  },
}

export default function ProfilePage() {
  return (
    <div style={styles.height}>
      <ProfilePageMain />
      <Link  to="/addproduct">
        <button style={styles.btn} className="nav glow">
          Add your Product!
        </button>
      </Link>
    </div>
  );
}
