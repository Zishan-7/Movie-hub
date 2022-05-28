const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "72489ade32c11e5bfb7a7574d63ad68b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
