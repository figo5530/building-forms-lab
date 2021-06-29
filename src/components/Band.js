import React from 'react'

const Band = props => {
    const band = props.bands.map((b) => <li>{b.name}</li>)

    return (
        <div>
            {band}
        </div>
    )
}

export default Band