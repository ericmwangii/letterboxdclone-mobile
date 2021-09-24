export interface Details {
  tagline: string;
  genres: {
    name: string;
  };
  runtime: number;
  credits: {
    cast: {
      name: string;
      profile_path: string;
      character: string;
      known_for_department: string;
    };
    crew: {
      name: string;
      profile_path: string;
      known_for_department: string;
    };
  };
}
