import STRINGS from "@constants/strings";

export function fetchGet(url) {
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({array:[2,1,2,1,3,2]})
    };
  return fetch(`${STRINGS.API_URL}${url}`, requestOptions).then((res) => {
    return res.json().then((jsonRes) => {
      return jsonRes.data;
    });
  });
}
