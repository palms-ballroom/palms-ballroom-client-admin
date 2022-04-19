import {
  commitBallrooms,
  commitBallroomsById,
  commitFetchedImagesById,
  commitLoadingImages,
  commitLoadingBallrooms,
} from "./actionCreator";

export const fetchBallrooms = () => {
  return (dispatch, getState) => {
    dispatch(commitLoadingBallrooms(true));
    fetch("http://localhost:4001/ballroom", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        // console.log("Success:", result, `/////////////////`);
        dispatch(commitBallrooms(result));
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        dispatch(commitLoadingBallrooms(false));
      });
  };
};

export const fetchBallroomById = (hotelApiId) => {
  return (dispatch, getState) => {
    // console.log(hotelApiId, `////////////////////////////`);
    dispatch(commitLoadingImages(true));
    // dispatch(commitLoadingBallrooms(true));
    fetch(`http://localhost:4001/ballroom/${hotelApiId}`, {
      method: "GET", // or 'PUT'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        dispatch(commitBallroomsById(data));
        dispatch(
          commitFetchedImagesById({
            images1: data.images1,
            images2: data.images2,
            images3: data.images3,
          })
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        dispatch(commitLoadingImages(false));
        // dispatch(commitLoadingBallrooms(false));
      });
  };
};

export const postBallroomIncludesImages = (payload) => {
  return (dispatch, getState) => {
    const userId = localStorage.getItem("id");
    // console.log(payload, `////////////////////////////`);
    // console.log(id, `////////////////////////////`);
    return fetch("http://localhost:4001/ballroom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: payload.access_token,
      },
      body: JSON.stringify({
        hotelApiId: payload.formAddBallroom.hotelApiId,
        name: payload.formAddBallroom.name,
        city: payload.formAddBallroom.city,
        pricePerHour: payload.formAddBallroom.pricePerHour,
        pricePerDay: payload.formAddBallroom.pricePerDay,
        mainImg: payload.formAddBallroom.mainImg,
        images1: payload.formAddBallroom.images1,
        images2: payload.formAddBallroom.images2,
        images3: payload.formAddBallroom.images3,
        clicked: 0,
        userId: +userId,
      }),
    });
  };
};

export const deleteBallroomsById = (hotelApiId) => {
  return (dispatch, getState) => {
    // console.log(hotelApiId, `////////////////////////////////`);
    return fetch(`http://localhost:4001/ballroom/${hotelApiId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
  };
};

export const putBallroomsIncludesImages = ({
  ballroomId,
  images,
  ballroom,
}) => {
  return (dispatch, getState) => {
    const userId = localStorage.getItem("id");
    // console.log(ballroomId, `*************************************88`);
    // console.log(images, `*************************************88`);
    // console.log(ballroom, `*************************************88`);
    return fetch(`http://localhost:4001/ballroom/${ballroomId}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        hotelApiId: ballroom.hotelApiId,
        name: ballroom.name,
        city: ballroom.city,
        pricePerHour: ballroom.pricePerHour,
        pricePerDay: ballroom.pricePerDay,
        mainImg: ballroom.mainImg,
        images1: images.images1,
        images2: images.images2,
        images3: images.images3,
        // clicked: ballroom.clicked,
        userId: +userId,
      }),
    });
  };
};

export const actionDoLogin = (formLogin) => {
  return (dispatch, getState) => {
    return fetch("http://localhost:4002/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    });
  };
};

export const actionDoRegister = (payload) => {
  return (dispatch, getState) => {
    // console.log(payload, `......................`);
    return fetch("http://localhost:4002/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: payload.access_token,
      },
      body: JSON.stringify({
        username: payload.formRegister.username,
        email: payload.formRegister.email,
        password: payload.formRegister.password,
        phoneNumber: payload.formRegister.phoneNumber,
        address: payload.formRegister.address,
        imageUrl: payload.formRegister.imageUrl,
        role: "Admin",
      }),
    });
  };
};
