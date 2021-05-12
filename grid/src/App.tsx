import React from 'react';
import Box from './Components/Box/Box';
import Grid from './Components/Grid/Grid';
import GridRuler from './Components/GridRuler/GridRuler';


function App() {
  return (
    <div style={{ margin: "16px", position: "relative", height: "100vh" }}>

      <GridRuler spacing='sm'></GridRuler>

      <Grid container spacing = "sm" justifyContent="center" alignItems="center" style={{height: '100%'}} >

      <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box1</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box2</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box3</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box4</Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;