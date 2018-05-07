import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

global.__nolog = false;
let num = 0;
const addLog = (args, list, cb) => {
  let strings = args;
  num += 1;
  let defSty = {
    pointerEvents: 'none',
    margin: 4,
    marginTop: 0,
    padding: 2,
    wordBreak: 'break-all',
    backgroundColor: 'rgba(0,0,0,0.45)',
    color: 'rgba(255,255,255,1)',
    fontSize: 12
  };

  // 如果第一个参数里面有sty这个属性，则使用第一个参数作为样式
  if (
    Object.prototype.toString.call(strings[0]) === '[object Object]' &&
    strings[0].sty
  ) {
    const { sty, ...newSty } = strings[0];
    defSty = {
      ...defSty,
      ...newSty
    };
    strings = strings.pop();
  }
  try {
    strings = JSON.stringify(strings);
    strings = strings
      .replace(/\\/g, '')
      .replace(/\\n/g, '\\n')
      .replace(/\\r/g, '\\r'); // 去除换行
  } catch (err) {
    /* eslint no-console:0 */
    console.log(err);
  }
  list.push([defSty, num, strings, 0]);
  if (cb) {
    cb([...list]);
  }
};

// 记录组件还未渲染之前的log
const __firstList = [];
global.__log = (...args) => {
  addLog(args, __firstList);
};

class LogPlan extends PureComponent {
  static defaultProps = {
    style: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      list: __firstList
    };
    // 记录运行中的log
    global.__log = (...args) => {
      addLog(args, this.state.list, list => {
        this.setState({
          list
        });
      });
    };
  }
  render() {
    const { list } = this.state;
    if (global.__nolog || list.length === 0) {
      return <div />;
    }
    return (
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 16,
          width: '100%',
          ...this.props.style
        }}
      >
        {list.map(v => {
          const v3 = v[3] ? v[3] : '';
          return (
            <div style={v[0]} key={v[1]}>
              {v[1]}:{v[2]}
              {v3}
            </div>
          );
        })}
      </div>
    );
  }
}
LogPlan.propTypes = {
  style: PropTypes.shape({})
};

export { LogPlan as default, LogPlan };
