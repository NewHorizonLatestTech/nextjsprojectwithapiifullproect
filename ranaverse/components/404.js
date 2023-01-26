import React from 'react'
import styles from '../styles/Home.module.css'



function Fourzerofourpage() {
  return (
    <>
         <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
             </div>
             <h2>We Are Sorry, Page Not Found</h2>
             <p>The Page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <button className={styles.backbutton}>
            <a href="/">Back To HomePage</a>
            </button>
        </div>
    </div>
    </>
  )
}

export default Fourzerofourpage;