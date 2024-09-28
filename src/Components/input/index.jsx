/* eslint-disable react/prop-types */
import {Container} from './styles'


export function Input({type, placeTitle, icon:Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input type={type} placeholder={placeTitle} {...rest}/>
        </Container>
    )
}
