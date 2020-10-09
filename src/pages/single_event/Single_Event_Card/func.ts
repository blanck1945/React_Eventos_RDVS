export const getColor = (num: number, total: number) => {
  const result = total / num;
  if (result < 1.24) {
    return "red";
  } else if (result > 2) {
    return "green";
  } else {
    return "blue";
  }
};

export const getColorNum = (num: number, total: number) => {
  console.log(num);
  const half = total / 2;
  if (half / 2 >= num) {
    return "red";
  } else if (half >= num) {
    return "blue";
  } else {
    return "green";
  }
};

export const referenceArr = [
  {
    referenceName: "Ultimas 25%",
    referenceClass: "red",
  },
  {
    referenceName: "Menos del 50%",
    referenceClass: "blue",
  },
  {
    referenceName: "Más del 50%",
    referenceClass: "green",
  },
];
