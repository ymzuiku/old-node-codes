import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Icon } from './Icon';

// 在项目初始化的时候设定默认样式
/*
Checkbox.defaultProps = {
  icons: [
    '/icon/checkbox.svg',
    '/icon/checkbox_d.svg',
    '/icon/checkbox_l.svg',
  ],
  width: '0.3rem',
};
*/
class Checkbox extends PureComponent {
  static defaultProps = {
    style: {},
    checked: false,
    width: undefined,
    height: undefined,
    scale: 1,
    vin: () => {},
    vout: () => {},
    vup: () => {},
    vdown: () => {},
    onClick: () => {},
    canTouch: true,
    icons: [
      '/icon/checkbox.svg',
      '/icon/checkbox_d.svg',
      '/icon/checkbox_l.svg'
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      checkNumber: 0
    };
  }
  handleClick = () => {
    this.props.onClick();
    this.oldCheckNumber = this.state.checkNumber === 1 ? 0 : 1;
    this.setState({
      checkNumber: this.oldCheckNumber
    });
  };
  handleVin = () => {
    if (this.state.checkNumber === 1) {
      return;
    }
    this.oldCheckNumber = this.state.checkNumber;
    this.setState({
      checkNumber: 2
    });
  };
  handleVout = () => {
    if (this.state.checkNumber === 1) {
      return;
    }
    this.setState({
      checkNumber: this.oldCheckNumber
    });
  };

  render() {
    const {
      style,
      checked,
      icons,
      width,
      height,
      vin,
      vout,
      vup,
      vdown,
      onClick,
      ...rest
    } = this.props;
    let { checkNumber } = this.state;
    const oldCheckNumber = checkNumber === 2 ? 2 : 0;
    checkNumber = checked ? 1 : oldCheckNumber;
    return (
      <Button
        clear
        onClick={this.handleClick}
        vin={this.handleVin}
        vout={this.handleVout}
        vup={this.handleVup}
        vdown={this.handleVdown}
        {...rest}
      >
        <Icon width={width} height={height} now={checkNumber} icons={icons} />
      </Button>
    );
  }
}

export { Checkbox as default, Checkbox };
