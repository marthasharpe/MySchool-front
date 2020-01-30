import React from 'react';
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import ResourceCards from './ResourceCards';
import { getData } from '../actions/actionCreators';
import { connect } from 'react-redux';
import NewResource from './NewResource';

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
                            <Row style={{marginTop: "2rem"}} className="justify-content-center">
                                <NewResource />
                            </Row>
                            <Row className="justify-content-center">
                                <Col md={{span: 6}}>
                                    <ResourceCards resource={resource}/>
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
