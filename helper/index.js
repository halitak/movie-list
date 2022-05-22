export const fetchMovie = async (params) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}&${params}`);
  return await res.json();
};
