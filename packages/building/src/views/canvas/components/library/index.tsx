/*
 * @Author: @memo28.repo
 * @Date: 2023-11-19 10:56:17
 * @LastEditTime: 2023-11-19 15:41:18
 * @Description: 组件库
 * @FilePath: /buildingRepo/packages/building/src/views/canvas/components/library/index.tsx
 */
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { FC } from 'react';


const Library: FC<{}> = () => {
    return <>
        <div className='text-sm transition-all h-screen w-14 hover:w-16  cursor-pointer bg-white flex items-center justify-center' style={{
            writingMode: 'vertical-rl'
        }}>
            组件库
            <LibraryBooksIcon className='mt-4' />
        </div>
    </>

}

export default Library
