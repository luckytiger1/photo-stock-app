export const ADVANCE_PAGE = 'ADVANCE_PAGE';
export const RESET_PAGE = 'RESET_PAGE';
export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const SET_TERM = 'SET_TERM';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const SET_RELATED_IMAGES = 'SET_RELATED_IMAGES';
export const GET_RELATED_IMAGES = 'GET_RELATED_IMAGES';
export const SEARCH_IMAGES_SUCCESS = 'SEARCH_IMAGES_SUCCESS';
export const SEARCH_IMAGES = 'SEARCH_IMAGES';
export const SET_TAGS = 'SET_TAGS';
export const GET_TAGS = 'GET_TAGS';

interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}

interface ResetPageAction {
  type: typeof RESET_PAGE;
}

interface ImagesRequestedAction {
  type: typeof FETCH_IMAGES_REQUEST;
}
interface ImagesLoadedAction {
  type: typeof FETCH_IMAGES_SUCCESS;
  payload: object[];
}
interface ImagesFailedAction {
  type: typeof FETCH_IMAGES_FAILURE;
  payload: Error;
}
interface SetTermAction {
  type: typeof SET_TERM;
  payload: string;
}
interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: object;
}
interface FetchImagesAction {
  type: typeof FETCH_IMAGES;
}
interface SetRelatedImagesAction {
  type: typeof SET_RELATED_IMAGES;
  payload: object[];
}
interface GetRelatedImagesAction {
  type: typeof GET_RELATED_IMAGES;
  payload: object[];
}
interface SearchImagesLoadedAction {
  type: typeof SEARCH_IMAGES_SUCCESS;
  payload: object[];
}
interface SearchImagesAction {
  type: typeof SEARCH_IMAGES;
}
interface SetTagsAction {
  type: typeof SET_TAGS;
  payload: string[];
}
interface GetTagsAction {
  type: typeof GET_TAGS;
  payload: string;
}

export type PagesActionTypes = AdvancePageAction | ResetPageAction;
export type ImagesActionTypes =
  | ImagesRequestedAction
  | ImagesLoadedAction
  | ImagesFailedAction
  | SetTermAction
  | AddToFavoritesAction
  | FetchImagesAction;
export type RelatedImagesActionTypes =
  | SetRelatedImagesAction
  | GetRelatedImagesAction;

export type SearchImagesActionTypes =
  | SearchImagesLoadedAction
  | SearchImagesAction;

export type TagsActionTypes = SetTagsAction | GetTagsAction;

export type AppActions =
  | PagesActionTypes
  | ImagesActionTypes
  | RelatedImagesActionTypes
  | SearchImagesActionTypes
  | TagsActionTypes;
