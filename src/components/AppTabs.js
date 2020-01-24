import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import ResourceCards from './ResourceCards';

const AppTabs = () => {
    return (
        <Tabs>
            <Tab eventKey="tab1" title="Tab1">
                <ResourceCards />
            </Tab>
            <Tab eventKey="tab2" title="Tab2">
                <h1>Tab2</h1>
            </Tab>
            <Tab eventKey="tab3" title="Tab3">
                <h1>Tab3</h1>
            </Tab>
        </Tabs>
    )
}

export default AppTabs;
