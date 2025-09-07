class Ls {
  getLastSearch() {
    return localStorage.getItem('lastSearch')?.trim();
  }
  setLastSearch(query: string) {
    localStorage.setItem('lastSearch', query);
  }
}

export default new Ls();
