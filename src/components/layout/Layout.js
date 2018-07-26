import React from 'react'
import Aux from '../../hoc/Aux'

export default (props) => {
    return (
        <Aux>
            <div>To1bar, SideDrawer, Bacdrop </div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}
