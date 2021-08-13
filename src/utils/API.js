import Axios from "axios";

// Create get method
const fetchData = async (url) =>
  await Axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  })
    .then((res) => ({
      error: false,
      data: res.data,
    }))
    .catch(() => ({
      error: true,
      data: null,
    }));

// Asyn Component
export async function getAPIData(url) {
  const data = await fetchData(process.env.NEXT_PUBLIC_API_URL + url);
  return data;
}

export default getAPIData;
