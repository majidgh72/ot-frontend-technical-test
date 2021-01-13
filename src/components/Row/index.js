import React, { useState } from 'react';
import classNames from 'classnames';
import BarChart from '../BarChart';
import RadarChart from '../RadarChart';
import './style.scss';

function Row({ data }) {

    const [ expanded, setExpanded ] = useState( false );


    const cells = Object.keys(data).map(function (key, index) {
        return key !== "association_scores" 
            ? <td key={ index }>{ data[key] }</td>
            : null;
    });


    function togglePanel() {
        setExpanded( !expanded );
    }

    return (
        <>
            <tr>
                <td>
                    <button
                        className="expand-button"
                        onClick={ togglePanel }
                    >+</button>
                </td>
                { cells }
            </tr>
            <tr className={
                    classNames(
                        "expandable-row",
                        { "active": expanded }
                    )
                }
            >
                <td colSpan="5">
                    <div className="charts-wrapper">
                        <BarChart data={ data.association_scores } />
                        <RadarChart data={ data.association_scores } />
                    </div>
                </td>
            </tr>
        </>
        
    );
}

export default Row;