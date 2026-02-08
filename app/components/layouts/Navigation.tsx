export interface TNavbar {
  title: string;
  href: string;
  target: "_self" | "_blank" | "_parent" | "_top";
}

export const NavbarData: TNavbar[] = [
  {
    title: "About Us",
    href: "https://softypy.com",
    target: "_blank",
  },
  {
    title: "Features",
    href: "/features",
    target: "_self",
  },
  {
    title: "Pricing",
    href: "/pricing",
    target: "_self",
  },
  {
    title: "Contact Us",
    href: "/contact",
    target: "_self",
  },
];
