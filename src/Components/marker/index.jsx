/* eslint-disable react/prop-types */
import {Container} from './styles'
import {FiPlus, FiX} from "react-icons/fi";


export function Marker({isactive, title, onChange, onClickAdd, onClickDel, ...rest}) {
    return (
        <Container $isactive={isactive} {...rest}>
            {isactive? <FiX onClick={onClickDel}/> : <FiPlus onClick={onClickAdd}/>}
            {isactive? title : <input type="text" onChange={onChange}/>}
        </Container>
    )
}

