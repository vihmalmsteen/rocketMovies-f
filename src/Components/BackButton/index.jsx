/* eslint-disable react/prop-types */
import {Container} from './styles'
import { HiArrowNarrowLeft } from "react-icons/hi";

export function BackBtn({ArrowNeeded=true, text}) {
    return (
        <Container>
            {ArrowNeeded? <HiArrowNarrowLeft/> : ''}
            {text}
        </Container>
    )
}

