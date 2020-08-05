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
    minHeight: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
});
const PokeCard = (props) => {
  const { name, type, sprite, base } = props.pokemon;
  const classes = useStyles();
  return (
    <div className="card">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" component="p">
            {name.english}
          </Typography>

          <Typography className={classes.title} color="textSecondary">
            {type}
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography className={classes.pos} color="textSecondary">
            Poquemon type
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default PokeCard;
