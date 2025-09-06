import { Component } from 'react';
// import Item from './Item/Item';
import styles from './Results.module.css';
import type { Props } from './types';

export default class Results extends Component<Props> {
  render() {
    return (
      <section className={styles.results}>
        {this.props.tracks.map((track) => (
          <div key={track.id}> {track.name} </div>
        ))}
      </section>
    );
  }
}
