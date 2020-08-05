import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    minHeight: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});
const PokeCard = (props) => {
  const { name, type, sprite, base } = props.pokemon;
  const classes = useStyles();
  return (
    <div className="card">
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h2">
            {name.english}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            <span>{type[0]} </span>
            <span>{type[1]}</span>
          </Typography>
          <img src={sprite} alt="pokemon" />
          <Typography className={classes.pos} color="textSecondary">
            <strong> Base HP: </strong>
            {base.HP}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <strong> Attack: </strong> {base.Attack}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <strong> Defense: </strong> {base.Defense}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <strong> Speed </strong>
            {base.Speed}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default PokeCard;
