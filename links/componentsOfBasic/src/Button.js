import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function version() {
  const u = navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
    qq: u.match(/\sQQ/i) === ' qq' // 是否QQ
  };
}

const browser = {
  versions: version(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

let isTouch;
if (
  browser.versions.mobile ||
  browser.versions.ios ||
  browser.versions.android ||
  browser.versions.iPhone ||
  browser.versions.iPad
) {
  isTouch = true;
} else {
  isTouch = false;
}

class Button extends PureComponent {
  static defaultProps = {
    to: undefined,
    vin: () => {},
    vout: () => {},
    vup: () => {},
    vdown: () => {},
    onClick: () => {},
    style: {},
    canTouch: true,
    clear: false
  };
  handleClick = () => {
    const { to, onClick, canTouch } = this.props;
    if (canTouch) {
      onClick();
      if (to) {
        global.location.href = to;
      }
    }
  };
  handleVin = event => {
    this.props.vin();
    event.preventDefault();
  };
  handleVout = event => {
    this.props.vout();
    event.preventDefault();
  };
  handleVup = event => {
    this.props.vup();
    event.preventDefault();
  };
  handleVdown = event => {
    this.props.vdown();
    event.preventDefault();
  };
  render() {
    const {
      to,
      canTouch,
      onClick,
      style,
      vin,
      vout,
      vup,
      vdown,
      clear,
      ...rest
    } = this.props;
    let defaultStyle = {};
    if (clear) {
      defaultStyle = {
        cursor: 'pointer',
        backgroundColor: 'rgba(0,0,0,0)',
        border: '0px'
      };
    }
    if (!isTouch) {
      return (
        <button
          style={{
            ...defaultStyle,
            ...style
          }}
          onClick={this.handleClick}
          onMouseEnter={this.handleVin}
          onMouseLeave={this.handleVout}
          onMouseDown={this.hanlleVdown}
          onMouseUp={this.handleVup}
          {...rest}
        />
      );
    }
    return (
      <button
        style={{
          ...defaultStyle,
          ...style
        }}
        onClick={this.handleClick}
        onTouchStart={this.handleVin}
        onTouchEnd={this.handleVout}
        onTouchCancel={this.handleVout}
        {...rest}
      />
    );
  }
}

export { Button as default, Button };
