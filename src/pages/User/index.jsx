/* eslint-disable no-unused-vars */
import {Container} from './styles'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {Button} from '../../Components/button'
import {FiUser} from "react-icons/fi";
import {MdMailOutline, MdLockOutline, MdCameraAlt} from "react-icons/md";
import {Link} from 'react-router-dom'
import {api} from '../../services/api'
import {hash, compare} from 'bcryptjs'
import {useState} from 'react'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {useAuth} from '../../hooks/auth'


export function User() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const {user} = useAuth()
    console.log(user)
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
    console.log(avatarUrl)
    

    async function handleChangeAvatar(e) {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            const imagePreview = URL.createObjectURL(file);
            setAvatar(imagePreview);
            
            const formData = new FormData();
            formData.append('avatar', file); // Adicione o arquivo ao FormData
            
            const response = await api.patch('/users/avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Configure o cabeçalho adequado
                }
            })
            .catch(error => {
                console.log('Erro ao atualizar avatar:', error);
            })
            user.avatar = response.data.avatar
            console.log(user)
            localStorage.setItem('@rocketMovies:user', JSON.stringify({
                id: user.id,
                avatar: avatarUrl,
                created_at: user.created_at,
                email: email || user.email,
                name: name || user.name,
                password: user.password
            }))
        }
    }
    

    async function handleUser() {
        const user = JSON.parse(localStorage.getItem('@rocketMovies:user'))
        // console.log(`nameLocal: ${user.name}, emailLocal: ${user.email}, passwordLocal: ${user.password}`)

        const comparated = await compare(password, user.password)

        if(password && !comparated) {
            return alert('Senha atual não confere.')
        } 
        if((password && !newPassword) || (!password && newPassword)) {
            return alert('Para atualizar a senha, digite tanto a senha\n atual como a nova.')
        }

        if(!password && !newPassword) {
            try {
                api.put('/users/update', {
                    name: name || user.name,
                    email: email || user.email
                })
            localStorage.setItem('@rocketMovies:user', JSON.stringify({
                id: user.id,
                avatar: avatarUrl,
                created_at: user.created_at,
                email: email || user.email,
                name: name || user.name,
                password: user.password
            }))

            return alert('Perfil atualizado com sucesso!')
            } catch (error) {
                console.log(error.response.data)
                return
            }
        }
        try {
            api.put('/users/update', {
                name: name || user.name,
                email: email || user.email,
                password: newPassword
            })

            const hashedPass = await hash(newPassword, 8)
            localStorage.setItem('@rocketMovies:user', JSON.stringify({
                id: user.id,
                avatar: avatarUrl,
                created_at: user.created_at,
                email: email || user.email,
                name: name || user.name,
                password: hashedPass
            }))

            return alert('Perfil atualizado com sucesso!')
        } catch (error) {
            console.log(error.response.data)
            return alert('Não foi possível atualizar o perfil.')
        }
    }

    return (
        <Container>
            <div className='header'>
                <div className="backbtn">
                    <Link className='hrefLink' to={'/'}>
                        <BackBtn text={'Voltar'}/>
                    </Link>
                </div>
            </div>

            <div className="user">
                <div className="userLogo">
                    <img src={avatarUrl} alt="user img"/>
                    <label htmlFor="avatar"><MdCameraAlt/></label>
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                </div>

                <div className="inputsBlock">
                    <div className="inputsOne">
                        <Input icon={FiUser} placeTitle={'Usuário'} 
                        onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input icon={MdMailOutline} placeTitle={'E-mail'} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="inputsTwo">
                        <Input icon={MdLockOutline} placeTitle={'Senha atual'}
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                        <Input icon={MdLockOutline} placeTitle={'Nova senha'} 
                        onChange={(e) => {setNewPassword(e.target.value)}}
                        />
                    </div>

                    <Button title={'Salvar'}
                    onClick={handleUser}
                    />
                </div>
            </div>
        </Container>
    )
}