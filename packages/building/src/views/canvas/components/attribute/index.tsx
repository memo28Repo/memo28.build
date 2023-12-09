/*
 * @Author: @memo28.repo
 * @Date: 2023-11-19 10:14:26
 * @LastEditTime: 2023-11-19 15:53:46
 * @Description: 属性区组件
 * @FilePath: /buildingRepo/packages/building/src/views/canvas/components/attribute/index.tsx
 */
import Drawer from '@mui/material/Drawer';
import { useAttrbute } from '~/hooks/useAttrbute';




const Attribute = () => {

    const { attrbuteStore, close } = useAttrbute()

    return <>
        <Drawer
            anchor={'right'}
            open={attrbuteStore.open}
            variant="persistent"
            hideBackdrop={true}
            onClose={() => {
                close()
            }}
        >
            <div className='w-96 pr-1.5 pl-1.5'>
                <div className='mt-2 font-semibold text-xl'>title</div>
            </div>
        </Drawer>
    </>
}

export default Attribute