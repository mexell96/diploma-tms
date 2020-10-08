import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: 1110,
    margin: "0 auto",
    background: "white",
    padding: 30,
  },
  title: {
    fontSize: "2em",
    fontWeight: 300,
    margin: "0 0 20px",
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
  },
  parag: {
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "normal",
  },
  blockTitle: {
    color: "#ffaa3c",
    fontSize: "2em",
    margin: 0,
    fontWeight: 700,
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
  },
  blockSubtitle: {
    fontSize: "1.6em",
    margin: "0 0 30px",
    fontWeight: 300,
    display: "block",
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
  },
  blockParag: {
    marginBottom: "30px",
    marginTop: 0,
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "normal",
  },
  blockButton: {
    border: "none",
    background: "#ffaa3c",
    padding: "10px",
    borderRadius: "3px",
    color: "#92601e",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
    transition: ".3s ease",
    textDecoration: "none",
    fontFamily: "Roboto, Open Sans, sans-serif",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));

function AboutUS({ person }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>
        Consectetur adipiscing elit sed eiusmod tempor
      </h3>
      <p className={classes.parag}>
        Aenean vehicula eget risus sit amet posuere. Maecenas id risus maximus,
        malesuada leo eget, pellentesque arcu. Phasellus vitae leo rhoncus,
        consectetur mauris vitae, lacinia quam. Nunc turpis erat, accumsan eget
        justo quis, auctor ultricies magna. Mauris sodales, risus sit amet
        hendrerit tincidunt, erat ante facilisis sapien, sit amet maximus neque
        massa a felis. Nullam consectetur justo massa, vel commodo metus gravida
        in. Aliquam erat volutpat. Nullam a lorem sed lorem euismod gravida a eu
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        venenatis ac ligula vel pharetra. Aenean vitae nulla sed dui volutpat
        euismod.
      </p>
      <h3 className={classes.title}>
        Nemo enim ipsam voluptatem quia voluptas
      </h3>
      <p className={classes.parag}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga et harum quidem rerum facilis est et expedita.
        Distinctio nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h3 className={classes.blockTitle}>Exceptur cupidat</h3>
          <h3 className={classes.blockSubtitle}>Incididunt labore dolore</h3>
          <p className={classes.blockParag}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut
            ad optio praesentium amet, ullam vel impedit dignissimos voluptas,
            consequatur recusandae quo autem consectetur tempore rem quam
            corrupti a. Accusamus.
          </p>
          <a href="http://localhost:3000/" className={classes.blockButton}>
            Send a request
          </a>
        </div>
        <div>
          <h3 className={classes.blockTitle}>Neque quisquam</h3>
          <h3 className={classes.blockSubtitle}>Duis aute reprehenderit</h3>
          <p className={classes.blockParag}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            aperiam quidem nobis rem exercitationem aut assumenda iure molestias
            eius accusantium, temporibus quis esse tempora. Laboriosam libero
            odio nobis, eligendi minus.
          </p>
          <a href="http://localhost:3000/" className={classes.blockButton}>
            Send a request
          </a>
        </div>
        <div>
          <h3 className={classes.blockTitle}>Tempor Labore</h3>
          <h3 className={classes.blockSubtitle}>Ratione sequi nesciunt</h3>
          <p className={classes.blockParag}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            commodi impedit ea beatae, in ipsa doloribus consequuntur ut, quod
            dolor dolore unde, esse eligendi autem nobis rem tempora recusandae
            laborum.
          </p>
          <a href="http://localhost:3000/" className={classes.blockButton}>
            Send a request
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
