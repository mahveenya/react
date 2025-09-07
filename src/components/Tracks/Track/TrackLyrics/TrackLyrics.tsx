import { Component } from 'react';
import styles from './TrackLyrics.module.css';
import type { Track } from '~types/types';

interface Props {
  trackLyrics: Track['plainLyrics'];
}

export default class TrackLyrics extends Component<Props> {
  render() {
    return <div className={styles.trackLyrics}>{this.props.trackLyrics}</div>;
  }
}
