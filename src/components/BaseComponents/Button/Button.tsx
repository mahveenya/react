import { Component, type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default class Button extends Component<Props> {
  render() {
    const { type = 'button', children } = this.props;
    return <button type={type}>{children}</button>;
  }
}
