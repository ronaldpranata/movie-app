
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../actions";

import HeaderContainer from './HeaderContainer'
import Movie from '../components/Movie'
import _ from 'lodash';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.actions=this.props.actions;
   

  }


  componentDidMount() {
    this.actions.getAllData();
  }


  render() {
    let movies= this.props.movies ? this.props.movies.movies.entries : [];
    
    return (<div>
      <HeaderContainer title="DEMO Streaming" subTitle="Popular Movies" />
      {
        _.map(movies,(o)=>{
          return <Movie picture={o.picture} title={o.title } />
        })
    }
    </div>)
  }

}


const mapStateToProps = (state) => ({
  movies:state.movies
})


function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

