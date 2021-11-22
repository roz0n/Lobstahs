import { useState, useEffect } from "react";
import { StoriesListData } from "../types/Stories/StoriesListData";
import { LobstersDataService } from "../services/LobstersDataService";
import { LobstersStoryList } from "../services/LobstersDataService";

export function useLobsters(list: LobstersStoryList) {
  const dataService = new LobstersDataService();
  const [stories, setStories] = useState<StoriesListData[]>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadStories() {
      try {
        setError(false);
        setLoading(true);

        let getMethod;

        switch (list) {
          case LobstersStoryList.hottest:
            getMethod = dataService.getHottestStories;
            break;
          case LobstersStoryList.newest:
            getMethod = dataService.getNewestStories;
            break;
          default:
            return;
        }

        const response = await getMethod();

        if (response.status !== 200 && response.status !== 429) {
          throw new Error();
        } else {
          const data = await response.json();

          if (data.length > 0) {
            setStories(data);
          } else {
            throw new Error();
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (!stories) {
      loadStories();
    }
  }, [stories]);

  return { stories, error, loading };
}
