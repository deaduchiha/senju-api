const getAnime = `const getAnime = async () => {
    const res = await fetch("/api/anime");
    const data = await res.json();
  
    console.log(data);
};
  
getAnime();`;

export { getAnime };
