import React, {useCallback} from 'react';

export function VelocityNode() {
    return (
        <>
            <div style={{
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                backgroundColor: 'lightblue'
            }}>
                <h3>Velocity</h3>
                <div>
                    <div>
                        <label>
                            <input type="radio" value=">" name="operator"/> {'Greater Than (>)'}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="=" name="operator"/> {'Equals (=)'}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="<" name="operator"/> {'Less Than (<)'}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="text">Value:</label>
                        <input id="text" name="text" className="nodrag"/>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="ignoreSuspectValues"/> {'Ignore suspect values?'}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
