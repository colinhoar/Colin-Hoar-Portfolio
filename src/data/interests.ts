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
 *
 * DETAIL MODAL (optional): give an interest a `details` array
 * to make its card clickable and open a modal — exactly like
 * the Projects section. `details` is an ORDERED LIST of blocks,
 * and each block renders in the exact order you put it in the
 * array. Mix and match as many blocks, in any order, as you like:
 *
 *   { type: "text",  text: "..." }                       -> a paragraph (or several,
 *                                                             separate with a blank line)
 *   { type: "image", src: someImage, alt: "...", caption: "..." }  -> a photo
 *   { type: "video", url: "...", caption: "..." }          -> a video (YouTube/Vimeo
 *                                                             link OR a direct .mp4 file)
 *   { type: "link",  label: "...", url: "..." }            -> a clickable button
 *
 * `heading` is optional on "text" blocks if you want a small
 * bold subheading above that paragraph. `alt` and `caption` are
 * optional on "image" blocks; `caption` is optional on "video"
 * blocks. Leave `details` off entirely for an interest with no
 * extra detail — its card will stay non-clickable, just like
 * before.
 *
 * Example — an image, then text, then a video, in that order:
 *
 *   details: [
 *     { type: "image", src: myPhoto, alt: "Me on the trail" },
 *     { type: "text", text: "Some more detail about this interest..." },
 *     { type: "video", url: "https://youtu.be/dQw4w9WgXcQ" },
 *   ]
 *
 * Example — text, then an image, in that order:
 *
 *   details: [
 *     { type: "text", text: "Some detail here." },
 *     { type: "image", src: myOtherPhoto },
 *   ]
 */

import music from "../assets/interests/music_cover_image.jpg";
import animation from "../assets/interests/animation_cover_image.png";
import video_games from "../assets/interests/video_games_cover_image.jpg";
import hiking from "../assets/interests/hiking_cover_image.jpg";

/** A block of body text. `heading` is optional; separate multiple
 * paragraphs inside `text` with a blank line and each will render
 * as its own <p>. */
export interface InterestTextBlock {
  type: "text";
  heading?: string;
  text: string;
}

/** A single image. `src` can be an imported file (see the imports
 * above) or any image URL. `alt` and `caption` are both optional. */
export interface InterestImageBlock {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
}

/** A single video. `url` can be a YouTube or Vimeo link (it will be
 * embedded automatically) or a direct link to a video file such as
 * an .mp4. `caption` is optional. */
export interface InterestVideoBlock {
  type: "video";
  url: string;
  caption?: string;
}

/** A single labeled button, e.g. a link to a project, playlist,
 * article, or profile related to this interest. */
export interface InterestLinkBlock {
  type: "link";
  label: string;
  url: string;
}

/** One piece of content in an interest's modal. `details` is an
 * array of these, rendered top to bottom in the order you list
 * them — mix as many of each type, in whatever order you like. */
export type InterestDetailBlock =
  | InterestTextBlock
  | InterestImageBlock
  | InterestVideoBlock
  | InterestLinkBlock;

export interface Interest {
  title: string;
  description: string;
  image: string;
  /**
   * Powers the "click to learn more" modal. Omit entirely for an
   * interest with no extra detail — its card stays non-clickable.
   */
  details?: InterestDetailBlock[];
}

export const interests: Interest[] = [
  {
    title: "Music",
    description:
      "I love listening to music. I play piano and am learning to produce my own songs.",
    image: music,
  },
  {
    title: "3D Animation",
    description:
      "Creating scenes and animations for fun in Blender.",
    image: animation,
    // // Example detail modal: image -> text -> link, all in whatever
    // // order you'd like. Swap these blocks out, reorder them, or add
    // // more of your own.
    // details: [
    //   {
    //     type: "image",
    //     src: placeholder2,
    //     alt: "A trail through the White Mountains",
    //     caption: "Somewhere in the White Mountains, fall 2025.",
    //   },
    //   {
    //     type: "text",
    //     heading: "Why I like it",
    //     text: "I try to get out on trail at least a couple weekends a month, mostly in the White Mountains and the Berkshires.\n\nIt's the best excuse I've found to fully disconnect for a few hours — no phone service on most of the routes I take.",
    //   },
    //   {
    //     type: "link",
    //     label: "My AllTrails profile",
    //     url: "https://www.alltrails.com",
    //   },
    // ],
  },
  {
    title: "Video Games",
    description:
      "Playing video games online or at home with friends.",
    image: video_games,
  },
  {
    title: "Hiking",
    description:
      "Exploring trails while on vacation with family and friends.",
    image: hiking,
  },
];
