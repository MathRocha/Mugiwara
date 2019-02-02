export interface Search {
  items: Item[];
  queries: Query;
}

export interface Item {
  displayLink: string;
  htmlSnippet: string;
  htmlTitle: string;
  image: Image;
  link: string;
  snippet: string;
  title: string;
}

export interface Image {
  byteSize: number;
  contextLink: string;
  height: number;
  thumbnailHeight: number;
  thumbnailLink: string;
  thumbnailWidth: number;
}

export interface Query {
  nextPage: Page[];
  previousPage: Page[];
}

export interface Page {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  searchTerms: string;
  searchType: string;
  startIndex: number;
  title: string;
  totalResults: string
}