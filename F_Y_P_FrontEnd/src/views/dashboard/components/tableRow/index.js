import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Edit, Delete } from '@mui/icons-material';
let textStyle = {
    fontSize: "12px",
    fontWeight: "600",
    width: '25%'
}
export default function Default(props) {
    const { name, modified, created, onEdit, onDelete, onClick } = props;
    return (
        <Box
            onClick={(e) => {
                e.stopPropagation();
                onClick()
            }
            }
            sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                padding: "10px 0px",
                alignItems: "center",
                cursor: 'pointer'
            }}
        >
            <Typography sx={textStyle}>
                {name}
            </Typography>
            <Typography sx={textStyle}>
                {modified}
            </Typography>
            <Typography sx={textStyle}>
                {created}
            </Typography>
            <Box sx={{
                width: '25%',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Delete sx={{ color: 'red', cursor: 'pointer' }} onClick={(e) => {
                e.stopPropagation();
                onDelete()
            }} />
                <Edit sx={{ color: 'blue', cursor: 'pointer' }} onClick={(e) => {
                e.stopPropagation();
                onEdit()
            }} />
            </Box>
        </Box>
    )
}
