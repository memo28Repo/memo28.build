/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-11-01 20:06:24
 * @LastEditTime: 2023-11-01 20:11:46
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/components/button/button.tsx
 */
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { grey } from '@mui/material/colors';
import { FC, PropsWithChildren } from 'react';

const Btn: FC<PropsWithChildren<{ loading?: boolean } & ButtonProps>> = (props) => {
    return <Box sx={{ m: 1, position: 'relative' }}>
        <Button {...props} disabled={props.disabled || props.loading} >{props.children}</Button>
        {props.loading && (
            <CircularProgress
                size={24}
                sx={{
                    color: grey[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}
            />
        )}
    </Box>
}

export default Btn