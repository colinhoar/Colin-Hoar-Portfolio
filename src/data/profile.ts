import profilePhoto from "../assets/profile/Hoar033.JPG";

export interface Profile {
  name: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  school: string;
  major: string;
  bio: string;
  profilePhoto: string | null;
}

export const profile: Profile = {
  name: "Colin Hoar",
  subtitle: "Computer Science Student at WPI",
  email: "colin@hoarfamily.org",
  github: "https://github.com/colinhoar",
  linkedin: "https://www.linkedin.com/in/colin-hoar-a85874289/",
  school: "Worcester Polytechnic Institute",
  major: "B.S. in Computer Science",
  bio: "I'm a Computer Science student graduating in December 2026 with a passion for building thoughtful, engaging software and exploring the intersection of technology and creativity. I enjoy working across web development, software engineering, and interactive applications, with a particular interest in creating projects that are both technically interesting and enjoyable to use. Outside of coding, I spend my time making music, playing piano, playing video games with friends, and exploring 3D art and animation.\n",
  profilePhoto: profilePhoto,
};
