import { Component } from 'react';
import styles from './TrackProp.module.css';
import type { Track } from '~types/types';

interface Props {
  trackPropName: keyof Track;
  trackPropValue: Track[keyof Track];
}

export default class TrackProp extends Component<Props> {
  private normalizePropName(propName: Props['trackPropName']): string {
    const propNameLower = propName.toLowerCase();
    if (propNameLower.endsWith('name')) {
      return `${propNameLower.slice(0, -4)}`;
    } else {
      return `${propNameLower}`;
    }
  }

  render() {
    const { trackPropName, trackPropValue } = this.props;
    if (typeof trackPropValue !== 'boolean') {
      return (
        <div>
          <span className={styles.trackPropName}>
            {this.normalizePropName(trackPropName)}:{' '}
          </span>
          <span>{trackPropValue}</span>
        </div>
      );
    } else {
      return (
        trackPropValue && (
          <div>
            <span className={styles.trackPropSingleName}>
              {this.normalizePropName(trackPropName)}
            </span>
          </div>
        )
      );
    }
  }
}
