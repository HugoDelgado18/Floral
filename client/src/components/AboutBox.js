import React from 'react';


function AboutBox() {
    return (
        <div style={styles.aboutContainer}>
            <ul style={styles.listHolder}>
                <li style={styles.containerText}>COFFEE MADE IN HOUSE WITH LOVE,</li>
                <li style={styles.containerText}>PASSION, AND METICUOUL ATTENTION</li>
                <li style={styles.containerText}>TO DETAIL.</li>
            </ul>
        </div>
    );
};


export default AboutBox;


const styles = {
    aboutContainer: {
        backgroundColor: '#191E20',
    },
    listHolder: {
        listStyle: 'none',
        margin: 0,
        paddingTop: "8%",
        paddingBottom: "8%",
        paddingLeft: "12.5%",
    },
    containerText: {
        margin: 0,
        paddingBottom: 10,
        color: 'white', 
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "Bold",
        fontWieght: 700,
        fontSize: 40,
        letterSpacing: 2, 
    },
    

}