/**
 * Product data structure.
 * Each product object should follow this shape:
 *
 * {
 *   id: string | number,
 *   title: string,
 *   category: string,
 *   coverImage: string,
 *   shortDescription: string,
 *   gallery: { image: string, caption: string }[], // ordered gallery images with captions
 *   video: string | null,                           // optional; when present, appears as the final gallery slide
 * }
 */

// {
//   id: 1,

//   title: "",

//   category: "",

//   shortDescription: "",

//   coverImage: "",

//   gallery: [
//     {
//       id: 1,
//       image: "",
//       caption: ""
//     },
//     {
//       id: 2,
//       image: "",
//       caption: ""
//     }
//   ],

//   video: {
//     src: "",
//     poster: ""
//   }
// }

import cover from "../assets/IMG_20250705_194118.jpg"
import image1 from "../assets/IMG_20250705_194104.jpg"
import image2 from "../assets/IMG_20250705_194203.jpg"
import image3 from "../assets/IMG_20250705_194254.jpg"
import image4 from "../assets/IMG_20250705_194416.jpg"

const products = [
    {
  id: 1,

  title: "test product",

  category: "test category",

  shortDescription: "",

  coverImage: cover,

  gallery: [
    {
      id: 1,
      image: image1,
      caption: "caption image 1"
    },
    {
      id: 2,
      image: image2,
      caption: "caption image 2"
    },
    {
      id: 3,
      image: image3,
      caption: "caption image 3"
    },
    {
      id: 4,
      image: image4,
      caption: "caption image 4"
    }

  ],
video: null
}

];

export default products;