import * as React from "react";
import Header from "../../../../../components/header/Header";

import "./Preferences.scss";

export interface Prefer {
  news: string;
  recommend: string;
  offers: string;
  info: string;
}

const Preferences = () => {
  const [prefer, setPrefer] = React.useState<Prefer>({
    news: "false",
    recommend: "false",
    offers: "false",
    info: "false",
  });

  const handlerInputs = (e: any) => {
    const value = e.target.value === "false" ? "true" : "false";
    setPrefer({
      ...prefer,
      [e.target.name]: value,
    });
  };

  const converToBool = (value: string) => {
    return value === "false" ? false : true;
  };

  const submitPrefer = (e: any) => {
    e.preventDefault();
    const newPrefer = {
      news: converToBool(prefer.news),
      recommend: converToBool(prefer.recommend),
      offers: converToBool(prefer.offers),
      info: converToBool(prefer.info),
    };
    console.log(newPrefer);
  };

  return (
    <div className="prefer_box">
      <Header header="Preferencias de Comunicación" header_class="header_fix" />
      <form onSubmit={(e) => submitPrefer(e)} className="prefer_comunication">
        <div className="prefer_check_div">
          <input
            type="checkbox"
            name="news"
            value={prefer.news}
            onChange={(e) => handlerInputs(e)}
          />
          <label className="chack_label">
            Me gustaría recibir noticias de Eventos RDVS
          </label>
        </div>
        <div className="prefer_check_div">
          <input
            type="checkbox"
            name="recommend"
            value={prefer.recommend}
            onChange={(e) => handlerInputs(e)}
          />
          <label className="chack_label">
            Me gustaría recibir recomendaciones de Eventos RDVS
          </label>
        </div>
        <div className="prefer_check_div">
          <input
            type="checkbox"
            name="offers"
            value={prefer.offers}
            onChange={(e) => handlerInputs(e)}
          />
          <label className="chack_label">
            Me gustaría recibir ofertas de Eventos RDVS
          </label>
        </div>
        <div className="prefer_check_div">
          <input
            type="checkbox"
            name="info"
            value={prefer.info}
            onChange={(e) => handlerInputs(e)}
          />
          <label className="chack_label">
            Me gustaría suscribirme al boletin de Eventos RDVS
          </label>
        </div>
        <button className="general_btn btn_fix">
          Cambiar las preferencias de contacto
        </button>
      </form>
    </div>
  );
};

export default Preferences;
