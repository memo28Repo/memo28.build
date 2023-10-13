/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 20:25:00
 * @LastEditTime: 2023-09-27 20:38:01
 * @Description:
 * @FilePath: /buildingBlocks/src/dragComponents/button/index.tsx
 */
import {readingWritingSeparationUtilsType} from '@memo28/utils';
import {FC, PropsWithChildren} from 'react';
import {ComponentAgreement} from '~/entity/module/components/agreement';
import Button from '@mui/material/Button'

export const DragButton: FC<PropsWithChildren<{ name?: string }>> = () => {
    function addModule() {
        const componentAgreement = new ComponentAgreement() as readingWritingSeparationUtilsType<ComponentAgreement>
        componentAgreement.setType('button')
        console.log(componentAgreement.getType())
    }

    return <>
        <div onClick={addModule}>
            <Button>
                button
            </Button>
        </div>
    </>
}



