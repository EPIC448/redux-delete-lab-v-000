import React from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         Band Component
//       </div>
//     );
//   }
// };

const Band = props => {
  // console.log("props", props)... This display to the dom.
  //  This just displays the bands
  return (
    <div>
      <ul><li>{props.band.name}</li></ul>
      <button onClick={() => props.delete(props.band.id)}>DELETE_BAND</button>
    </div>
  )
}

export default Band;
