import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import ProfilePageMain from "../components/Profile/Profile";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const styles = {
  height: {
    height: "100vh",
    padding: "2px",
  },
};

export default function ProfilePage() {
  return (
    <div style={styles.height}>
      <ProfilePageMain />
      <Link className="nav-items glow" to="/addproduct">
        <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#003554" }}>
          Add your Product!
        </h3>
      </Link>
    </div>
  );
}
