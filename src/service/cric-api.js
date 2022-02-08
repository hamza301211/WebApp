export const getCricketMatches = () => {
  return fetch("https://cricket-live-score4.p.rapidapi.com/apis/series", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "cricket-live-score4.p.rapidapi.com",
      "x-rapidapi-key": "574e4d4c5emsh30f251179af9877p183145jsn564817725f6e",
    },
  })
    .then((res) => res.json())

    // .then((data) => console.log(data.series.completed[0]["series_type "]))

    .catch((err) => {
      console.error(err);
    });
};
