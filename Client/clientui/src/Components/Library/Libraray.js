import { Card, Grid } from '@mui/material'
import React from 'react'
import CardCatologe from '../Card/Card'
import style from "./Libraray.module.css"
function Libraray() {

    return (
       <Grid container spacing={4} className={`${style.Main_Container}`} > 
            <CardCatologe />
       </Grid>
    )
}

export default Libraray
