import React from "react";

const Select = () => {
  return (
    <div>
      <select>
        {/* Usar el estado types y realizar un map para colocar el valor en cada etiqueta option */}
        <option>Normal</option>
        <option>Fire</option>
        <option>Flying</option>
      </select>
    </div>
  );
};
export default Select;
