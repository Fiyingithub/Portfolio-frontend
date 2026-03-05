import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@fiyingithub",
    icon: Icons.gitHub,
    link: "https://github.com/fiyingithub",
  },
  {
    name: "LinkedIn",
    username: "Adegbenga Oluwatosin",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/adegbenga-oluwatosin",
  },
  {
    name: "Twitter",
    username: "@phiyin001",
    icon: Icons.twitter,
    link: "https://x.com/phiyin001?s=21",
  },
  {
    name: "Gmail",
    username: "adegbengaoluwatosin61",
    icon: Icons.gmail,
    link: "mailto:adegbengaoluwatosin61@gmail.com",
  },
];
