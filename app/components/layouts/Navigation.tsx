export interface TNavbar {
  title: string;
  href: string;
  target: "_self" | "_blank" | "_parent" | "_top";
}

export const NavbarData: TNavbar[] = [
  {
    title: "Home",
    href: "/",
    target: "_self",
  },
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
    href: "https://softypy.com/contact",
    target: "_blank",
  },
];
