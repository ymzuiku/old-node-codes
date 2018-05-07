import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  static defaultProps = {
    width: undefined,
    height: undefined,
    now: 0,
    scale: 1
  };
  render() {
    const { style, icons, width, height, now, scale, ...rest } = this.props;

    return (
      <div
        style={{
          width: width || height,
          height: height || width
        }}
        {...rest}
      >
        {this.props.icons.map((icon, index) => (
          <div
            key={icon}
            style={{
              position: 'absolute',
              width: width || height,
              height: height || width,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundImage: `url(${icon})`,
              transform: `scale(${scale}, ${now === index ? scale : 0})`,
              ...style
            }}
          />
        ))}
      </div>
    );
  }
}

Icon.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  now: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  scale: PropTypes.number
};

export { Icon as default, Icon };
