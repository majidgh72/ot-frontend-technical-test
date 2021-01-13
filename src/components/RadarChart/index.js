import React from 'react';
import { Radar } from 'react-chartjs-2';
import chartOptionModifier from '../../services/chartOptionModifier';

function BarChart({ data }) {

    const options = chartOptionModifier( data, "radar" );

    return (
        <div className="half">
            <Radar
                data={ options }
                width={ 300 }
                height={ 240 }
            />
        </div>
    )
}

export default BarChart;