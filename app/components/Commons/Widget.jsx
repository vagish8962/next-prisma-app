import React from 'react'

function Widget({ children, bgColor }) {
    return (
        <div className="rounded" style={{
            backgroundColor: bgColor
        }}>
            {children}
        </div>
    )
}

export default Widget