import STRINGS from "@constants/strings";

export function fetchGet(url, data) {
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
  return fetch(`${STRINGS.API_URL}${url}`, requestOptions).then((res) => {
    return res.json();
  });
}
