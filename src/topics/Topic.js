import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';


class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'topic': [],
        }
    }
    componentDidMount() {
        console.log("starting")
        const url = API_BASE_URL + "/api/topic"
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({'topic': response}))
    }

    render() {


        const classes = makeStyles(theme => ({
            root: {
                width: '100%',
            },
            heading: {
                fontSize: theme.typography.pxToRem(15),
                fontWeight: theme.typography.fontWeightRegular,
            },
        }));
        return (
            <div className={classes.root}>
            {this.state.topic.map(function (topic){
                return(
                    <ExpansionPanel className="topic-list">
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><b>{topic.title}</b></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className="topic-details">
                                <b>Description:</b><br/>{topic.description}<br/>
                                <b>Completed:</b><br/> {topic.complete.toString()}<br/>
                                <b>Creation date:</b><br/> {topic.creationdate}<br/>
                                <b>Completion date:</b><br/> {topic.completiondate}
                            </Typography>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )

                })}
            </div>
        )
    }
}
export default Topic;