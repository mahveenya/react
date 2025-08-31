import { Component } from 'react';
import type { Props } from './types';

export default class Form extends Component<Props> {
  render() {
    const { method, action, children, className } = this.props;

    return (
      <form method={method} action={action} className={className}>
        {children}
      </form>
    );
  }
}
