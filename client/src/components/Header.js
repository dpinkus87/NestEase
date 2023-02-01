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

// const Header = () => {
//   return (
//     <header style={styles.header}>
//       <div>
//         <ul>
//           <li>
//             <Link className="text-dark" to="/">
//               <h3 style={{ fontSize: "1.25rem" }}>Website Name</h3>
//             </Link>
//           </li>
//           <li>
//             <Link className="text-dark" to="/market">
//               <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
//                 Products
//               </h3>
//             </Link>
//           </li>
//           <li>
//             <Link className="text-dark" to="/services">
//               <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
//                 Services
//               </h3>
//             </Link>
//           </li>
//           <li>
//             <Link className="text-dark" to="/login">
//               <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
//                 Login
//               </h3>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

export default function Header() {


    return (
        <div>
            <Navbar />
        </div>
    )
}
