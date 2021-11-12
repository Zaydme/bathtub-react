import React from 'react'

// components
import ControlPanelDiv from '../containers/ControlPanel'

// constants
import { BATHTUB_STATES } from './constants'

function ControlPanel({ waterLevel, bathAction, setBathAction }) {
    return (
        <ControlPanelDiv>
            {Object.entries(BATHTUB_STATES).map(([key, value]) => (
                <button index={key} onClick={() => setBathAction(key)}>
                    {value.action}
                </button>
            ))}
            <span>
                Water counter: {waterLevel} {bathAction && <>({bathAction})</>}
            </span>
        </ControlPanelDiv>
    )
}

export default ControlPanel
