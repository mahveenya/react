import { Component } from 'react';
import type { Props } from './types';

export default class Input extends Component<Props> {
  render() {
    const { type, children, name, placeholder, className } = this.props;
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      >
        {children}
      </input>
    );
  }
}
