/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-11-12 15:04:10
 * @LastEditTime: 2023-11-12 15:23:16
 * @Description: 定于用户菜单功能
 * @FilePath: /buildingRepo/packages/building/src/entity/function/userMenu.tsx
 */
import { userLicense } from '@memo28.build/constants';
import { functionalGroups } from '@memo28.build/types';
import { SNI } from '@memo28/utils';
import LayersIcon from '@mui/icons-material/Layers';


export const teamsFunctionalGroups: functionalGroups[] = [
    {
        text: '界面结构',
        icon: <LayersIcon />,
        shortDescription: <>构建基础框架</>
    }
]

export const enterpriseFunctionalGroups: functionalGroups[] = [
    {
        text: '界面结构',
        icon: <LayersIcon />,
        shortDescription: <>构建基础框架</>
    }
]

export const proFunctionalGroups: functionalGroups[] = [
    {
        text: '界面结构',
        icon: <LayersIcon />,
        shortDescription: <>构建基础框架</>
    }
]



/**
 * 
 * 根据用户类型返回对应菜单
 * 
 * @public
 */
export class GetFunctionalGroups {
    constructor(private userPlan: number) {
    }

    getMenu(): functionalGroups[] {
        if (SNI(userLicense.enterprise, this.userPlan)) return enterpriseFunctionalGroups
        if (SNI(userLicense.pro, this.userPlan)) return proFunctionalGroups
        return teamsFunctionalGroups
    }
}