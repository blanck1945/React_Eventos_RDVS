export interface LocalVar {
  id: number;
  token: string;
  user: string;
}

export const localVar: LocalVar = {
  id: parseInt(window.localStorage.getItem("id")),
  token: window.localStorage.getItem("token"),
  user: window.localStorage.getItem("user"),
};
