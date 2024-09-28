import {MainContainer, DivContainer, ImgBgContainer} from './styles'
import BgImg from '../../assets/backgroundImg.png'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {BackBtn} from '../../Components/BackButton'
import {FiUser} from "react-icons/fi";
import {MdMailOutline, MdLockOutline} from "react-icons/md";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {api} from '../../services/api'            // Importando o axios pra fazer requisições ao BACKEND


/**
 * Pagina de cadastro, onde o usuário pode cadastrar
 * uma conta no RocketMovies.
 * 
 * @returns {JSX.Element}
 */
export function SignOut() {

    // useState retorna [valor, função de atualização do valor]
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    /**
     * Função que faz o cadastro de um novo usuário,
     * fazendo uma requisição POST para o backend com
     * os dados de nome, email e senha.
     * 
     * @param {string} name nome do usuário
     * @param {string} email email do usuário
     * @param {string} password senha do usuário
     */
    function handleSignUp() {
        console.log(name, email, password)
        if(!name || !email || !password) {
            alert('Preencha todos os campos!')
        }
        
        api.post('/users/create', {
            name: name,
            email: email,
            password: password
        }).then(() => {
            alert('Cadastrado com sucesso!')
            setName('')
            setEmail('')
            setPassword('')
        }).catch((err) => {
            if(err.response){
                const parser = new DOMParser()
                const erroHtml = parser.parseFromString(err.response.data, 'text/html')
                let erro = erroHtml.querySelector('pre').textContent
                erro = erro.split(': ')[1].split('at create')[0]
                alert(erro)
            } else {
                alert('Erro no cadastro!')
            }
        })
    }

    return(
        <MainContainer>

            <DivContainer>

                <div className="central">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>

                    <Input 
                    icon={FiUser} placeTitle={'Nome'} 
                    onChange={(e) => {
                        setName(e.target.value)
                        console.log(name)
                    }}
                    />
                    <Input 
                    icon={MdMailOutline} placeTitle={'E-mail'} 
                    onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(email)
                    }}
                    />
                    <Input 
                    icon={MdLockOutline} type={'password'} placeTitle={'Senha'} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                        console.log(password)
                    }}
                    />
                    {/* <Link className='hrefLink' to={'/'}> */}
                        <Button title={'Criar conta'} onClick={handleSignUp}/>
                    {/* </Link> */}
                </div>
                <Link className='hrefLink' to={'/SignIn'}>
                    <BackBtn text={'Voltar para o login.'}/>
                </Link>
            
            </DivContainer>

            <ImgBgContainer>
                <img src={BgImg}/>
            </ImgBgContainer>

        </MainContainer>
    )
}
