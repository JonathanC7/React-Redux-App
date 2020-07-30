import React from 'react';
import { connect } from 'react-redux';

import ImageContainer from './ImageContainer'

import { fetchAllImages } from '../actions/index'

const ImageGetter = props => {
    if(props.isFetching){
        return <div>**FETCHING IMAGES**</div>
    }
    return (
        <>  
            <button onClick={() => props.fetchAllImages()}>fetch images</button>
            {props.images.map(img => {
                return <ImageContainer image={img} key={Date.now()}/>
            })}
            <p className="error">{props.error}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        images: state.images,
        isFetching: state.isFetching,
        error: state.error    
    }
}

export default connect(
    mapStateToProps,
    {
        fetchAllImages 
    }
)(ImageGetter);