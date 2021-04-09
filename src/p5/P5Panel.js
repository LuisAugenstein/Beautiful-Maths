import React, { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import sketch from './Sketch'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    grid: {
        height: "100vh"
    }
}))

function P5Panel() {
    const [isLoopOn, setLoopOn] = useState(false)
    const canvas = useRef(null)
    const p5Ref = useRef(null)
    const classes = useStyles()

    useEffect(() => {
        if (!canvas.current) {
            canvas.current = new p5(sketch, p5Ref.current)
        }
        canvas.current._loop = isLoopOn
        if (isLoopOn) {
            canvas.current._draw()
        }
    }, [isLoopOn]);

    return <Grid container justify="center" alignItems="center" className={classes.grid}>

        <Typography color="textPrimary" variant="h4" gutterBottom>
            Perlin Noise - Circle
        </Typography>

        <Grid item xs={12} container justify="center">
            <div ref={p5Ref} />
        </Grid>
        <Button onClick={() => setLoopOn(!isLoopOn)} variant="contained" color="primary">Toggle Loop</Button>
    </Grid>

}

export default P5Panel