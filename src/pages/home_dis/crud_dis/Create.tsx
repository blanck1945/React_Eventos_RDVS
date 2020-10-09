import * as React from "react";
import { useForm } from "react-hook-form";
import Input from "../../login/register/Input";
import { monthArr, years, countryArr, CountryModel } from "../utils/utilsArr";
import "./Create.scss";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState, FireEvent } from "../../../interfaces/state";
import Exit_banner from "./Exit_banner";
import { numFechas } from "./numArr";
import { Event_Values } from "./utils/event_values";
import Day_Select from "./day_select/Day_Select";
import { getUserStars } from "./utils/getArr";

const Create = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, getValues } = useForm({
    defaultValues: Event_Values,
  });
  const onsubmit = (values: any) => console.log(values);
  //createEvent(values);
  const eventState = useSelector((state: GlobalState) => state.events);
  const [optionNum, setOptionNum] = React.useState<number>(0);
  const [create, setCreate] = React.useState<boolean>(false);
  const [eventNum, setEventNum] = React.useState<any>(1);
  const [eventData, setEventData] = React.useState<FireEvent>(undefined);
  const createEvent = (data: any) => {
    console.log(data);
    const event = {
      ...data,
      event_id: eventState.active_events.length + 1,
    };
    setEventData(event);
    setCreate(true);
  };

  return (
    <>
      {create ? (
        <Exit_banner eventData={eventData} setCreate={setCreate} />
      ) : (
        <form className="create_form" onSubmit={handleSubmit(onsubmit)}>
          <Input
            label="Nombre del Evento"
            input_type="text"
            input_name="event_name"
            func={register}
          />
          <Input
            label="Banner del Evento"
            input_type="text"
            input_name="event_img"
            func={register}
          />
          <div className="form_select">
            <h3 className="label_form">Pais del Evento</h3>
            <div className="select_box">
              <select
                name="event_country"
                ref={register}
                className="country_select"
              >
                {countryArr.map((el: CountryModel, index: number) => (
                  <option onClick={() => setOptionNum(index)} key={el.country}>
                    {el.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form_select bot_margin">
            <h3 className="label_form">Ciudad del Evento</h3>
            <div className="select_box">
              <select
                name="event_country"
                ref={register}
                className="country_select"
              >
                {countryArr.map((el: CountryModel, index: number) =>
                  index === optionNum
                    ? el.cities.map((el: string, index: number) => (
                        <option key={el}>{el}</option>
                      ))
                    : null
                )}
              </select>
            </div>
          </div>
          <div className="form_select">
            <h3 className="label_form">Cantidad de Fechas</h3>
            <div className="select_box">
              <select
                name="event_num"
                value={eventNum}
                onChange={(e) => setEventNum(e.target.value)}
                className="num_select"
              >
                {numFechas.map((el: number) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {getUserStars(eventNum, <Day_Select func={register} />)}
          <button className="general_btn">Crear Evento</button>
        </form>
      )}
    </>
  );
};

export default Create;
