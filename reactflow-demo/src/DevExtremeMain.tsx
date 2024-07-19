import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {
    ConnectionPoint,
    CustomShape,
    Diagram,
    Group,
    HistoryToolbar,
    PropertiesPanel,
    Toolbox,
    ViewToolbar,
} from 'devextreme-react/diagram';
import {RequestEditOperationEvent} from 'devextreme/ui/diagram';
import 'devextreme/dist/css/dx.light.css';
import And from './and.svg';
import Or from './or.svg';
import Not from './not.svg';
import Velocity from './velocity.svg';
import Occupancy from './occupancy.svg';
import Volume from './volume.svg';
import './App.css';
import {VelocityNode} from "./devExtremeNodes/velocityNode.tsx";
import {VolumeNode} from "./devExtremeNodes/volumeNode.tsx";
import {OccupancyNode} from "./devExtremeNodes/occupancyNode.tsx";

const DevExtremeMain = () => {

    const [velocitySelectorSelected, setVelocitySelectorSelected] = useState<boolean>(false);
    const [occupancySelectorSelected, setOccupancySelectorSelected] = useState<boolean>(false);
    const [volumeSelectorSelected, setVolumeSelectorSelected] = useState<boolean>(false);

    function onSelectionChanged(e: any) {
        const selectedItems = e.items;
        if (selectedItems.length > 1) {
            setVelocitySelectorSelected(false);
            setVolumeSelectorSelected(false);
            setOccupancySelectorSelected(false);
        }
        if (selectedItems.length === 1) {
            const selectedItem = selectedItems[0];
            if (selectedItem.itemType === 'shape' && selectedItem.type === 'velocityShape') {
                setVelocitySelectorSelected(true);
                setOccupancySelectorSelected(false);
                setVolumeSelectorSelected(false);
            }
            else if (selectedItem.itemType === 'shape' && selectedItem.type === 'occupancyShape') {
                setOccupancySelectorSelected(true);
                setVolumeSelectorSelected(false);
                setVelocitySelectorSelected(false);
            }
            else if (selectedItem.itemType === 'shape' && selectedItem.type === 'volumeShape') {
                setVolumeSelectorSelected(true);
                setVelocitySelectorSelected(false);
                setOccupancySelectorSelected(false);
            }
            else {
                setVelocitySelectorSelected(false);
                setVolumeSelectorSelected(false);
                setOccupancySelectorSelected(false);
            }
            
        }
        if (selectedItems.length === 0) {
            setVelocitySelectorSelected(false);
            setVolumeSelectorSelected(false);
            setOccupancySelectorSelected(false);
        }
    }

    function onRequestEditOperation(e: RequestEditOperationEvent) {
        console.log("old shape: " + e.args.oldShape?.type + ", new shape: " + e.args.newShape?.type);
        console.log(e.args.connector?.fromId + " -> " + e.args.connector?.toId + e.args);
        // if (e.operation === 'changeConnection' && e.args.oldShape.type === e.args.newShape.type) {
        //     e.allowed = false;
        // }
    }


    return (
        <div><h1 style={{marginBottom: '0rem'}}>DevExtreme Demo</h1>
            <p>Switch to ReactFlow: <Link to={'/'}>Go To ReactFlow</Link></p>
            <div className={'container'}>
                <div className={'left-div-devextreme'}>
                    <Diagram id="diagram" simpleView={true} width={'auto'}
                             onSelectionChanged={onSelectionChanged} onRequestEditOperation={onRequestEditOperation}>
                        <Toolbox>
                            <Group category={'combinators' as any} title={'Combinators'} expanded={true}
                                   displayMode={'icons'}/>
                            <Group category={'selectors' as any} title={'Selectors'} expanded={true}
                                   displayMode={'texts'}/>
                        </Toolbox>
                        <ViewToolbar visible={false}/>
                        <HistoryToolbar visible={false}/>
                        <CustomShape
                            category="combinators"
                            type="andShape"
                            title={'and'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'and'}
                            allowEditText={true}
                            backgroundImageUrl={And}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                        <CustomShape
                            category="combinators"
                            type="orShape"
                            title={'or'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'or'}
                            allowEditText={true}
                            backgroundImageUrl={Or}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                        <CustomShape
                            category="combinators"
                            type="notShape"
                            title={'not'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'not'}
                            allowEditText={true}
                            backgroundImageUrl={Not}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                        <CustomShape
                            category="selectors"
                            type="velocityShape"
                            title={'velocity'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'velocity'}
                            allowEditText={true}
                            backgroundImageUrl={Velocity}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                        <CustomShape
                            category="selectors"
                            type="occupancyShape"
                            title={'occupancy'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'occupancy'}
                            allowEditText={true}
                            backgroundImageUrl={Occupancy}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                        <CustomShape
                            category="selectors"
                            type="volumeShape"
                            title={'volume'}
                            defaultWidth={1}
                            defaultHeight={1}
                            defaultText={'volume'}
                            allowEditText={true}
                            backgroundImageUrl={Volume}
                            backgroundImageLeft={0}
                            backgroundImageTop={0}
                            backgroundImageWidth={0}
                            backgroundImageHeight={0}>
                            <ConnectionPoint x={0.5} y={0}/>
                            <ConnectionPoint x={0.5} y={1}/>
                        </CustomShape>
                    </Diagram>
                </div>
                <div className={'right-div-devextreme'}>
                    {!velocitySelectorSelected && !occupancySelectorSelected && !volumeSelectorSelected && 
                        <span>Click on a selector node to see options</span>}
                    {velocitySelectorSelected && <VelocityNode></VelocityNode>}
                    {occupancySelectorSelected && <OccupancyNode></OccupancyNode>}
                    {volumeSelectorSelected && <VolumeNode></VolumeNode>}
                </div>
            </div>
        </div>
    );
};

export default DevExtremeMain;