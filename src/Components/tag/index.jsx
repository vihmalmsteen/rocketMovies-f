/* eslint-disable react/prop-types */
import {Container} from './styles'


export function MovieTag({title, ...rest}) {
    if (!title) return null;
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}


