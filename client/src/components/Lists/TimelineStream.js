/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import FontAwesome from 'react-fontawesome';
import Typography from 'material-ui/Typography';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Badge } from 'reactstrap';
import Timeago from 'react-timeago';

class TimelineStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            notifications: []
        }
    }

    render() {
        return (
            <div className="activity-streamm">
                <Card >
                    <CardHeader>
                        <h5>Activity</h5>
                    </CardHeader>
                    <CardBody >
                        <div className="scrollable-card" style={{"overflow-x":"scroll"}}>
                            <Timeline style={{ width:"9999px"}}>
                                {this.props.notifications.map(item =>
                                    <div style={{ float:"left"}} class="timeline-event">
                                    <TimelineEvent key={item.title} title={item.title}
                                        icon={<FontAwesome name="cube" />}
                                        iconColor="#0D3799"
                                        container="card"
                                        titleStyle={{ fontWeight: "bold" }}
                                        style={{ width: "400px", float: "left" }}
                                        cardHeaderStyle={{ backgroundColor: "#6283D0", fontSize: "13pt" }}>
                                        <Typography variant="body1">
                                            <b> Datahash:</b> {item.datahash} <br />
                                            <b> Number of Tx:</b> {item.txcount}
                                        </Typography>
                                        <h5>
                                            <Badge >
                                                <Timeago date={item.time} live={false} minPeriod={60} />
                                            </Badge>
                                        </h5>
                                    </TimelineEvent></div>
                                )}
                            </Timeline>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default TimelineStream;
