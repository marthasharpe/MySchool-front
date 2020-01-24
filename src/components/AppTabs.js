import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import ResourceCards from './ResourceCards';

const AppTabs = () => {
    return (
        <Tabs className="justify-content-center" style={{marginTop: '1rem'}}>
            <Tab eventKey="tab1" title="Tab1">
                <ResourceCards />
            </Tab>
            <Tab eventKey="tab2" title="Tab2">
                <ResourceCards />
            </Tab>
            <Tab eventKey="new-tab" title="NewTab">
                <ResourceCards />
            </Tab>
        </Tabs>
    )
}

export default AppTabs;
