import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

//可以通过 this.state.props.来获取的到兑现
function mapStateToProps(state){
  return{
    posts:state.posts,
    comments: state.comments
  }
}

//可以通过 this.state.props. 来获取的到方法
function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispachToProps)(Main);

export default App;
