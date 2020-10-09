import * as React from "react";

interface SelectCountryProps {
  register: any;
}

const SelectCountry = ({ register }: SelectCountryProps) => {
  const countryArr = ["Argentina", "Chile", "Uruguay", "Brasil"];

  return (
    <>
      <label>País</label>
      <select className="select_country" name="country" ref={register}>
        {countryArr.map((el: string, index: number) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCountry;
