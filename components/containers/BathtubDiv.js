import styled from 'styled-components'

import { WATER_BLOCK_HEIGHT } from './WaterBlock'

export default styled.div`
    background-color: #e4e4e4;
    width: ${WATER_BLOCK_HEIGHT * 18}px;
    height: ${WATER_BLOCK_HEIGHT * 6}px;
    border-radius: 0.2rem 0.4rem 3rem 3rem;
    padding: 0;
    margin: ${WATER_BLOCK_HEIGHT / 2}px;
    border: white solid ${WATER_BLOCK_HEIGHT}px;
    border-top: none;
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
`
