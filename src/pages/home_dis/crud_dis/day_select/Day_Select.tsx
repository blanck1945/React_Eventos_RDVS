import * as React from "react";
import { monthArr, years } from "../../utils/utilsArr";

interface DaySelectProps {
  func: any;
}

const Day_Select = ({ func }: DaySelectProps) => {
  return (
    <div className="form_select">
      <h3 className="label_form">Fecha del Evento</h3>
      <div className="select_box">
        <select name="event_day" ref={func} className="num_select">
          {monthArr.map((el: any) =>
            el.days.map((el: number) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))
          )}
        </select>
        <select name="event_month" ref={func} className="num_select">
          {monthArr.map((el: any) => (
            <option value={el} key={el.monthName}>
              {el.monthName}
            </option>
          ))}
        </select>
        <select name="event_year" ref={func} className="num_select">
          {years.map((el: number) => (
            <option value={el} key={el}>
              20{el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Day_Select;
