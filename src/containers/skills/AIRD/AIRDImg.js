import React, { Component } from "react";
// import {useRef,useEffect } from "react";
// import lottie from 'lottie-web';
import data from "./aird.png";

//for animated svgs use json file
// export default function DataScienceImg(){
//     const container = useRef(null)
//     useEffect(() => {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./data.json')
//       })
//     }, [])
//     return (
//       <div className="App">
//         <div className="container" ref={container}></div>
//       </div>
//     );

// }

//for static svgs
class AIRDImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src={data} alt="" width="450" />
        </div>
      </div>
    );
  }
}

export default AIRDImg;
