export interface YoutubeApiItemsId {
  kind: string;
  videoId: string;
}

export interface YoutubeApiItemsSnippetsThumbnails {
  default: {
    url: string;
    width: number;
    height: number;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  high: {
    url: string;
    width: number;
    height: number;
  };
}

export interface YoutubeApiItemsSnippets {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeApiItemsSnippetsThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YoutubeApiItems {
  etag: string;
  kind: string;
  id: YoutubeApiItemsId;
  snippets: YoutubeApiItemsSnippets;
}

export interface YoutubeApiPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeApi {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: YoutubeApiPageInfo;
  items: YoutubeApiItems[];
}