import { Component } from 'react';
import type { Props } from './types';

export default class Button extends Component<Props> {
  render() {
    const { type = 'button', children } = this.props;
    return <button type={type}>{children}</button>;
  }
}
