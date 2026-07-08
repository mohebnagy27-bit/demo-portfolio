
import coverproduct1 from "../assets/product1/1783545922015.jpg"
import image1product1 from "../assets/product1/1783545921991.jpg"
import image2product1 from "../assets/product1/1783545921939.jpg"

import coverproduct2 from "../assets/product2/1783545921798.jpg"
import image1product2 from "../assets/product2/1783545921823.jpg"

import coverproduct3 from "../assets/product3/1783545921921.jpg"
import image1product3 from "../assets/product3/1783545921884.jpg"

const products = [
    {
  id: 1,

  title: "product",

  category: "category",

  shortDescription: "",

  coverImage: coverproduct1,

  gallery: [
    {
      id: 1,
      image: coverproduct1,
      caption: "caption image 1"
    },
    {
      id: 2,
      image: image1product1,
      caption: "caption image 2"
    },
    {
      id: 3,
      image: image2product1,
      caption: "caption image 3"
    },
  ],
video: null
},
    {
  id: 2,

  title: "product",

  category: "category",

  shortDescription: "",

  coverImage: coverproduct2,

  gallery: [
    {
      id: 1,
      image: coverproduct2,
      caption: "caption image 1"
    },
    {
      id: 2,
      image: image1product2,
      caption: "caption image 2"
    }
  ],
video: null
},
    {
  id: 3,

  title: "product",

  category: "category",

  shortDescription: "",

  coverImage: coverproduct1,

  gallery: [
    {
      id: 1,
      image: coverproduct3,
      caption: "caption image 1"
    },
    {
      id: 2,
      image: image1product3,
      caption: "caption image 2"
    }
  ],
video: null
}

];

export default products;