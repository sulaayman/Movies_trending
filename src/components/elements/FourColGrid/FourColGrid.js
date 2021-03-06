import React from 'react';
import PropTypes from 'prop-types'
import './FourColGrid.css';

const FourColGrid = (props) =>{

    const renderElement = () =>{
        const gridElements = props.children.map( (element, i) =>{
            return(
                <div className="rmdb-grid-element" key={i}>
                    {element}
                </div>
            )
        })
        return gridElements;
    }
    return(
        <div className='rmdb-grid'>
            {props.header && !props.loading? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">
                {renderElement()}
            </div>
        </div>
    )
}

FourColGrid.propType = {
    header: PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default FourColGrid;