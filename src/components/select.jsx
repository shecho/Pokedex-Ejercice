import React from "react";

const Select = (props) => {
  const { types } = props;
  console.log(types);
  return (
    <div>
      <select>
        {types.map((type, id) => {
          return (
            <option  name={type} id={id}>
              {type}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
