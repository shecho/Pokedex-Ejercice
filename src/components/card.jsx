import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
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

const dinamicBackground = (type) => {
  let styles = {};
  switch (type[0]) {
    case "Grass":
      styles = { backgroundColor: "#00b894" };
      break;
    case "Fire":
      styles = { backgroundColor: "#d63031" };
      break;
    case "Poison":
      styles = { backgroundColor: "#6c5ce7" };
      break;
    case "Water":
      styles = { backgroundColor: "#0984e3" };
      break;
    case "Flying":
      styles = { backgroundColor: "#b2bec3" };
      break;
    case "Bug":
      styles = { backgroundColor: "#fdcb6e" };
      break;
    case "Normal":
      styles = { backgroundColor: "#fd79a8" };
      break;
    default:
      styles = { backgroundColor: "#dfe6e9" };
      break;
  }

  return styles;
};
const PokeCard = (props) => {
  const { name, type, sprite, base } = props.pokemon;
  const classes = useStyles();
  const backgroundStyles = dinamicBackground(type);
   return (
    <div className="card">
      <Card className={classes.root} style={backgroundStyles}>
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h2">
            {name.english}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            <span>{type[0]} </span>
            <span>{type[1]}</span>
          </Typography>
          <div className="container-fluid">
            <img src={sprite} className="img-fluid "  alt="pokemon" />
          </div>
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
