import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

const ResourceCards = (props) => {
    
    let sources = props.sources.filter(
        source => source.subject === props.subject.tab
    )
    
    return (
        <React.Fragment>
            {sources.map(source => {
                return (
                    <Card border="success" key={source.link} style={{ marginTop: '2rem'}}>
                        <Card.Body>
                            <Card.Title>
                                {source.title} <Badge variant="secondary" pill>{source.status}</Badge>
                            </Card.Title>
                            <Card.Text>{source.description}</Card.Text>
                            <Card.Link
                                href={source.link}
                                target="_blank"
                                >
                            Go to Source
                            </Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

const mapStateToProps = ({sources}) => ({
    sources
})

export default connect(mapStateToProps)(ResourceCards);
