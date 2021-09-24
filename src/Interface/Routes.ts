export type Routes = {
  Movie: {
    name: string;
    item: {
      id: string;
      original_title: string;
      title: string;
      poster_path: string;
      overview: string;
      backdrop_path: string;
      release_date: string;
    };
  };
  Home: undefined;
  Profile: undefined;
  Diary: undefined;
  WatchList: undefined;
  Lists: undefined;
  Reviews: undefined;
  Search: undefined;
  SearchScreen: undefined;
};
