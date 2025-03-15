import React from "react";
import "./LoaderLogo.css";
import logo from "../../assets/logo/logo-02.png";
class LogoLoader extends React.Component {
  render() {
    return <img src={logo} alt="logo" id="logo" />;
  }
}
export default LogoLoader;
