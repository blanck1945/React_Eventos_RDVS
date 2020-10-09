import { NewImg, newsArr } from "../../componets/new_shows/news_arr";
import { AdonisEvent } from "../../../../interfaces/EventType";

export const getRandom3 = (arr: AdonisEvent[]) => {
  const event1 = getEventFromArr(arr);
  const newArr = removeFromArr(arr, event1);
  const event2 = getEventFromArr(newArr);
  const newSecondArr = removeFromArr(newArr, event2);
  const event3 = getEventFromArr(newSecondArr);
  const lastArr = Array(event1, event2, event3);
  return lastArr;
};

const getEventFromArr = (arr: AdonisEvent[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const removeFromArr = (arr: AdonisEvent[], event1: AdonisEvent) => {
  return arr.filter((el: AdonisEvent) => el.id !== event1.id);
};

const checkEqual = (
  arr: AdonisEvent[],
  event1: AdonisEvent,
  event2?: AdonisEvent
) => {
  const event = arr[Math.floor(Math.random() * arr.length)];
  if (!event2) {
    if (event1.id === event.id) {
      const event = arr[Math.floor(Math.random() * arr.length)];
      checkEqual(arr, event1);
      return event;
    }
  } else {
    if (event1.id === event.id || event2.id === event.id) {
      const event = arr[Math.floor(Math.random() * arr.length)];
      checkEqual(arr, event1, event2);
      return event;
    }
  }

  return event;
};

export const filterByType = (arr: AdonisEvent[], filter: string) => {
  return arr.filter((el: AdonisEvent) => el.event_type === filter);
  /*if (filterArr.length !== 3) {
    filterArr.fill(undefined);
  }*/
};
export const filterByCategory = (arr: AdonisEvent[], filter: string) => {
  return arr.filter((el: AdonisEvent) => el.event_category === filter);
};

export const filterByFree = (arr: AdonisEvent[], filter: boolean) => {
  const freeArr = arr.filter((el: AdonisEvent) => el.event_free === filter);
  return freeArr;
};

export const limitArr = (arr: AdonisEvent[], num: number) => {
  let counter = 0;
  const newArr = arr.filter((el: AdonisEvent) => el.id <= num);
  return newArr;
};

export const getThree = (num: number) => {
  let counter = 0;
  const newArr = [];
  while (counter != 3) {
    const el = getElement(num);
    newArr.push(el);
    counter += 1;
  }
  const filterArr = newsArr;
  return filterArr;
};

const getElement = (num: number) => {
  const ranNum = Math.floor(Math.random());
  return newsArr.filter((el: NewImg, index: number) => index + 1 === ranNum);
};
