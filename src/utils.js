const makeRequest = (url) => {
  return fetch(url)
    .then(response => response.json());
} 

export {
  makeRequest
}