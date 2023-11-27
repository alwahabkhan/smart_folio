import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TableRow from "./components/tableRow";
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
  return (
    <Container sx={{ marginTop: "40px" }}>
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
        >
          Create New Cover Letter
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            padding: "50px 0px 20px 0px",
            overflowX:'auto'
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            NAME
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            MODIFICATION
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            CREATION
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            STRENTH
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
            ACTIONS
          </Typography>
        </Box>
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
    </Container>
  );
};

export default Dashboard;
