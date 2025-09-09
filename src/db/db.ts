import type { Track } from '~types/types';

class Db {
  db: Track[] = [];

  saveTracks(tracks: Track[]) {
    this.db = tracks;
  }

  getTrackById(trackId: Track['id']): Track {
    const track = this.db.find((track) => track.id === trackId);
    if (!track) {
      throw new Error(`Track with id ${trackId} not found`);
    }
    return track;
  }

  getLyricsById(trackId: Track['id']): Track['plainLyrics'] {
    return this.getTrackById(trackId).plainLyrics;
  }

  getFirstBar(trackId: number): string {
    const lyrics = this.getLyricsById(trackId);
    const lines = lyrics.split('\n');
    if (lines.length < 5) {
      return lyrics;
    }
    return lines.slice(0, 4).join('\n') + '...';
  }
}
export default new Db();
