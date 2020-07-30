import React from 'react';

import { connect } from 'react-redux';

const ImageContainer = props => {
    return (
        <div className='img-container'>
            <img className='image' src={props.image} alt='placeholder'/>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    {

    }
)(ImageContainer);