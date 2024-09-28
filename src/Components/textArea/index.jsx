/* eslint-disable react/prop-types */
import {Container} from './styles'

/**
 * TextArea component.
 * 
 * @param {string} value The text to display in the textarea.
 * @param {function} onChange Called when the user changes the text in the textarea.
 * @returns {JSX.Element} The TextArea component.
 */
export function TextArea({value, onChange}) {
    return (
        <Container 
        placeholder='Observações'
        onChange={onChange}
        value={value}>
        </Container>
    )
}

