import { Component } from 'react';
import styles from './Tracks.module.css';
import Track from './Track/Track';
import type { Track as ITrack } from '~types/types';
import NothingToShow from '../NothingToShow/NothingToShow';

export interface Props {
  query: string;
  tracks: ITrack[];
}

export default class Tracks extends Component<Props> {
  render() {
    const { tracks, query } = this.props;
    const hasTracks = Array.isArray(tracks) && tracks.length > 0;

    return hasTracks ? (
      <section className={styles.tracks}>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </section>
    ) : (
      <NothingToShow query={query} />
    );
  }
}
