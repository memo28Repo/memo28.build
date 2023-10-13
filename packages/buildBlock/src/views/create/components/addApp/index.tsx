/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:17:14
 * @LastEditTime: 2023-10-05 13:18:34
 * @Description: 
 * @FilePath: /buildingBlocks/src/views/create/components/addApp/index.tsx
 */
import CancelIcon from '@mui/icons-material/Cancel'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Ref, forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '~/hooks/store.ts'
import { App } from '~/service/api/app/app'
import { AppService } from '~/service/api/app/appType'
import { addApp as addAppReducers, appType } from '~/store/form/addApp.ts'
import { addAppRef } from './addAppRef'

// import {} from '@mui/material/'


export interface AddAppProps {
    onCreateSuc?(): void
}

export const AddApp = forwardRef((props: AddAppProps, ref: Ref<addAppRef>) => {
    const [open, setOpen] = useState(false)
    const addApp = useAppSelector((state) => {
        return state.addApp
    })

    useImperativeHandle<addAppRef, addAppRef>(ref, () => {
        return {
            openSwitch() {
                setOpen(!open)
            }
        }
    })
    const dispatch = useAppDispatch()

    // 提交信息是否完善 是否满足提交标准
    const isCreate = useMemo(() => {
        return !(Object.values(addApp).every(item => !!(item)))
    }, [addApp]);

    const hasNews = useMemo(() => {
        return (Object.values(addApp).filter(item => !!(item))).length
            && open === false
    }, [addApp, open])

    function handleChange(item: { target: { value: number } }) {
        dispatch(
            addAppReducers.actions.setType({ type: item.target.value })
        )
    }

    function changeName(item: { target: { value: string } }) {
        dispatch(
            addAppReducers.actions.setName({
                name: item.target.value
            })
        )
    }

    function changeDesc(item: { target: { value: string } }) {
        dispatch(
            addAppReducers.actions.setDesc({
                desc: item.target.value
            })
        )
    }


    async function isCreateHandler() {
        const h: AppService.create.req = {
            name: addApp.name,
            type: addApp.type,
            desc: addApp.desc
        }
        const appService = new App()
        await appService.create(h)
        props.onCreateSuc?.()
    }


    return <>
        <div
            onClick={() => {
                setOpen(true)

            }}
            className={`shadow-2xl bg-white transition duration-300 cursor-pointer select-none rounded-t-lg visible w-full fixed left-0 bottom-0 ${!hasNews && 'translate-y-96'} `}>
            <div className={'flex items-center justify-center mt-2 cursor-pointer'}>
                <div className={'w-20 h-2 bg-gray-300 rounded'}></div>
            </div>
            <Typography sx={{ p: 2, color: 'text.secondary' }}>您有一张待完成表单</Typography>
        </div>
        {
            hasNews ?
                <div className='h-20'></div> : <></>
        }
        <Drawer
            anchor={'bottom'}
            closeAfterTransition
            open={open}
            onClose={() => {
                setOpen(false)
            }}
        >
            <div className='flex-col flex justify-center' style={{ height: '20rem' }}>
                <FormControl sx={{ m: 1 }} size="small">
                    <InputLabel>应用类型</InputLabel>
                    <Select
                        value={addApp.type}
                        label="应用类型"
                        placeholder='请选择应用类型'
                        onChange={handleChange}
                    >
                        <MenuItem value={appType.web}>Web</MenuItem>
                        <MenuItem value={appType.h5}>H5</MenuItem>
                        <MenuItem value={appType.uni}>Uni</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1 }} size="small">
                    <InputLabel>应用标识</InputLabel>
                    <Input value={addApp.name} placeholder='请输入应用标识' onChange={changeName} />
                </FormControl>

                <FormControl sx={{ m: 1 }} size="small">
                    <TextField label="应用描述"
                        className='px-3'
                        value={addApp.desc}
                        onChange={changeDesc}
                        placeholder="请输入应用描述" multiline rows={4}></TextField>
                </FormControl>

                <div
                    className='px-3 flex'
                >
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setOpen(false)
                        }}
                        startIcon={<CancelIcon />}
                    >
                        取消
                    </Button>
                    <div className='mr-3'></div>
                    <Button
                        variant="contained"
                        // sx={buttonSx}
                        disabled={isCreate}
                        onClick={isCreateHandler}
                        startIcon={<TaskAltIcon />}
                    >
                        创建应用
                    </Button>
                </div>
            </div>
        </Drawer>
    </>
})
