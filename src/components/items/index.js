import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
const Items = () => {
  return (
    <>
        <div>
        <Box sx={{ width: '100%' ,flexGrow: 1 }}>
      <Grid container rowSpacing={10}>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <p>Rs.300</p>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Add to Cart</button>
        </Grid>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <div>
        <p>Rs.300</p>
        </div>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Add to Cart</button>
        </Grid>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <p>Rs.300</p>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Add to Cart</button>
        </Grid>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <p>Rs.300</p>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Click Me!</button>
        </Grid>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <p>Rs.300</p>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Click Me!</button>
        </Grid>
        <Grid item xs={2}>
        <Image src="/ovan.jpg" width={200} height={200}/>
        <p>Rs.300</p>
        <button type="button" style={{backgroundColor:'red',padding:'2px'}}>Click Me!</button>
        </Grid>
        
      </Grid>
    </Box>

        </div>
    </>
  )
}

export default Items