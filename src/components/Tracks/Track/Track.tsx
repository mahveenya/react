import { Component } from 'react';
import styles from './Track.module.css';
import TrackLyrics from './TrackLyrics/TrackLyrics';
import TrackProps from './TrackProps/TrackProps';
import type { Track as ITrack } from '~types/types';

interface Props {
  track: ITrack;
}

interface State {
  isExpanded: boolean;
  collapsedHeight: number;
}

export default class Track extends Component<Props, State> {
  state = {
    isExpanded: false,
    collapsedHeight: 100,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    return (
      <div className={styles.track} onClick={this.toggleExpand}>
        <TrackProps track={this.props.track} />
        <TrackLyrics
          trackLyrics={this.props.track.plainLyrics}
          trackId={this.props.track.id}
          isExpanded={this.state.isExpanded}
        />
      </div>
    );
  }
}
