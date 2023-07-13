import { TFunction } from "i18next";

export type Link = {
  href: string;
  name: string;
};

export const getLinks = (t: TFunction): Link[] => {
  return [
    { href: "/", name: t('navLinks.home')},
    { href: "/recipes", name: t("navLinks.recipes")}
  ];
};