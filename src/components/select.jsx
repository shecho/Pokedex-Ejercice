import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';


const Select = (props) => {
  const { types } = props;
  console.log(types);
  return (
    <div>
      <NativeSelect>
      {types.map((type, id) => {
       return ( 
      <option  name={type} key={id}> 
      {type}
      </option>
      ); 
      })} 
      </NativeSelect>
    </div>
  );
};
export default Select;
