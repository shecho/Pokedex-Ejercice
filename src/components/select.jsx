import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";

const Select = (props) => {
  const { types, handleTypeSelect } = props;
  console.log(types);
  return (
    <div>
      <NativeSelect onChange={handleTypeSelect}>
        <option key={0} value="Todos">
          Todos
        </option>
        {types.map((type, id) => {
          return (
            <option name={type} key={id}>
              {type}
            </option>
          );
        })}
      </NativeSelect>
    </div>
  );
};
export default Select;
