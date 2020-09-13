import React from 'react'
import { Grid } from '@material-ui/core'
import FooterPage from "./components/FooterPage";

import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.jpg";

const footerData = [
    {
        title: "About us", info:
        {
            type: "text",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate"
        }
    },
    {
        title: "Recent Review",
        info:
        {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor", link: "/revews/1"
                },
                {
                    text: "Lorem ipsum dolor", link: "/revews/2"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/3"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/4"
                }
            ]
        }
    },
    {
        title: "Help Center",
        info:
        {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor", link: "/revews/1"
                },
                {
                    text: "Lorem ipsum dolor", link: "/revews/2"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/3"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/4"
                }
            ]
        }
    },
    {
        title: "Join Us",
        info:
        {
            type: "array",
            description: [
                {
                    text: "Lorem ipsum dolor", link: "/revews/1"
                },
                {
                    text: "Lorem ipsum dolor", link: "/revews/2"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/3"
                }, {
                    text: "Lorem ipsum dolor", link: "/revews/4"
                }
            ]
        }
    },
    {
        title: "Social Media",
        info:
        {
            type: "array",
            description: [
                {
                    text: "Facebook", link: "facebook.com"
                },
                {
                    text: "Twitter", link: "twitter.com"
                }, {
                    text: "Google+", link: "google.com"
                }, {
                    text: "Pinterest", link: "pinterest.com"
                }
            ]
        }
    },
    {
        title: "Newsletter",
        info:
        {
            type: "form",
            formType: "email"
        }
    }
];

const useStyles = makeStyles({
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${background})`,
        width: 1170,
        margin: "0 auto",
        padding: "0px 366.5px 0px 366.5px",
        color: "#84878d",
        fontFamily: "Roboto, Open Sans, sans-serif",
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "normal",
    },
    footerTitle: {
        color: "#bec1c8",
        fontWeight: 300,
        margin: "0 0 20px",
        fontSize: "12.5px",
        fontFamily: "Roboto, Open Sans, sans-serif",
        lineHeight: "normal",
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Grid container className={classes.footerTitle}>
                {footerData.map(elem => <Grid item md={2} sm={12}><FooterPage  title={elem.title} info={elem.info} /></Grid>)}
            </Grid>
            <p>Copyright 2014 Company name, Designed by Themezy. All rights reserved</p>
        </div>
    )
}

export default Footer;
