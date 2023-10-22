/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-15 09:40:00
 * @LastEditTime: 2023-10-22 10:35:27
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/views/login/index.tsx
 */
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { FC } from 'react';
import ForgetPsw from '~/assets/svg/forgetPsw.svg';
import loginBkg from '~/assets/svg/login.svg';
import start from '~/assets/svg/start.svg';
import Verify from '~/assets/svg/verify.svg';
import { useLoginStatus } from './hooks/useLogin';

export const Login: FC<unknown> = () => {
    const { login, rememberMe, setRememberMe, isPswHandler, isEmailHandler, isLoginDisable, setPsw, isPsw, isEmail, verifyShow, loginShow, pswShow, showPswHandler, showVerifyHandler, setEmail } = useLoginStatus()



    return <div className='flex w-screen h-screen' style={{ background: '#E9E9E9' }}>
        <div className='flex-1 flex justify-center items-center'>
            {
                pswShow ?
                    <img className='object-contain h-96 fade-in' src={ForgetPsw} /> : <></>
            }
            {
                verifyShow ?
                    <img className='object-contain h-96 fade-in' src={Verify} /> : <></>
            }
            {
                loginShow ?
                    <img className='object-contain h-96 fade-in' src={loginBkg} /> : <></>
            }
        </div>
        <div className='flex flex-col justify-center items-center slide-in-blurred-right w-96 rounded-lg shadow-2xl m-2 p-3 bg-white'>
            <img src={start} className='object-contain h-24' />
            <div className="font-black text-3xl mt-7">Welcome back!</div>
            <span className='text-xs mt-2 mb-20'>请输入您的详细信息</span>
            <TextField onFocus={() => {
                if (isLoginDisable) return
                showVerifyHandler()
            }} onChange={(event) => {
                setEmail(event.target.value)
                if (isEmailHandler(event.target.value).isError) {
                    showVerifyHandler()
                }
            }} type="email" className='w-72' helperText={isEmail.text} label="email" error={isEmail.isError} placeholder='请输入您的邮箱' variant="standard" />
            <br />
            <TextField onChange={event => {
                setPsw(event.target.value)
                if (isPswHandler(event.target.value).isError) {
                    showPswHandler()
                }
            }} onFocus={() => {
                if (isLoginDisable) return
                showPswHandler()

            }} className='w-72' helperText={isPsw.text} type="password" label="password" error={isPsw.isError} placeholder='请输入您的密码' variant="standard" />
            <br />
            <br />
            <br />
            <Button className='w-72 ' onClick={login} startIcon={<LoginIcon />} disabled={!isLoginDisable} variant="contained" size="medium">登录</Button>
            <br />
            <Button className='w-72 ' startIcon={<GoogleIcon />} variant="contained" size="medium">谷歌登录</Button>
            <br />

            <div className='self-start ml-9'>
                <FormControlLabel control={<Checkbox
                    checked={rememberMe}
                    onChange={() => {
                        setRememberMe(!rememberMe)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="记住我"
                    className=''
                />
            </div>
        </div>
    </div>
}
