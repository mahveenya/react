import { BASE_URL } from '../constants/constants';

class Api {
  async search(query: string) {
    const request = new Request(`${BASE_URL}/search?q=${query}`);
    return await this.makeRequest(request);
  }

  private async makeRequest(request: Request) {
    try {
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      throw new Error('Error occured during fetch', { cause: error });
    }
  }
}

export default new Api();
