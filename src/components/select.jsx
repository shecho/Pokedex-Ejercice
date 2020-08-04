import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import NativeSelect from '@material-ui/core/NativeSelect';


const Select = (props) => {
  const { types } = props;
  console.log(types);
  return (
    <div>
      <NativeSelect>
      {types.map((type, id) => {
       return ( 
      <option  name={type} id={id}> 
      {type}
      </option>
      ); 
      })} 
      </NativeSelect>
    </div>
  );
};
export default Select;
