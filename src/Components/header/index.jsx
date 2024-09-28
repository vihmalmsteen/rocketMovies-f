/* eslint-disable react/prop-types */
import {Container} from './styles'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import {useState, useEffect} from 'react'
import {api} from '../../services/api'
import placeholder from '../../assets/avatar_placeholder.svg'

export function Header({onSearchChange}) {
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('@rocketMovies:user'))
        console.log(localUser.avatar)
        setUserName(localUser.name)
        setUserAvatar(localUser.avatar ? `${api.defaults.baseURL}/files/${localUser.avatar}` : placeholder)
    }, [])  

    const {signOut} = useAuth()
    
    function handleSignOut() {
        signOut()
    }

    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder='Pesquisar pelo título'
            onChange={(e) => onSearchChange(e.target.value)}
            />
            <div>
                <div>
                    <Link className='hrefLink' to={'/User'}>
                        <span>{userName}</span>
                    </Link>
                    <a className='signOutLink' onClick={handleSignOut} href='/'>sair</a>
                </div>
                <Link to={'/User'}>
                    <img src={userAvatar} alt="user img" />
                </Link>
            </div>
        </Container>
    )
}
