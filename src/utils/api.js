export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.json();
    throw Error(message);
  }
  return await response;
}