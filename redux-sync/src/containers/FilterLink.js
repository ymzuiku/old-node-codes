import React, { PureComponent } from 'react';
import { Link } from '../components/Link';
import { connect } from 'react-redux';
import { actions } from '../status';
/**
 * 
 * 
 * @param {any} state 状态
 * @param {any} ownProps 其他props
 * @returns 
 */
function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}
/**
 * 
 * 
 * @param {any} dispatch 
 * @param {any} ownProps 
 * @returns 
 */
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(actions.setVisibilityFilter(ownProps.filter));
    }
  };
}

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
