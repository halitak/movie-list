export const filterInputs = [
  {
    type: "text",
    name: "s",
    placeholder: "Search by title",
    defaultValue: "Pokemon",
  },
  {
    type: "text",
    name: "y",
    placeholder: "Search by year",
  },
  {
    type: "select",
    name: "type",
    placeholder: "Search by type",
    options: ["movie", "series", "episode", "game"],
  },
];

export const MovieListKeys = ["Title", "Year", "imdbID", "Type"];

export const MovieDetailKeys = [
  "Title",
  "Year",
  "Released",
  "Runtime",
  "Genre",
  "Director",
  "Writer",
  "Actors",
  "Language",
  "Country",
  "Awards",
  "Ratings",
  "Metascore",
  "imdbRating",
  "imdbVotes",
  "Type",
  "BoxOffice",
];
