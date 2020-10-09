import * as React from "react";
import General from "./crud_dis/General";
import Header from "../../components/header/Header";

import "./Crud.scss";
import Create from "./crud_dis/Create";

const Crud = () => {
  const [crudQuery, setCrudQuery] = React.useState<string>("read");

  return (
    <div className="dash">
      <Header header="CRUD" />
      <div className="crud_btn">
        <button
          className={crudQuery === "create" ? "active" : "general_btn"}
          onClick={() => setCrudQuery("create")}
        >
          Create
        </button>
        <button
          className={crudQuery === "read" ? "active" : "general_btn"}
          onClick={() => setCrudQuery("read")}
        >
          Read
        </button>
        <button className={crudQuery === "update" ? "active" : "general_btn"}>
          Update
        </button>
        <button className={crudQuery === "delete" ? "active" : "general_btn"}>
          Delete
        </button>
      </div>
      <div className="crud_dis">
        {crudQuery === "read" && <General />}
        {crudQuery === "create" && <Create />}
      </div>
    </div>
  );
};

export default Crud;
