// export const COMMIT_PRODUCTS = "products/fetch";
// export const COMMIT_CATEGORIES = "categories/fetch";
// export const COMMIT_PRODUCTSBYID = "products/fetchbyId";
// export const COMMIT_IMAGESBYID = "images/commitImagesByProductId";
// export const COMMIT_FETCHEDIMAGESBYID = "images/fetchImagesByProductId";

import {
  COMMIT_IMAGESBYID,
  COMMIT_BALLROOMS,
  COMMIT_BALLROOMSBYID,
  COMMIT_FETCHEDIMAGESBYID,
  COMMIT_ERROR_IMAGES,
  COMMIT_LOADING_IMAGES,
  COMMIT_ERROR_BALLROOMS,
  COMMIT_LOADING_BALLROOMS,
} from "./actionType";

export const commitImagesById = (payload) => {
  return { type: COMMIT_IMAGESBYID, payload };
};

export const commitBallrooms = (payload) => {
  return { type: COMMIT_BALLROOMS, payload };
};

export const commitBallroomsById = (payload) => {
  // console.log(payload, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  return { type: COMMIT_BALLROOMSBYID, payload };
};

export const commitFetchedImagesById = (payload) => {
  // console.log(payload, `..............................................payload`);
  return { type: COMMIT_FETCHEDIMAGESBYID, payload };
};

export const commitErrorImages = (payload) => {
  return { type: COMMIT_ERROR_IMAGES, payload };
};

export const commitLoadingImages = (payload) => {
  return { type: COMMIT_LOADING_IMAGES, payload };
};

export const commitErrorBallrooms = (payload) => {
  return { type: COMMIT_ERROR_BALLROOMS, payload };
};

export const commitLoadingBallrooms = (payload) => {
  return { type: COMMIT_LOADING_BALLROOMS, payload };
};
