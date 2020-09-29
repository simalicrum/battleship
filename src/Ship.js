const Ship = (length) => {
  let hits = Array(length).fill(false);
  const hit = (position) => {
    hits[position] = true;
  };
  const isSunk = () => {
    return hits.every((i) => i === true);
  };
  return { hit, isSunk };
};

export default Ship;
