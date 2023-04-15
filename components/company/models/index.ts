import { PropsWithChildren } from "react";

export interface Company extends PropsWithChildren {
  id?: number;
  name?: string;
  address?: string;
}
