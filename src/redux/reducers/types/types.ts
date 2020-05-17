export type ImageListStateType = {
  images: (string | object)[];
  loading: boolean;
  error: null | Error;
  searchResults: (string | object)[];
  term: string;
  searchHistory: (string | object)[];
};

export type FavoritesListStateType = {
  favorites: object[];
};

export type PageStateTypes = {
  page: number;
};

export type RelatedListStateType = {
  relatedImages: object[];
};

export type TagsStateType = {
  tags: string[];
};

export interface AppState {
  imageList: ImageListStateType;
  pages: PageStateTypes;
  favoritesList: FavoritesListStateType;
  relatedList: RelatedListStateType;
  tagsList: TagsStateType;
}
