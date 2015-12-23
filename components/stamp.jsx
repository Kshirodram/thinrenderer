import React from 'react';
import superagent from 'superagent';
import bluebird from 'bluebird';

export default class Stamps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stampsComponentData: []
    };
    let scope = this;

    this._getData("http://localhost:3000/data/single_stamp.json")
      .then(function(data){
        scope.setState({stampsComponentData : data});
      }, function(err){
        console.log(err);
    });
  }

  _getData(url) {
    return new bluebird(function(resolve, reject){
      superagent
        .get(url)
        .end(function(err, res) {
            let data = res.body;
            resolve(data['module']['resource']);
        });
    });
  }

  render() {
    let componentType = "";
    try {
      switch (this.state.stampsComponentData.prominence) {
      case 'HIGH' :
        componentType = 'double';
        break;
      case 'LOW' :
        componentType = 'single';
        break;
      default :
        componentType = "";
      }
    } catch (e) {
      console.log("Error while retrieving component type " + e);
    }
    let doubleStampIcon = (componentType == 'double')? <div className="double-stamp-icon" />: [];
    if(this.state.stampsComponentData.length == 0){
      return (<div></div>);
    }else {
    return (
    <a href= {this.state.stampsComponentData.linkText} className= {componentType + "-stamp"}img-responsive  style={{
          backgroundImage: 'url(\'' + this.state.stampsComponentData.image + '\')',
          backgroundPosition:'0% 50%'
        }} >
      <div className="st-overlay" style= {{backgroundColor: this.state.stampsComponentData.captionBackgroundColour}}>
          <div className="lbl">{this.state.stampsComponentData.caption}</div>
          {doubleStampIcon}
      </div>
    </a>
  );
  }
  }
};
