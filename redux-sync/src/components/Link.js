import React, { PureComponent } from 'react';
/**
 *
 *
 * @param {any} { active, children, onClick }
 * @returns <a />
 */
export const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};
