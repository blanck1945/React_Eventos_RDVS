import * as React from "react";
import { useHistory } from "react-router-dom";

import "./formComp.scss";

interface CongratzProps {
  setCongratz: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterValue: React.Dispatch<React.SetStateAction<string>>;
}

const Congratz = ({ setCongratz, setRegisterValue }: CongratzProps) => {
  const [num, setNum] = React.useState<number>(5);
  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      setNum((num) => num - 1);
    }, 1000);
    if (num === 0) {
      setCongratz(false);
      setRegisterValue("Iniciar Sesión");
    }
  }, [num]);

  return (
    <div className="comp_box">
      <h3 className="congratz_text">Usuario registrado con exito</h3>
      <h3 className="congratz_text">Reedirigiendo a login en {num}</h3>
    </div>
  );
};

export default Congratz;
