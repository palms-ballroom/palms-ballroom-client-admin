import {
  COMMIT_BALLROOMS,
  COMMIT_BALLROOMSBYID,
  COMMIT_ERROR_BALLROOMS,
  COMMIT_LOADING_BALLROOMS,
} from "../actions/actionType";

const initialState = {
  isLoading: true,
  isError: null,
  ballrooms: [],

  ballroom: {
    hotelApiId: "",
    name: "",
    city: "",
    pricePerHour: "",
    pricePerDay: "",
    mainImg: "",
    clicked: "",
  },
};

export default function ballroomReducer(state = initialState, action) {
  switch (action.type) {
    case COMMIT_ERROR_BALLROOMS:
      return { ...state, isError: action.payload };
    case COMMIT_LOADING_BALLROOMS:
      return { ...state, isLoading: action.payload };
    case COMMIT_BALLROOMS:
      return { ...state, ballrooms: action.payload };

    case COMMIT_BALLROOMSBYID:
      // console.log(action, `^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
      const newBallroom = {
        hotelApiId: action.payload.hotelApiId,
        name: action.payload.name,
        city: action.payload.city,
        pricePerHour: action.payload.pricePerHour,
        pricePerDay: action.payload.pricePerDay,
        mainImg: action.payload.mainImg,
        clicked: action.payload.clicked,
      };
      return { ...state, ballroom: newBallroom };

    default:
      return state;
  }
}
