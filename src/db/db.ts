import type { Track } from './types';

class Db {
  _tracks: Track[] = [];

  getTracks() {
    return this._tracks;
  }
  saveTracks(tracks: Track[]) {
    this._tracks = tracks;
  }
  getLastSearch() {
    return localStorage.getItem('lastSearch')?.trim();
  }
  setLastSearch(query: string) {
    localStorage.setItem('lastSearch', query);
  }
}

export default new Db();
