import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Band bands={this.props.bands}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
