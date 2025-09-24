import { Component } from 'react';
import styles from './ErrorTrigger.module.css';

export default class ErrorTrigger extends Component {
  state = { throwError: false };

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('This is a simulated error.');
    }

    return (
      <button className={styles.errorTrigger} onClick={this.handleClick}>
        Trigger Error
      </button>
    );
  }
}
