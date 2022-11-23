export interface asset {
  _ref: string;
  _type: string;
}

export interface image {
  asset: asset;
}

export interface Iproject extends image, asset {
  title: string;
  url: string;
  image: image;
  altText: string;
  description: string;
}
