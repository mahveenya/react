import { Component } from 'react';
import styles from './Track.module.css';
import TrackLyrics from './TrackLyrics/TrackLyrics';
import TrackProps from './TrackProps/TrackProps';
import type { Track as ITrack } from '~types/types';

interface Props {
  track: ITrack;
}

export default class Track extends Component<Props> {
  render() {
    return (
      <div className={styles.track}>
        <TrackProps track={this.props.track} />
        <TrackLyrics trackLyrics={this.props.track.plainLyrics} />
      </div>
    );
  }
}
