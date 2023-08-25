import React,{Fragment} from "react";
import classes from'./About.module.css';
import { Link } from "react-router-dom";

const About = ()=>{
    return (
        
        <Fragment><br></br>
        <div className={classes['section-h1']} style={{marginTop:'26px'}}>The Generics</div>

       <section  className={classes.section}>     

         <h2 className={classes['section-h2']}>ABOUT</h2>
         <div className={classes['section-div']}>
          <img className={classes['section-img']} src="https://github.com/Pratikesh-kumar/E-commerce/blob/master/src/Assets/BandMembers.png?raw=true"/>
          
           <p className={classes['section-div-p']}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
             pretium vulputate sapien nec sagittis. Vulputate dignissim suspendisse
             in est ante in nibh. Enim diam vulputate ut pharetra sit amet.
             Tincidunt dui ut ornare lectus sit amet est placerat in. Placerat orci
             nulla pellentesque dignissim. Semper auctor neque vitae tempus. Ac
             auctor augue mauris augue neque. Purus in massa tempor nec feugiat
             nisl pretium. Porta nibh venenatis cras sed felis eget velit. Lorem
             donec massa sapien faucibus. Sit amet cursus sit amet dictum. Eu non
             diam phasellus vestibulum lorem sed risus ultricies tristique. Elit
             sed vulputate mi sit. Non curabitur gravida arcu ac tortor dignissim.
             Neque ornare aenean euismod elementum nisi quis eleifend. Ac tortor
             dignissim convallis aenean. Id cursus metus aliquam eleifend mi in
             nulla. Sed pulvinar proin gravida hendrerit. Amet mauris commodo quis
             imperdiet massa tincidunt nunc pulvinar. Leo urna molestie at
             elementum eu facilisis sed odio morbi. Cursus sit amet dictum sit amet
             justo donec enim. Molestie nunc non blandit massa enim nec dui nunc.
             Elementum eu facilisis sed odio morbi quis commodo odio. Viverra
             tellus in hac habitasse. Fermentum posuere urna nec tincidunt praesent
             semper feugiat. Est placerat in egestas erat imperdiet.Semper auctor
             neque vitae tempus. Ac auctor augue mauris augue neque. Purus in massa
             tempor nec feugiat nisl pretium. Porta nibh venenatis cras sed felis
             eget velit. Lorem donec massa sapien faucibus. Sit amet cursus sit
             amet dictum. Eu non diam phasellus vestibulum lorem sed risus
             ultricies tristique. Elit sed vulputate mi sit. Non curabitur gravida
             arcu ac tortor dignissim. Neque ornare aenean euismod elementum nisi
             quis eleifend. Ac tortor dignissim convallis aenean. Id cursus metus
             aliquam eleifend mi in nulla. Sed pulvinar proin gravida hendrerit.
             Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Id
             cursus metus aliquam eleifend mi in nulla.
           </p>
         </div>
         <Link to={'/back'}>Back</Link>
       </section>
       </Fragment>
    )
}
export default About;