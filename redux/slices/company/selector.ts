import { RootState } from "@/redux/store";

export const selectCompany = (state: RootState): any => {
  return state.company;
};
