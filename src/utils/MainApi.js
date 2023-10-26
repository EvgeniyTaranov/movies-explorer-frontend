export const BASE_URL = 'https://api.evgeniytaranovdiploma.nomoredomainsrocks.ru';

export const handleError = async (response) => {
  if (!response.ok) {
    const res = await response.json();
    return Promise.reject(res);
  }
  return response.json();
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return handleError(res);
  });
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      return handleError(res);
    })
    .then((data) => {
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        return data;
      }
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return handleError(res);
  });
};

export const updateUser = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => {
    return handleError(res);
  });
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    return handleError(res);
  });
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    return handleError(res);
  });
};

export const postMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({
      country:data.country,
      director:data.director,
      duration:data.duration,
      year:data.year,
      description:data.description,
      image:`https://api.nomoreparties.co${data.image.url}`,
      trailerLink:data.trailerLink,
      thumbnail:`https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
      movieId: data.id,
      nameRU:data.nameRU,
      nameEN:data.nameEN,
    }),
  }).then((res) => {
    return handleError(res);
  });
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.jwt}`,
    },
  }).then((res) => {
    return handleError(res);
  });
};
