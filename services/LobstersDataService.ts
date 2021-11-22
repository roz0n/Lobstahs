export class LobstersDataService {
  getRequestOptions = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  async getHottestStories(options = this.getRequestOptions) {
    return await fetch("https://lobste.rs/hottest.json", options);
  }
}
