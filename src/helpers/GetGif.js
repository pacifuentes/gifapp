export const getGif = async (categoria) => {
  console.log({ categoria });
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}k&limit=10&api_key=jMDuYj6GldpTpeRW8wdp0k7xQRbUqLQi`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
