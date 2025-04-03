import { JSX } from "react";

export type Template = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  category: string;
  installCommand: string;
  thumbnail?: string;
};

export type Feature = {
  id: string;
  name: string;
  description: string;
  installCommand: string;
  enabled: boolean;
};
