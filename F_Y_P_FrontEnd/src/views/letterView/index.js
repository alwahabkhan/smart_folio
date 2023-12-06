import { Button, TextareaAutosize } from '@mui/material'
import { Box } from '@mui/system';
import appContext from 'appState/appContext'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import baseUrl from 'url';

export default function Default() {
    const appState = useContext(appContext);
    const { letter, setLetter } = appState;
    const navigator = useNavigate()
    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const saveLetter = async () => {
        if (query.get('_id')) {
            await fetch(`${baseUrl}/cover-letter/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: letter,
                    _id: query.get('_id')
                })
            }).then(res => res.json())
                .then(response => {
                    console.log(response)
                    if(response.status){
                        alert('Updated')
                    }
                    navigator('/')
                })
        }
        else {
            await fetch(`${baseUrl}/cover-letter/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: letter,
                    _id: localStorage.getItem('_id')
                })
            }).then(res => res.json())
                .then(response => {
                    console.log(response)
                    navigator('/')
                })
        }
    }
    return (
        <Box sx={{marginTop:'150px'}}>
            <TextareaAutosize disabled={query.get('view')} style={{ width: '100%' }} value={letter} onChange={(e) => {
                console.log(e.target.value)
                setLetter(e.target.value)
            }}>

            </TextareaAutosize>
            {!query.get('view') && <Button variant='contained' onClick={saveLetter}>Save Letter</Button>}
        </Box>
    )
}
