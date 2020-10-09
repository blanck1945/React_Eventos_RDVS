import * as React from "react";

import "./Flag.scss";

interface FlagProps {
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const Flag = ({ setFlag }: FlagProps) => {
  return (
    <div className="flag_box">
      <h3 className="flag_text">
        Algo fallo en el proceso de registro. Por favor vuelva a intentarlo
      </h3>
      <button className="flag_btn" onClick={() => setFlag(false)}>
        Entendido
      </button>
    </div>
  );
};

export default Flag;
