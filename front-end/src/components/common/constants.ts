import axios from "axios";

export const getFromApi = async (
  location: LocationT,
  parameters: APIParamsT
) => {
  let result: StandingsDataT[] = [];
  try {
    const url = `https://v3.football.api-sports.io${location}`;
    const data = await axios.get<StandingsResponseT>(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "622f1c14d13856fcee43a87199dcc759",
      },
      params: parameters,
    });
    result = data.data.response[0].league.standings[0];
  } catch (error) {
    alert(error);
  }
  return result;
};
