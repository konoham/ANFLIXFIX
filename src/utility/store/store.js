import { create } from "zustand";

export const useFilter = create((set) => ({
  filter: {
    Season: null,
    Genres: null,
    Rating: null,
    Type: null,
  },
  setFilter: (filterKey, value) =>
    set((state) => ({
      filter: {
        ...state.filter,
        [filterKey]: value,
      },
    })),
}));
