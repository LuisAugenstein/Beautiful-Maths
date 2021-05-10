import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import PerlinNoiseCircle from './p5/PerlinNoiseCircle'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import FractalTrees from './p5/FractalTrees';


const useStyles = makeStyles(theme => ({
  main: {
    //width: "100vw",
    //height: "100vh",
    backgroundColor: theme.palette.background.default
  },
}))

SwiperCore.use([Navigation, Pagination]);

function App() {
  const classes = useStyles()
  return (
    <main className={classes.main}>
      <Container>
        <Swiper
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide><PerlinNoiseCircle /></SwiperSlide>
          <SwiperSlide><FractalTrees /></SwiperSlide>
        </Swiper>

      </Container>
    </main>
  );
}

export default App;
