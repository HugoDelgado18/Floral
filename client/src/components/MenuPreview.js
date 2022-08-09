import React from 'react';
import { menuItems } from './menu/menuItems';





function MenuPreview() {

    return (
        <div style={styles.container}>
            <div>
                <h1 style={styles.title}>Explore the garden.</h1>
            </div>
            <div style={styles.menuItemsContainer}>
            {menuItems.snacks.map((items, index) => {
                return (
                    
                    <div key={index} style={{...styles.itemsContainer }}>
                    <div style={styles.titleContainer}>
                    <p style={styles.titleText}>{items.title}</p>
                    <p style={styles.itemsText}>{items.price}</p>
                    </div>
                    <p>{items.description}</p>
                    </div>

                )
            })}
            </div>

            <a href='/Menu'><button style={styles.menuBtn}>See Menu</button></a>


        </div>
    );
};

export default MenuPreview;


const styles = {
    container: {
        width: '75%',
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '10%',
        // paddingLeft: '10px'
    },
    titleContainer: {
        display: 'flex',

    },
    titleText: {
        alignItems: 'flex-start',
        marginRight: "50%",
    },
    priceText: {
        alignItems: 'flex-end',
        marginLeft: '50%',
    },
    title: {
        paddingLeft: '5%',
    },
    menuItemsContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '5%',
    },
    itemsContainer: {
        width: '40%',
        paddingTop: '10%',
        paddingLeft: '5%',
        paddingBottom: '5%',
    },
    menuBtn: {
        fontFamily: 'sans serif',
        color: 'white',
        backgroundColor: '#191E20',
        border: "none",
        paddingTop: '1.5%',
        paddingBottom: '1.5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: '2%',
        marginLeft: '6%',
    }
}