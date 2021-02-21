const baseUrl = `https://shopper-back-server.herokuapp.com`

export const api = baseUrl;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};