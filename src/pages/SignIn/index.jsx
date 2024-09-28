import {MainContainer, DivContainer, ImgBgContainer} from './styles'
import BgImg from '../../assets/backgroundImg.png'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {BackBtn} from '../../Components/BackButton'
import {MdMailOutline, MdLockOutline} from "react-icons/md";
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth.jsx'
import {useState} from 'react'

/**
 * Pagina de login, onde o usuário pode fazer
 * login no RocketMovies.
 * 
 * @returns {JSX.Element}
 */
export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn} = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }

    return(
        <MainContainer>

            <DivContainer>

                <div className="central">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>

                    <Input icon={MdMailOutline} placeTitle={'E-mail'} onChange={(e) => {setEmail(e.target.value)}}/>
                    <Input icon={MdLockOutline} type={'password'} placeTitle={'Senha'} onChange={(e) => {setPassword(e.target.value)}}/>
                    <Link className='hrefLink' to={'/'}>
                        <Button title={'Entrar'} onClick={handleSignIn}/>
                    </Link>
                </div>
                <Link className='hrefLink' to={'/SignOut'}>
                    <BackBtn ArrowNeeded={false} text={'Criar conta'}/>
                </Link>
            </DivContainer>

            <ImgBgContainer>
                <img src={BgImg}/>
            </ImgBgContainer>

        </MainContainer>
    )
}


