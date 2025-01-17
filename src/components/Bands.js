import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Band from './Band'
// import { throws } from 'assert';

class Bands extends Component {

  renderBands = () => {
    // pay attention to the IF statement here. iquick commom with redux..
    if (this.props.bands && this.props.bands.map) {
    return   this.props.bands.map(band => < Band delete={this.props.deleteBand} key={band.id} band={band} />)
    }
  }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
          {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
//  Bands is come from here because it in the store....  And it then used.

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type:"DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Bands)
