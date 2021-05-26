export function search(query, cb) {
  const url = `/api/?i=${query.ingredients}&q=${query.dish}&p=${query.page}`;
  // console.log('url', url);
  fetch(url)
    .then((response) => response.json())
    .then(cb);
}
