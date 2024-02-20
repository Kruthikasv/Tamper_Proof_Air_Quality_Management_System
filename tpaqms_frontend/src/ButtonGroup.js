import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import NetworkTimeline from './Timeline';
import BasicTable from './Table';
import SelectTextFields from './Select';



export default function ButtonGroupMainPage() {
  
  const [up,setUp]=React.useState(false);
  const [getData,setGetData]=React.useState(false);
  const [putData,setPutData]=React.useState(false);
  function startNetwork(){
    setUp(true);
  } 
  function getBlock(){
    setGetData(true);
  } 
  function putBlock(){
    setPutData(true);
  } 

  
  const buttons = [
    <Button key="up" onClick={startNetwork}>Network UP</Button>,
    <Button key="get" onClick={getBlock}>GET Block</Button>,
    <Button key="put" onClick={putBlock}>PUT Block</Button>,
  ];
  return (
   <>
      <Box
      sx={{
        display: 'flex',
        background: '#fff',
        margin: '50px',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
      
      {up == true &&  <NetworkTimeline/>}
      {getData == true &&<BasicTable />}
      {putData == true &&<SelectTextFields />}
  </>
  );
}
