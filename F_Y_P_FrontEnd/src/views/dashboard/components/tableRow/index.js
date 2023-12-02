import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Edit, Delete } from '@mui/icons-material';
let textStyle = {
    fontSize: "12px",
    fontWeight: "600",
    width: '20%'
}
export default function Default(props) {
    const { name, modified, created, strenth } = props;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                padding: "10px 0px",
                alignItems: "center",

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
                fontSize: "12px",
                fontWeight: "600",
                width: '20%',
                display: 'flex',
                justifyContent: 'left'
            }}>
                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "10px 20px",
                        color: "white",
                        borderRadius: "40px",
                        backgroundColor: "rgb(0, 153, 255)",
                    }}
                >
                    {strenth}
                </Typography>
            </Box>
            <Box sx={{
                width: '20%',
                width: '20%', display: 'flex', justifyContent: 'flex-end'
            }}>
                <Delete sx={{ color: 'red', cursor: 'pointer' }} />
                <Edit sx={{ color: 'blue', cursor: 'pointer' }} />
            </Box>
        </Box>
    )
}
