import { Component } from 'react';
import styles from './TrackProps.module.css';
import TrackProp from './TrackProp/TrackProp';
import type { Track } from '~types/types';
import type { Entries } from '~types/helper.types';

interface Props {
  track: Track;
}

const defaultTrackProps = new Set(['albumName', 'artistName', 'trackName']);

export default class TrackProps extends Component<Props> {
  render() {
    const { track } = this.props;
    const trackEntries = Object.entries(track) as Entries<Track>;
    const filteredTrackEntries = trackEntries.filter(([trackPropName]) => {
      return defaultTrackProps.has(trackPropName);
    });

    return (
      <div className={styles.trackProps}>
        {track &&
          filteredTrackEntries.map(
            ([propName, propValue]: [keyof Track, Track[keyof Track]]) => {
              return (
                <TrackProp
                  key={`${propName}-${track.id}`}
                  trackPropName={propName}
                  trackPropValue={propValue}
                />
              );
            }
          )}
      </div>
    );
  }
}
