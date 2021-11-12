import React, { useState, useEffect } from 'react'

// utils
import { conditionalDelayedStateUpdate } from './_utils'
import { BATHTUB_STATES, WATER_UPDATE_INTERVAL } from './constants'

// components
import WaterBlock from '../containers/WaterBlock'
import BathtubDiv from '../containers/BathtubDiv'
import ControlPanel from './ControlPanel'

function Bathtub() {
    const [waterLevel, setWaterLevel] = useState(0)
    const [bathAction, setBathAction] = useState(null)
    const [updateTimeout, setUpdateTimeout] = useState(null)

    useEffect(() => {
        clearTimeout(updateTimeout)
        if (
            BATHTUB_STATES[bathAction] &&
            BATHTUB_STATES[bathAction].condition(waterLevel)
        )
            return setUpdateTimeout(
                conditionalDelayedStateUpdate(
                    BATHTUB_STATES[bathAction].condition(waterLevel),
                    BATHTUB_STATES[bathAction].stateTransformer,
                    setWaterLevel,
                    WATER_UPDATE_INTERVAL
                )
            )
    }, [waterLevel, bathAction])

    return (
        <div>
            <BathtubDiv>
                {Array(waterLevel)
                    .fill(null)
                    .map((_, index) => (
                        <WaterBlock key={index} />
                    ))}
            </BathtubDiv>
            <ControlPanel
                setBathAction={setBathAction}
                waterLevel={waterLevel}
                bathAction={bathAction}
            />
        </div>
    )
}

export default Bathtub
