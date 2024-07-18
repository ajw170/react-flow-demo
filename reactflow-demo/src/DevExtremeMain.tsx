import React from 'react';
import {Link} from "react-router-dom";

const DevExtremeMain = () => {
    return (
        <div><h1 style={{marginBottom: '0rem'}}>DevExtreme Demo</h1>
            <p>Switch to ReactFlow: <Link to={'/'}>Go To ReactFlow</Link></p>
        </div>
    );
};

export default DevExtremeMain;