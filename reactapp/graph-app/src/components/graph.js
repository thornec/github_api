import React from "react";
import './graph.scss';

class graph extends React.Component {

    state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: root
      }
    
      render() {
        return (
          <div className="graph ">
          </div>
        );
    }
}
       
    export default graph;