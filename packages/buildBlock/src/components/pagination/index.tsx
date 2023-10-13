import {FC, PropsWithChildren} from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'

interface PaginationComponentProps {
    total?: number

}

export const PaginationComponent: FC<PropsWithChildren<PaginationComponentProps>> = ({total = 10}) => {
    return <>
        <Pagination count={total} renderItem={(item) => {
            return <PaginationItem
                slots={{previous: ArrowBackIcon, next: ArrowForward}}
                {...item}
            />
        }}/>
    </>
}
