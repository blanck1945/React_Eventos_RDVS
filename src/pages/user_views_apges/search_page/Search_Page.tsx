import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../../interfaces/state";
import { AdonisEvent } from "../../../interfaces/EventType";
import Header from "../../../components/header/Header";
import { cleanSearchValue } from "../../../Redux_Store/actions/global_actions/actions";

import "./Sarch_Page.scss";
import ReactFormControl from "../wish_list/wishDis/userPayments/AddCard/FormControl";
import Search_Card from "./Search_Card/Search_Card";

const Search_Page = () => {
  const eventState = useSelector((state: GlobalState) => state.events);
  const globalState = useSelector((state: GlobalState) => state.global);
  const [value, setValue] = React.useState<string>(
    globalState.searchValue ? globalState.searchValue : ""
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => dispatch(cleanSearchValue());
  }, []);

  const initialValues = {};

  const submit = (values: string) => {
    console.log(values);
  };

  const styleValues = {
    div_class: "side_box",
    label_class: "side_label",
    input_class: "side_input",
  };

  const inputs = [
    {
      control: "input",
      rest: {
        ...styleValues,
        label: "Parametro de busqueda",
        name: "search_values",
        value: value,
      },
    },
    {
      control: "select",
      rest: {
        ...styleValues,
        name: "filter_by_type",
        label: "Filtrar por tipo",
        options: ["", "Obra", "Sociales"],
      },
    },
    {
      control: "select",
      rest: {
        ...styleValues,
        name: "filter_by_category",
        label: "Filtrar por Categoria",
        options: ["", "Conferencia", "Debate"],
      },
    },
    {
      control: "select",
      rest: {
        ...styleValues,
        name: "filter_by_price",
        label: "Filtrar por Precio",
        options: ["", "Gratuito", "Pago"],
      },
    },
  ];

  return (
    <div className="user_home">
      <div className="search_home">
        <div className="search_side">
          <Header header="Resultads" header_class="header_side" />
          <div className="side_box">
            <h3 className="side_result">
              Resultados: {eventState?.search_events?.length} eventos{" "}
            </h3>
          </div>
          <ReactFormControl
            controlValues={{
              initialValues,
              handlerSubmit: submit,
            }}
            formFields={inputs}
            btnComp={
              <button className="general_btn btn_fix_search">Buscar</button>
            }
          />
        </div>
        <div className="search_result">
          {eventState.search_events !== undefined
            ? eventState.search_events.map((el: AdonisEvent) => (
                <Search_Card key={el.id} data={el} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Search_Page;
