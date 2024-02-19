import { useState } from "react";
import Form from "./Form";
import Pres from "./Pres";
import {
  Button,
  Typography,
  Grid,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";

export default function About() {
  const [open, setOpen] = useState(false);
  const [prescription, setprescription] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <Button href="/">
            <Typography variant="h6">Ayurmedic</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <div className="container mx-auto px-4 py-8">
        {!prescription && (
          <>
            <div className="text-center mb-8">
              <Typography variant="h3">AYURMEDIC</Typography>
              <Typography variant="subtitle2">
                Unpacking Ayurveda is a New Luxury.
              </Typography>
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Started
              </Button>
            </div>
            <Form
              open={open}
              setOpen={setOpen}
              data={data}
              setData={setData}
              setprescription={setprescription}
            />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper className="p-4 text-center">
                  <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                    fullWidth
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Diagnose yourself
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="p-4 text-center">
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Consult a specialist
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className="p-4 text-center">
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View past prescriptions
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
        {prescription && <Pres data={data} />}
      </div>
    </div>
  );
}
