export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies"; 

function handleError(response) {
  if (!response.ok) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
}

export const loadAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return handleError(res);
  });
};
