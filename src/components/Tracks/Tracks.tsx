import { Component } from 'react';
import styles from './Tracks.module.css';
import Track from './Track/Track';
import type { Track as ITrack } from '~types/types';

export interface Props {
  tracks: ITrack[];
}

export default class Tracks extends Component<Props> {
  render() {
    return (
      <section className={styles.tracks}>
        {this.props.tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </section>
    );
  }
}
