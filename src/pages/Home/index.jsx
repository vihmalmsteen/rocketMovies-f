/* eslint-disable no-unused-vars */
import {Header} from '../../Components/header'
import {Button} from '../../Components/button'
import {FiPlus} from "react-icons/fi"
import {Container} from './styles'
import {MyMoviesContainer} from '../../Components/movieBlock'
import {Link, Navigate} from 'react-router-dom'
import {api} from '../../services/api'
import {useState, useEffect} from 'react'



export function Home() {

    
    const [titles, setTitles] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function searchMovies() {
            const response = await api.get(`/notes/read?title=${search}`)
            
            const movies = response.data.map(movie => ({
                ...movie,
                tags: JSON.parse(movie.tags),
                tagsIds: JSON.parse(movie.tagsIds)
            }))
            setTitles(movies)
            console.log(movies)
        }
        searchMovies()
    }, [search])
    
    
    
    return (
        <Container>
            <Header onSearchChange={(e)=>{setSearch(e)}}/>
                <div>
                    <h1>Meus Filmes</h1>
                    <div className='addTitle'>
                        <Link className='linkHref' to='/CreateMovie'>
                            <Button icon={<FiPlus/>} title={'Adicionar filme'}/>
                        </Link>
                    </div>
                </div>
                <div className='MoviesContainerClass'>
                    {
                        titles && titles.map(title => {
                            return <MyMoviesContainer
                            key={title.id}
                            title={title.title}
                            rating={title.rating}
                            text={title.description}
                            note_id={title.id}                
                            data={title}
                            >
                            </MyMoviesContainer>
                            })
                    }
                </div>
        </Container>
    )
}


