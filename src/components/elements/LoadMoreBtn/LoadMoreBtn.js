import React from 'react';
import PropTypes from 'prop-types'
import './LoadMoreBtn.css';
import '../Header/Header.css';

const LoadMoreBtn = (props) =>{
    return(
        <div className='rmdb-loadmorebtn' onClick={props.onClick}>
            <p>{props.text}</p>
            <img src="./images/sbo.png" alt="tmdb-logo" className="rmdb-tmdb-logo"/>
        </div>
    )
}

LoadMoreBtn.propType = {
    text:PropTypes.string
}
export default LoadMoreBtn;