/**
 * The function `getAllEnv` returns an object containing the values of `API_KEY` and `VITE_API_URL`
 * from the environment variables.
 * @returns The function `getAllEnv` returns an object with two properties: `API_KEY` and
 * `VITE_API_URL`.
 */
export const getAllEnv = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  return {
    API_KEY,
    VITE_API_URL,
  };
};
