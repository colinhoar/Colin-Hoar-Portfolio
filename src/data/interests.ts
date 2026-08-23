/**
 * INTEREST DATA
 * ------------------------------------------------------------
 * This array powers the Interests section. To add an interest,
 * copy one of the objects below and fill in your own details.
 * To remove one, delete its object from the array.
 *
 * IMAGES: place interest icons/images in `src/assets/interests/`
 * and import them at the top of this file, the same way the
 * placeholder images are imported below.
 */

import placeholder1 from "../assets/interests/placeholder1.svg";
import placeholder2 from "../assets/interests/placeholder2.svg";
import placeholder3 from "../assets/interests/placeholder3.svg";
import placeholder4 from "../assets/interests/placeholder4.svg";

export interface Interest {
  title: string;
  description: string;
  image: string;
}

export const interests: Interest[] = [
  {
    title: "Music Production",
    description:
      "I play piano and am learning to produce my own songs.",
    image: placeholder1,
  },
  {
    title: "3D Animation",
    description:
      "Creating scenes and animations for fun in Blender.",
    image: placeholder2,
  },
  {
    title: "Hiking",
    description:
      "Exploring trails while on vacation with family and friends.",
    image: placeholder3,
  },
  {
    title: "Video Games",
    description:
      "Playing video games online or at home with friends.",
    image: placeholder4,
  },
];
