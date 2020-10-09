export const getUserStars = (num: number, element: any) => {
  let i = 0;
  let stars = [];
  while (i < num) {
    i++;
    stars.push(element);
  }
  return stars;
};
