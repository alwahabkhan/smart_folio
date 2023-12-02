import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TableRow from "./components/tableRow";
import { useNavigate } from "react-router-dom";
let tableItemStyle = {
  fontSize: "12px", fontWeight: "600", width: '20%'
}
const Dashboard = () => {
  const [coverLetters, setCoverLetters] = useState([
    {
      name: "Wahab",
      modified: "23/11/2023",
      created: "18/11/2023",
      strenth: "17",
    },
    {
      name: "Ameen",
      modified: "22/11/2023",
      created: "17/11/2023",
      strenth: "11",
    },
    {
      name: "Suleman",
      modified: "21/11/2023",
      created: "16/11/2023",
      strenth: "19",
    },
    {
      name: "Hazik",
      modified: "20/11/2023",
      created: "15/11/2023",
      strenth: "21",
    },
  ]);
  const navigator= useNavigate()
  return (
    <Container sx={{ marginTop: "140px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">My Recent Cover Letters</Typography>
        <Button
          variant="outlined"
          sx={{
            color: "rgb(55 65 81)",
            borderColor: "rgb(55 65 81)",
          }}
          onClick={()=>{
            navigator('/cover-letter')
          }}
        >
          Create New Cover Letter
        </Button>
      </Box>
      <Box sx={{ overflowX: 'auto' }}>
        <Box sx={{ minWidth: '1080px' }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              padding: "50px 0px 20px 0px",
            }}
          >
            <Typography sx={tableItemStyle}>
              NAME
            </Typography>
            <Typography sx={tableItemStyle}>
              MODIFICATION
            </Typography>
            <Typography sx={tableItemStyle}>
              CREATION
            </Typography>
            <Typography sx={tableItemStyle}>
              STRENTH
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "600", width: '20%', display: 'flex', justifyContent: 'flex-end' }}>
              ACTIONS
            </Typography>
          </Box>
        </Box>
        <Box sx={{ minWidth: '1080px' }}>
          {coverLetters.map((item, index) => (
            <TableRow
              key={index}
              name={item.name}
              modified={item.modified}
              created={item.created}
              strenth={item.strenth}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
