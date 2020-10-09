import { UserReducer } from "./Reducers/UserReducer";
import { WishReducer } from "./Reducers/WishReducer";
import { EventReducer } from "./Reducers/EventReducer";
import { Global } from "./Reducers/GlobalReducer";

export interface GlobalState {
  global: Global;
  events: EventReducer;
  userCred: UserReducer;
  cart: Cart;
  wish: WishReducer;
}

export interface Cart {
  cart: any[];
  total: number;
}

export interface FireEvent {
  event_id: number;
  event_name: string;
  event_day: number;
  event_month: string;
  event_year: number;
  event_city: string;
  event_country: string;
  event_img: string;
  event_publish: string;
  event_discount: boolean;
  event_discount_per: number;
  event_payment: PaymentMode[];
  event_active: boolean;
  event_price: TicketPrice[];
  event_tickets: string[];
  event_dates: string[];
  event_selling_data: EventInfo[];
}

export interface TicketPrice {
  ticket_name: string;
  ticket_price: number;
}

export interface PaymentMode {
  payment_name: string;
  payment_amount: number;
  payment_interest: number;
}

export interface EventInfo {
  event_day: string;
  event_total_tickets: TicketsInfo[];
  event_amount_tickets: number[];
  event_sell_tickets: number[];
}
export interface TicketsInfo {
  tickets_name: string;
  tickets_amount: number;
  tickets_sell: number;
}

export interface User {
  user_name: string;
  user_last_name: string;
  user_username: string;
  user_email: string;
  user_password: string;
  user_password_confirm: string;
  user_personal_code: number;
  user_worker: boolean;
  user_admin: boolean;
}

export interface Visitor {
  username?: string;
  email: string;
  password: string;
  confirm_password?: string;
  user_role: string;
  promotor_code?: number;
}

export interface Promotor extends Visitor {
  promotor_code: number;
}

export interface AdonisResponse {
  state: string;
  timestamp: any;
  message: string;
  user?: string;
  role?: string;
  token?: JWT;
  query: undefined | number;
  action?: boolean;
}

export interface JWT {
  token: string;
  type: string;
  refreshToken: string;
}
