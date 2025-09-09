import { Component } from 'react';
import styles from './TrackLyrics.module.css';
import type { Track } from '~types/types';
import db from '~/db/db';

interface Props {
  isExpanded: boolean;
  trackId: Track['id'];
  trackLyrics: Track['plainLyrics'];
}

export default class TrackLyrics extends Component<Props> {
  render() {
    const firstBar = db.getFirstBar(this.props.trackId);
    const fullLyrics = db.getLyricsById(this.props.trackId);
    return (
      <div className={styles.trackLyrics}>
        {this.props.isExpanded ? fullLyrics : firstBar}
      </div>
    );
  }
}
