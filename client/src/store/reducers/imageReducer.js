import {
  COMMIT_IMAGESBYID,
  COMMIT_FETCHEDIMAGESBYID,
  COMMIT_ERROR_IMAGES,
  COMMIT_LOADING_IMAGES,
} from "../actions/actionType";

const initialState = {
  isLoading: true,
  isError: null,
  images: {
    images1: "",
    images2: "",
    images3: "",
  },
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case COMMIT_ERROR_IMAGES:
      return { ...state, isError: action.payload };
    case COMMIT_LOADING_IMAGES:
      return { ...state, isLoading: action.payload };
    case COMMIT_IMAGESBYID:
      return { ...state, images: action.payload };
    case COMMIT_FETCHEDIMAGESBYID:
      const newImages = {
        images1: action.payload.images1,
        images2: action.payload.images2,
        images3: action.payload.images3,
      };
      // console.log(
      //   action.payload,
      //   `..............................................action.payload`
      // );
      // for (let i = 1; i < action.payload.length; i++) {
      //   const image = action.payload[i];
      //   newImages[`images${i}`] = image.imgUrl;
      // }
      return {
        ...state,
        images: newImages,
      };
    default:
      return state;
  }
}
