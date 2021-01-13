import React from 'react';
import Row from '../Row';
import columns from '../../data/columns';
import './styles.scss';


function Table({ data, sortHandler }) {

    data.length = 5;

    const columnNames = columns.map((item, index) => {
        return (
            <th
                key={index}
                onClick={ () => sortHandler( item.data ) }
            >{ item.label }</th>
        );
    });

    const rows = data.map((item, index) => {
        return (
            <Row key={ index } data={ item } />
        );
    });

    return (
        <div className="table-wrapper">
            <div className="container">
                <table>
                    <thead>
                        <tr>{columnNames}</tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;