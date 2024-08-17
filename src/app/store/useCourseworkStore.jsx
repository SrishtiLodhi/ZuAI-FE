"use client";
import {create} from 'zustand';

export const useCourseworkStore = create((set) => ({
  courseworks: [],
  courseworkList: [], // Make sure this is populated as expected
  addCoursework: (newCoursework) =>
    set((state) => ({
      courseworkList: [...state.courseworkList, newCoursework],
    })),
}));
