/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:45:53
 * @LastEditTime: 2023-10-03 09:43:23
 * @Description: 
 * @FilePath: /buildingBlocks/src/hooks/usePage.ts
 */
export function usePageBgColor() {
    function setBgColor(color: string) {
        document.body.style.background = color
    }

    setBgColor('rgba(249, 250, 251,1)')
    // setBgColor('rgba(0,0,0,0.1)')

    return {setBgColor}

}
