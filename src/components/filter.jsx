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

const Filter = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder="Type here to find a Pokemon"
          inputProps={{ "aria-label": "description" }}
        />
      </form>
    </div>
  );
};
export default Filter;
