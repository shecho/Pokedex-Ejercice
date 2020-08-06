import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const Filter = (props) => {

  const {handleFilter} = props
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          onChange={handleFilter}
          placeholder="Search a pokemon"
          inputProps={{ "aria-label": "description" }}
        />
      </form>
    </div>
  );
};
export default Filter;
