import React, {Component} from 'react';

class Filter extends Component {

  onInputChange = (e) => {
    this.props.filter(e.target.value)
  }


  render() {
    return (<div>

      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Search By Tag</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='text' onChange={this.onInputChange}/>
      </div>

    </div>)
  }

}

export default Filter
