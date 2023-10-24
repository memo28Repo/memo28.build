/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-15 10:43:55
 * @LastEditTime: 2023-10-22 10:32:52
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/views/login/hooks/useLogin.ts
 */

import { useNavigate } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from "react"
import { useUserSlice } from '~/hooks/useUserSlice'
import { routerMap } from '~/router/map'
import { UserService } from '~/service/api/user/user'

/**
 *
 * 修改登录页 icon展示逻辑
 *
 * @returns
 */
export function useLoginIcon() {
    /**
     * 输入到密码时显示
     */
    const [pswShow, setPswShow] = useState(false)
    /**
     * 初始化时显示
     */
    const [verifyShow, setVerifyShow] = useState(false)
    /**
     * 所有条件不为空时显示
     */
    const [loginShow, setLoginShow] = useState(false)


    function showPswHandler() {
        if (pswShow) return
        setPswShow(true)
        setVerifyShow(false)
        setLoginShow(false)
    }

    function showLoginHandler() {
        if (loginShow) return
        setPswShow(false)
        setVerifyShow(false)
        setLoginShow(true)
    }

    function showVerifyHandler() {
        if (verifyShow) return
        setPswShow(false)
        setVerifyShow(true)
        setLoginShow(false)
    }

    useEffect(() => {
        showVerifyHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return { showPswHandler, showLoginHandler, showVerifyHandler, pswShow, setPswShow, verifyShow, setVerifyShow, loginShow, setLoginShow }
}


export function useLoginStatus() {
    const { pswShow, verifyShow, loginShow, showPswHandler, showLoginHandler, showVerifyHandler } = useLoginIcon()
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')

    const [rememberMe, setRememberMe] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function isEmailHandler(mail: string) {
        if (!mail.trim().length) {
            return {
                isError: false,
                text: ''
            }
        }
        const isTrue = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.trim()))
        if (isTrue) {
            return {
                isError: false,
                text: ''
            }
        }

        const errors = {
            isError: !isTrue,
            text: '邮箱格式有误'
        }

        return errors
    }

    const isEmail = useMemo(() => {
        return isEmailHandler(email)
    }, [email, isEmailHandler])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function isPswHandler(p: string) {
        const isTrue = (/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/).test(p.trim())
        if (p.trim().length === 0) {
            return {
                isError: false,
                text: ''
            }
        }
        if (p.trim().length < 6) {
            return {
                isError: true,
                text: '密码长度不能少于6位'
            }
        }
        if (isTrue) {
            return {
                isError: false,
                text: ''
            }
        }
        if (!isTrue) {
            return {
                isError: true,
                text: '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
            }
        }
        return {
            isError: false,
            text: ''
        }
    }

    // "密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
    const isPsw = useMemo(() => {
        return isPswHandler(psw)
    }, [psw, isPswHandler])


    const isLoginDisable = useMemo(() => {
        return email.trim().length > 0 && psw.trim().length > 0 && !isEmail.isError && !isPsw.isError
    }, [isEmail, isPsw, psw, email])


    useEffect(() => {
        if (isLoginDisable) {
            showLoginHandler()
        }
    }, [isLoginDisable, showLoginHandler])

    const nav = useNavigate({
        from: routerMap.create.index
    })


    const user = useUserSlice()
    /**
     * 登录逻辑
     *
     * @public
     */
    async function login() {

        const userService = new UserService()

        const result = await userService.Login({
            email: email,
            password: psw
        })
        user.setLoginProfile(result)
        await user.getUserInfo(result.userId)
        await nav()
    }

    return { login, rememberMe, setRememberMe, isEmailHandler, isPswHandler, isLoginDisable, isPsw, psw, email, setPsw, setEmail, pswShow, verifyShow, loginShow, showPswHandler, showLoginHandler, showVerifyHandler, isEmail }
}
