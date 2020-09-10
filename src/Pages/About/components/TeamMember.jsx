import React from 'react'
import { Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "0 15px 0 15px",
    },
    flex: {
        display: "flex",
        textAlign: "center",
    },
    flexNew: {
        display: "flex",
        padding: "0 0 0 100px",
    },
    avatarCenter: {
        margin: "0 auto",
        textAlign: "center",
    }
}));

function TeamMember({ person }) {
    const classes = useStyles();
    const [social] = person.social;
    const soialForMap = Object.entries(social);

    return (
        <div className={classes.avatarCenter} >
            <Avatar alt={person.name} src={person.avatar} className={classes.large} />
            <h3>{person.name}</h3>
            <span>{person.role}</span>
            <ul className={classes.flexNew}>
                {soialForMap.map(([name, link]) => <li className={classes.flex}>
                    <a target="_blank" rel="noopener noreferrer" href={link}><FontAwesomeIcon color="rgb(132, 135, 141)" icon={["fab", name]} key={name} /></a>
                </li>)}
            </ul>
        </div>
    )
}

export default TeamMember
