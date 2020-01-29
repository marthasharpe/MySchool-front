import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ResourceCards from './ResourceCards';
import { getData } from '../actions/actionCreators';
import { connect } from 'react-redux';

const AppTabs = (props) => {

    // React.useEffect(() => {
    //     props.getData()
    // })

    return (
        <Tabs className="justify-content-center" style={{marginTop: '1rem'}}>
            {props.resources.map(resource => {
                return (
                    <Tab key={resource.Tab} eventKey={resource.Tab} title={resource.Tab}>
                        <ResourceCards resource={resource}/>
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
