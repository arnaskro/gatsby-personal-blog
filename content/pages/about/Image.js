import React from 'react'
export default ({ alt, image }) => (
    <img src={image} alt={alt} style={{maxWidth: '6rem'}} aria-hidden={true} />
)