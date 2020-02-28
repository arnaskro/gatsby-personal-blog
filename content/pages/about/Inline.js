import React from 'react'
import Image from './Image'

export default ({ children, style }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}