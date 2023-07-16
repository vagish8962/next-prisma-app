import React from 'react'

function Widget({ children, bgColor }) {
    return (
        <div className="rounded testt" style={{
            backgroundColor: bgColor
        }}>
            {children}
        </div>
    )
}

export default Widget