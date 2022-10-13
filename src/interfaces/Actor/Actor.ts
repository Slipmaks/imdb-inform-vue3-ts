import { Nicknames } from "./Nicknames";
import { MiniBios } from "./MiniBios";
import { Image } from "../Image";

export interface Actor {
  name: string;
  realName: string;
  birthDate: string;
  birthPlace: string;
  gender: string;
  height: number;
  nicknames: Nicknames;
  image?: Image;
  miniBios?: MiniBios;
}
