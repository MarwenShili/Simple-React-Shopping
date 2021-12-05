import classes from './Footer.module.css'
import React from 'react'
const Footer = () => {
    
    const style={
        fontSize:"2rem" ,
        color:"black",
        margin:"3px"
        }

    return (
            <div className={classes.footer}>
                <footer>
                    <div className={classes.container}>
                        <div className={classes.row}>
                            <div className={classes.social}>
                                <span style={style}>
                                    <i class="fa fa-facebook-square"></i>
                                </span>

                                <span style={style}>
                                    <i class="fa fa-twitter-square"></i>
                                </span>

                                <span style={style}>
                                    <i class="fa fa-linkedin-square"></i>
                                </span>
                            </div>
                        </div>
                        <p className={classes.copyright}>Marwen Shili © 2021</p>
                    </div>
                </footer>
            </div>
    )
}
export default React.memo(Footer)