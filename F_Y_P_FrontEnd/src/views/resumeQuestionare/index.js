import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Add, Remove } from '@mui/icons-material'
import appContext from 'appState/appContext'

import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: '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'
})
const openai = new OpenAIApi(configuration);
// const openai = new OpenAI({ apiKey: 'sk-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', dangerouslyAllowBrowser: true });
export default function Default() {
    const [response, setResponse] = useState('');
    const apiKey = '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';
    const [strengths, setStrengths] = useState([
        'Collaboration',
        'Critical Thinking',
        'Communication',
        'Customer Service',
        'Decision Making',
        'Delegation',
        'Involation',
        'Interpersonal',
        'Leadership',
        'Management',
    ])
    const [experienceYears, setExperienceYears] = useState([
        'Less then one',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10+',
    ])
    const [schoolTypes, setSchoolTypes] = useState([
        'High School',
        'Trade School',
        'College',
        'Graduate School'
    ])
    const [workingStyle, setWorkingStyle] = useState([
        {
            value: 'Artistic',
            description: 'You thrive in dynamic environments driven by innovation and creativity.'
        },
        {
            value: 'Enterprising',
            description: 'You’re accustomed to leading teams with empowering and decisive task delegation. '
        },
        {
            value: 'Organized',
            description: 'You bring structure and focus to streamline tasks.'
        },
        {
            value: 'Practical',
            description: 'You go above and beyond to meet goals and ensure timely task completion.'
        },
        {
            value: 'Service-Oriented',
            description: 'You excel in collaborative situations and enjoy helping others.'
        },
    ])
    const appState = useContext(appContext)
    const { letterQuestionare, setletterQuestionare } = appState
    const handleAddStrengths = (index) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState };
            newState.strengths.push(strengths[index])
            return newState
        })
    }
    const handleRemoveStrengths = (index) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState };
            newState.strengths.splice(index, 1)
            return newState
        })
    }
    const handlejobApplyingFor = (event) => {
        event.preventDefault()
        setletterQuestionare(prevState => {
            let newState = { ...prevState }
            newState.jobApplyingFor[event.target.name] = event.target.value;
            return newState
        })
    }
    const handleAddExperience = (value) => {
        if (letterQuestionare.experience == value) {
            setletterQuestionare(prevState => {
                let newState = { ...prevState }
                newState.experience = '';
                return newState
            })
        } else {
            setletterQuestionare(prevState => {
                let newState = { ...prevState }
                newState.experience = value;
                return newState
            })
        }
    }
    const handleSpecificJob = (value) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState }
            newState.specificJob = value;
            return newState
        })
    }
    const handleInSchool = (value) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState }
            newState.isInSchool = value;
            return newState
        })
    }
    const handleKindOfSchool = (value) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState }
            newState.kindOfSchool = value;
            return newState
        })
    }
    const handleWorkingStyle = (value) => {
        setletterQuestionare(prevState => {
            let newState = { ...prevState }
            newState.workingStyle = value;
            return newState
        })
    }

    const handleLetterGeneration = async () => {
        let text = `Write a cover letter for my job i am applying for by using the following details:
        my strenths are ${letterQuestionare.strengths} and i am applying for ${letterQuestionare.specificJob} and
        my experience is of ${letterQuestionare.experience} years and my recent job title is ${letterQuestionare.recentJobTitle} 
        ${letterQuestionare.isInSchool && 'i am currently in school'} ${letterQuestionare.kindOfSchool && `${letterQuestionare.kindOfSchool} 
        kind of school`}
        and my working style is ${letterQuestionare.workingStyle.value},  ${letterQuestionare.workingStyle.description} and i am apply for 
        ${letterQuestionare.jobApplyingFor.position} position and ${letterQuestionare.jobApplyingFor.company} company and my top skills are 
        ${letterQuestionare.skills}`
        const messages = [{
            role:'user',
            content:`my name is ameen butt and my email is ameen@gmail.com and my phone is 33098429 i am writting this 
            letter to HR. Dont includes addresses neither of mine or recipeint. The company name is ${letterQuestionare.jobApplyingFor.company}.Write a comprehensive cover letter for my job i am applying for by using the following details:
            my strenths are ${letterQuestionare.strengths} and i am applying for ${letterQuestionare.specificJob} and
            my experience is of ${letterQuestionare.experience} years and my recent job title is ${letterQuestionare.recentJobTitle} 
            ${letterQuestionare.isInSchool && 'i am currently in school'} ${letterQuestionare.kindOfSchool && `${letterQuestionare.kindOfSchool} 
            kind of school`}
            and my working style is ${letterQuestionare.workingStyle.value},  ${letterQuestionare.workingStyle.description} and i am apply for 
            ${letterQuestionare.jobApplyingFor.position} position and ${letterQuestionare.jobApplyingFor.company} company and my top skills are 
            ${letterQuestionare.skills}`
        }]
        console.log(messages)
        const completion = await openai.createChatCompletion({ model: "gpt-3.5-turbo",messages });
        // const message = completion.data.choices;
        let newText = completion.data.choices[0].message.content;

        newText = newText.replace(/\n/g, '<br>');
        
        console.log(newText);
        console.log(completion.data.choices[0].message.content);
        setResponse(newText)
    }
    return (
        <Box sx={{ marginTop: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: '50vw' }}>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>Do you have a specific job in mind?</Typography>
                    <Button variant='outlined' sx={{
                        width: '48%',
                        borderRadius: '20px',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        fontWeight: letterQuestionare.specificJob ? '700' : '500',
                        color: letterQuestionare.specificJob ? '#3983fa' : 'black',
                        border: letterQuestionare.specificJob ? '2px solid #3983fa' : '1px solid black'
                    }} onClick={() => {
                        handleSpecificJob(true)
                    }}>Yes</Button>
                    <Button variant='outlined' sx={{
                        width: '48%',
                        borderRadius: '20px',
                        marginLeft: '4%',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        fontWeight: !letterQuestionare.isInSchool ? '700' : '500',
                        color: !letterQuestionare.isInSchool ? '#3983fa' : 'black',
                        border: !letterQuestionare.isInSchool ? '2px solid #3983fa' : '1px solid black'
                    }} onClick={() => {
                        handleSpecificJob(false)
                    }}>No</Button>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>What job are you applying for?</Typography>
                    <Box sx={{
                        marginTop: '50px'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: '600',
                        }}>Desired Position</Typography>
                        <TextField sx={{
                            width: '100%',
                        }} placeholder='Customer Sales Representative'
                            onChange={handlejobApplyingFor}
                            name='position'
                            value={letterQuestionare.jobApplyingFor.position}
                        />
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: '600',
                            marginTop: '40px'
                        }}>Company</Typography>
                        <TextField sx={{
                            width: '100%',
                        }} placeholder='ACME Technologies'
                            onChange={handlejobApplyingFor}
                            name='company'
                            value={letterQuestionare.jobApplyingFor.company}
                        />
                    </Box>
                </Box>
                <Box>
                    {letterQuestionare?.strengths?.map((item, index) => (
                        <Button variant='outlined' sx={{
                            margin: '10px',
                            color: 'black',
                            borderColor: 'black'
                        }} onClick={() => {
                            handleRemoveStrengths(index)
                        }}>
                            <Remove />{item}
                        </Button>
                    ))}
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>Choose your top 3 strengths.</Typography>
                    {strengths.map((item, index) => (
                        <Button variant='outlined' sx={{
                            margin: '10px',
                            color: 'black',
                            borderColor: 'black'
                        }} onClick={() => {
                            handleAddStrengths(index)
                        }} disabled={letterQuestionare?.strengths?.length >= 3}>
                            <Add />{item}
                        </Button>
                    ))}
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>How many years of experience do you have?</Typography>
                    {experienceYears.map((item, index) => (
                        <Button key={index} variant='outlined' sx={{
                            margin: '10px',
                            color: 'black',
                            borderColor: 'black',
                            borderRadius: '10px'
                        }} onClick={() => {
                            handleAddExperience(item)
                        }} disabled={(letterQuestionare?.experience && letterQuestionare?.experience != item)}>
                            {item}
                        </Button>
                    ))}
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>Are you in school?</Typography>
                    <Button variant='outlined' sx={{
                        width: '48%',
                        borderRadius: '20px',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        fontWeight: letterQuestionare.isInSchool ? '700' : '500',
                        color: letterQuestionare.isInSchool ? '#3983fa' : 'black',
                        border: letterQuestionare.isInSchool ? '2px solid #3983fa' : '1px solid black'
                    }} onClick={() => {
                        handleInSchool(true)
                    }}>Yes</Button>
                    <Button variant='outlined' sx={{
                        width: '48%',
                        borderRadius: '20px',
                        marginLeft: '4%',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        fontWeight: !letterQuestionare.isInSchool ? '700' : '500',
                        color: !letterQuestionare.isInSchool ? '#3983fa' : 'black',
                        border: !letterQuestionare.isInSchool ? '2px solid #3983fa' : '1px solid black'
                    }} onClick={() => {
                        handleInSchool(false)
                    }}>No</Button>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>What kind of school is it?</Typography>
                    {schoolTypes.map((item, index) => (
                        <Button key={index} variant='outlined' sx={{
                            width: '48%',
                            borderRadius: '20px',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            margin: '1%',
                            fontWeight: letterQuestionare.kindOfSchool == item ? '700' : '500',
                            color: letterQuestionare.kindOfSchool == item ? '#3983fa' : 'black',
                            border: letterQuestionare.kindOfSchool == item ? '2px solid #3983fa' : '1px solid black'
                        }} onClick={() => {
                            handleKindOfSchool(item)
                        }}>{item}</Button>
                    ))}
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>What’s your working style?</Typography>
                    {workingStyle.map((item, index) => (
                        <Button key={index} variant='outlined' sx={{
                            width: '48%',
                            borderRadius: '20px',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            margin: '1%',
                            fontWeight: letterQuestionare.workingStyle == item.value ? '600' : '500',
                            color: letterQuestionare.workingStyle == item.value ? '#3983fa' : 'black',
                            border: letterQuestionare.workingStyle == item.value ? '2px solid #3983fa' : '1px solid black'
                        }} onClick={() => {
                            handleWorkingStyle(item.value)
                        }}>{item.value}<br />{item.description}</Button>
                    ))}
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '29px',
                        color: '#3983fa',
                        fontWeight: '500',
                        letterSpacing: '0.3rem',
                        marginBottom: '10px'
                    }}>What’s your most recent job title?</Typography>
                    <Box sx={{
                        marginTop: '50px'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: '600',
                        }}>Job Title</Typography>
                        <TextField sx={{
                            width: '100%',
                        }} placeholder='Customer Sales Representative'
                            onChange={(e) => setletterQuestionare(prevState => {
                                let newState = { ...prevState }
                                newState.recentJobTitle = e.target.value;
                                return newState;
                            })}
                            name='recentJobTitle'
                            value={letterQuestionare.recentJobTitle}
                        />
                    </Box>
                </Box>
                <br /><br /><br />
                <center><Button variant='contained' onClick={handleLetterGeneration} sx={{ backgroundColor: '#3983fa' }}>Generate Letter</Button></center>
                <br /><br />
                <div dangerouslySetInnerHTML={{ __html: response }} />
            </Box>
        </Box>
    )
}
