import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './blah.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return (
    <div>
      <div id='test-div'>{children || 'laika come home 🐕🌌🚀'}</div>
      <button className="w-1/2 flex items-center justify-center bg-green-300 text-black border border-black ring-4 ring-indigo-300 text-2xl" type="button">Hello chicken 🐔</button>
    </div>
  );
};
