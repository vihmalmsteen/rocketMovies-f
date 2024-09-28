import {Container} from './styles'
import {Header} from '../../Components/header'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {TextArea} from '../../Components/textArea'
import {Button} from '../../Components/button'
import {Marker} from '../../Components/marker'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {api} from '../../services/api'

export function CreateMovie() {
    const [name, setName] = useState('')
    const [score, setScore] = useState(0)
    const [observation, setObservation] = useState('')
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    // >>>> tags
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
        console.log(tags)
    }
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag!== deleted))
    }
    // <<<< tags

    function handleNewMovie() {
        if(name === '' || score == '' || observation === '') {
            return alert('Preencha todos os campos')
        }

        try {
            api.post('/notes/create', {
                title: name, 
                rating: score,
                description: observation,
                tags: tags
            })
            alert('Nota de filme criada com sucesso!')
        } catch (error) {
            if(error.response) {
                return alert(error.response)
            }
            console.log(error)
            alert('Ocorreu um erro. Tente novamente mais tarde.')
        }
    }

    return (
        <Container>
            <div className='PageHeader'>
                <Header />
            </div>
              <div className='main'>
                <Link className='hrefLink' to={'/'}>
                    <BackBtn text={'Voltar'}/>
                </Link>
                <h1>Novo Filme</h1>
                <div>
                  <Input type={'text'} placeTitle={'Título'} 
                  onChange={(e)=>{setName(e.target.value)}}
                  />
                  <Input type={'number'} max='5' min='0' placeTitle={'Sua nota (de 0 a 5)'}
                  onChange={(e)=>{setScore(e.target.value)}}
                  />
                </div>
                <TextArea
                    value={observation}
                    onChange={(e) => { setObservation(e.target.value) }}
                />
                <p>Marcadores</p>
                
                <div className='Markers'>
                    {
                        tags.map((tag, index) => {
                            return <Marker
                                key={index}
                                title={tag}
                                isactive
                                onClick={() => handleRemoveTag(tag)}
                            />
                        })
                    }
                    <Marker title={'Novo marcador'}
                    onChange={(e)=>{setNewTag(e.target.value)}}
                    onClickAdd={handleAddTag}
                    />
                </div>

                <div className='saveBtns'>
                    <Button title={'Salvar alterações'}
                    onClick={handleNewMovie}
                    />
                </div>
            </div>
        </Container>
    )
}

