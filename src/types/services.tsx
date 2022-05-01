export type movieDetailsType = {
  adult: boolean;
  title: string;
  genres: genresType[];
};

export type genresType = {
  id: number;
  name: string;
};
