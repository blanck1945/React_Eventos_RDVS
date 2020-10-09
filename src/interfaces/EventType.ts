export interface AdonisEvent {
  id?: number;
  event_name: string;
  event_desc: string;
  event_participants: string[];
  event_organizers: string[];
  event_social_link: string | null;
  event_type: string;
  event_category: string;
  event_dates: string[];
  event_week_day: string;
  event_month: string;
  event_start: string;
  event_country: string;
  event_city: string;
  event_publish: string;
  event_discount: boolean;
  event_discount_per: number;
  event_free: boolean;
  event_active: boolean;
  event_tickets_total: number;
  event_tickets_types: string[];
  event_tickets_price: string[];
  event_img: string;
  next_date?: string;
  last_date?: string;
  low_price?: number;
  average_price?: number;
  eventTickets: Event_Tickets[];
  eventSchedule: Event_Schedule[];
}

export interface Event_Tickets {
  event_day: string;
  event_day_num: number;
  event_tickets_available: number[];
  event_tickets_sell: number[];
  event_tickets_types: string[];
  id?: number;
}

export interface Event_Schedule {
  id?: number;
  schedule_day: string;
  schedule_desc: string[];
  schedule_desciption: string;
  schedule_finishing_time: string;
  schedule_host: string[];
  schedule_hours: string[];
  schedule_participants: string[];
  schedule_starting_time: string;
}
