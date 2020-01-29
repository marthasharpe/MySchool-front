import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import ResourceCards from './ResourceCards';
import { getData } from '../actions/actionCreators';
import { connect } from 'react-redux';
import Details from './Details';

const AppTabs = (props) => {

    // React.useEffect(() => {
    //     props.getData()
    // })

    return (
        <Tabs className="justify-content-center" style={{marginTop: '1rem'}}>
            {props.resources.map(resource => {
                return (
                    <Tab key={resource.Tab} eventKey={resource.Tab} title={resource.Tab}>
                        <Container>
                            <Row>
                                <Col>
                                    <ResourceCards resource={resource}/>
                                </Col>
                                <Col>
                                    <Details />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                )
            })}
        </Tabs>
    )
}

const mapStateToProps = ({resources}) => ({
    resources
})

const mapDispatchToProps = {
    getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTabs);
