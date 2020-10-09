export interface UserReducer {
  userName: string;
  token: string;
  userRole: string;
  msg: string;
  isLog: boolean;
  email: string;
  userPayments: UserCard[];
  wishList: boolean;
}

export interface UserCard {
  id: number;
  card: string;
  type: string;
  public_num: string;
  card_nums: string;
  expiration_date: string;
  security_code: string;
}
