import React from 'react'
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';


function Header() {
    return (
            <>
                <header className={classes.header}>
                    <h1><i className="fa fa-spinner fa-spin"></i>MyApp</h1>
                    <HeaderButton />
                </header>
                <div className={classes['main-image']}>
                </div>
            </>
    )
}

export default Header
