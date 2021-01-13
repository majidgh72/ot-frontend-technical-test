import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartOptionModifier from '../../services/chartOptionModifier';

function BarChart({ data }) {

    const options = chartOptionModifier( data, "bar" );

    return (
        <div className="half">
            <Bar
                data={ options }
                width={ 300 }
                height={ 240 }
            />
        </div>
    )
}

export default BarChart;