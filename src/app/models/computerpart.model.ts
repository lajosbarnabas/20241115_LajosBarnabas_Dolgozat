import { Parts } from "./parts.model";

export interface ComputerPart{
  name: string,
  imageUrl: string,
  parts: Parts[];
}
