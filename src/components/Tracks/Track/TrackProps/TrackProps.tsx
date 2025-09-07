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

    return (
      <div className={styles.trackProps}>
        {track &&
          trackEntries.map(
            ([propName, propValue]: [keyof Track, Track[keyof Track]]) => {
              if (!defaultTrackProps.has(propName)) return null;
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
