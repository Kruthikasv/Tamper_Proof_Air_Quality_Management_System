import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import axios from 'axios'

const concentration = [
  {
    value: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
    label: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
  },
  {
    value: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
    label: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
  },
  {
    value: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
    label: '59.79,106.12,18.42,7.45,3.8,0.4,14.2',
  },
];

export default function SelectTextFields() {
  const [PM2_5, setPM25] = useState('');
  const [PM10, setPM10] = useState('')
  const [NO2, setNO2] = useState('')
  const [SO2, setSO2] = useState('')
  const [NH3, setNH3] = useState('')
  const [CO, setCO] = useState('')
  const [Ozone, setOzone] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault()

    // var json = [];
    // var toSplit = conc.split(",");
    //   json.push({"PM2_5": toSplit[0]})
    //   json.push({"PM10": toSplit[1]})
    //   json.push({"NO2": toSplit[2]})
    //   json.push({"SO2": toSplit[3]})
    //   json.push({"NH3":toSplit[4]})
    //   json.push({"CO": toSplit[5]})
    //   json.push({"Ozone": toSplit[6]})
    const params= {PM2_5,PM10,NO2,SO2,NH3,CO,Ozone}
  

    axios
      .post('http://localhost:8080/prediction', params)
      .then((res) => {
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `AQI category: ${data.AQI_category}\nParameters: ${parameters}`
        console.log("response",data,msg);
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }


  const reset = () => {
    setPM25('')
    setPM10('')
    setNO2('')
    setSO2('')
    setNH3('')
    setCO('')
    setOzone('')
    
  }

 
  return (
      <>
    <form onSubmit={(e) => handleSubmit(e)} > 
    {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
      {/* <div>
        <TextField
          id="pollutant-concentrations"
          select
          label="Select"
          value={conc}
          onChange={(e) => setConc(e.target.value)}
          helperText="Please add pollutant concentration"
        >
          {concentration.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> */}
       <input
            id="PM2_5"
            
            placeholder="PM2.5 conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={PM2_5}
          onChange={(e) => setPM25(e.target.value)}
          />
          <input
            id="PM10"
            
            placeholder="PM10 conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={PM10}
          onChange={(e) => setPM10(e.target.value)}
          />
          <input
            id="NO2"
            
            placeholder="NO2 conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={NO2}
          onChange={(e) => setNO2(e.target.value)}
          />
          <input
            id="SO2"
            
            placeholder="SO2 conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={SO2}
          onChange={(e) => setSO2(e.target.value)}
          />
          <input
            id="NH3"
            
            placeholder="NH3 conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={NH3}
          onChange={(e) => setNH3(e.target.value)}
          />
          <input
            id="CO"
            
            placeholder="CO conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={CO}
          onChange={(e) => setCO(e.target.value)}
          />
          <input
            id="Ozone"
            
            placeholder="Ozone conc"
            required
            autoFocus
            // min="0"
            // max="1"
            // pattern="[0-9]{0,1}"
            // title="Gender must either be (1 = Male or 0 = Female)"
            type="number"
            value={Ozone}
          onChange={(e) => setOzone(e.target.value)}
          />

      <button type="submit">Submit</button>
    {/* </Box> */}
    
    </form>
    </>
    
  );
}
