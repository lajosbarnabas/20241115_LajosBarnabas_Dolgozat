import { Properties } from "./properties.model";

export interface Parts {
  name: string;
  price: number;
  description: string;
  properties: Properties[];
  quantity: number;
}
