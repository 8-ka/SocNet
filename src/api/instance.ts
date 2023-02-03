import axios from "axios"

const Instance = () => {
  const instance = axios.create(
    {
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
        "API-KEY": "2ddc8a84-8813-4c0f-b3d5-65380b3d0e75",
      }
    }
  );
  return instance;
}

export default Instance;