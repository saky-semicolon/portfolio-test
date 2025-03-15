import React, { Component } from "react";
// import React, {useRef,useEffect } from "react";
// import lottie from 'lottie-web';
import data from "./mentoring.png";
// for animated svgs use json file
// export default function MentoringImg(){
//     const container = useRef(null)
//     useEffect(() => {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./aiml.json')
//       })
//     }, [])
//     return (
//       <div className="App">
//         <div className="container" ref={container}></div>
//       </div>
//     );

// }

// for static svgs
class MentoringImg extends Component {
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

export default MentoringImg;
