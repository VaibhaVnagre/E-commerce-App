import { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
import classes from './Home.module.css'
import { Link } from "react-router-dom";


const Home2 = () => {
  return (
    <Fragment>
      <div className={classes.Div}>
        <Row>
          <Col className="text-center" style={{ textAlign: "center" }}>

           <h1 className={classes.h1}>The Generics</h1>
            <button className={classes.btn}>
              Get our Latest Album
            </button>{" "}
            <br />
            <img className={classes.img} src="https://cdn-icons-png.flaticon.com/512/2285/2285073.png"/>
          </Col>
        </Row>
      </div>
      <h2 className={classes.h2}> Tours </h2>

      <div className={classes.div}>
        <div className={classes['tour-item']}>
          <span className={classes['tour-dates']}>Aug 25</span>
          <span className={classes['tour-dates']}>DETROIT, MI</span>
          <span className={classes.spec}>DTE ENERGY MUSIC THEATRE</span>

          <button className={classes.button}>BUY TICKETS </button>
        </div>
        <div className={classes['tour-item']}>
          <span className={classes['tour-dates']}>Sep 20</span>
          <span className={classes['tour-dates']}>DETROIT, MI</span>
          <span className={classes.spec}>DTE ENERGY MUSIC THEATRE</span>

          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']}>
          <span className={classes['tour-dates']}>Oct 18</span>
          <span className={classes['tour-dates']}>DETROIT, MI</span>
          <span className={classes.spec}>DTE ENERGY MUSIC THEATRE</span>

          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']}>
          <span className={classes['tour-dates']}>Nov 10</span>
          <span className={classes['tour-dates']}>DETROIT, MI</span>
          <span className={classes.spec}>DTE ENERGY MUSIC THEATRE</span>

          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']}>
          <span className={classes['tour-dates']}>Dec 31</span>
          <span className={classes['tour-dates']}>TORONTO,ON</span>
          <span className={classes.spec}>BUDWEISER STAGE</span>

          <button className={classes.button}>BUY TICKETS</button>
        </div>
      </div>
      <Link to={'..'}>Back</Link>
    </Fragment>
  );
};
export default Home2;
