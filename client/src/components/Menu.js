import React from 'react';
import Header from './Header';
import { menuItems } from './menu/menuItems';
// import url from '../images/menu-cover.jpeg';


function Menu() {
    return (
        <div>
            <Header/>
            {/* <img src={url} style={styles.coverPhoto} /> */}
            <h1 style={styles.MenuTitleText}>Menu</h1>
            <div style={styles.snacksContainer}>
            <h2>Snacks</h2>
            <div style={styles.menuItemsContainer}>
            {menuItems.snacks.map((items, index) => {
                return (
                    
                    <div key={index} style={{...styles.itemsContainer, alignItems: index <= 3 ? 'flex-start' : 'flex-end' }}>
                    <div style={styles.titleContainer}>
                    <p style={styles.titleText}>{items.title}</p>
                    <p style={styles.itemsText}>{items.price}</p>
                    </div>
                    <p>{items.description}</p>
                    </div>

                )
            })}
            </div>
            </div>
            <div style={styles.coffeeContainer}>
            <h2>Coffee</h2>
            <div style={styles.menuItemsContainer}>
            {menuItems.coffee.map((items, index) => {
                return (
                    
                    <div key={index} style={{...styles.itemsContainer, alignItems: index <= 3 ? 'flex-start' : 'flex-end' }}>
                    <div style={styles.titleContainer}>
                    <p style={styles.titleText}>{items.title}</p>
                    <p style={styles.itemsText}>{items.price}</p>
                    </div>
                    <p>{items.description}</p>
                    </div>

                )
            })}
            </div>
            </div>
            
        </div>
    );
};

export default Menu;


const styles = {
    coverPhoto: {
        height: 500,
        width: '100%'
    },
    MenuTitleText: {
        paddingLeft: '15%',
        paddingBottom: '5%',
    },
    snacksContainer: {
        paddingLeft: '15%',
        paddingRight: '15%',
    },
    coffeeContainer: {
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '5%',
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
    menuItemsContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    itemsContainer: {
        width: '30%',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
}