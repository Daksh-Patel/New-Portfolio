import {
  FaAddressBook,
  // FaBriefcase,
  FaHome,
  FaRocket,
  FaUser,
} from "react-icons/fa"

export const HeaderMenuItem = [
  {
    id: 1,
    item: "Home",
    href: "#home",
    label: "home",
    icon: FaHome,
  },
  {
    id: 2,
    item: "About me",
    href: "#about",
    label: "about",
    icon: FaUser,
  },
  {
    id: 3,
    item: "Services",
    href: "#services",
    label: "services",
    icon: FaRocket,
  },
  // {
  //   id: 4,
  //   item: "Portfolio",
  //   href: "#portfolio",
  //   label: "portfolio",
  //   icon: FaBriefcase,
  // },
  {
    id: 5,
    item: "Contact me",
    href: "#contact",
    label: "contact",
    icon: FaAddressBook,
  },
]
