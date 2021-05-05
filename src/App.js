import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import P5Panel from './p5/P5Panel'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'


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
          <SwiperSlide><P5Panel /></SwiperSlide>
        </Swiper>

      </Container>
    </main>
  );
}

export default App;
