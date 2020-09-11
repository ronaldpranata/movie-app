
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../actions";

import HeaderContainer from './HeaderContainer'
import MovieCategoryContainer from './CategoryContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.actions=this.props.actions;
    this.state = {
      categories:[]
    };

  }


  componentDidMount() {
    this.actions.getAllData();
  }


  render() {
    let categories= this.props.movies ? this.props.movies.categories : [];
    console.log(this.props)
    return (<div>
      <HeaderContainer title="DEMO Streaming" subTitle="Popular Titles" />
      <MovieCategoryContainer categories={categories}  />
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
)(App);

