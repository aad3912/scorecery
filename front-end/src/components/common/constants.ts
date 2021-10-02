import axios from "axios";

export const getFromApi = async (
  location: LocationT,
  parameters: APIParamsT
) => {
  let result: SpecificResponseT[] = [];
  try {
    const url = `https://v3.football.api-sports.io${location}`;
    const data = await axios.get<ResponseT>(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "622f1c14d13856fcee43a87199dcc759",
      },
      params: parameters,
    });
    result = data.data.response;
  } catch (error) {
    alert(error);
  }
  return result;
};

export const getAuthHeader = () =>
  `Bearer ${localStorage.getItem("authToken")}`;
