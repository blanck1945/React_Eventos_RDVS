export interface Event_Tickets {
  event_day: string;
  event_day_num: number;
  event_tickets_available: number[];
  event_tickets_sell: number[];
  event_tickets_types: string[];
  id: number;
}

export interface Event_Schedule {
  id: number;
  schedule_day: string;
  schedule_desc: string[];
  schedule_desciption: string;
  schedule_finishing_time: string;
  schedule_host: string[];
  schedule_hours: string[];
  schedule_participants: string[];
  schedule_starting_time: string;
}
