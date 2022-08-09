


function Footer() {
    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
            <h3 style={styles.footerTitle}>FLORAL</h3>
            <div style={styles.footerContainer}>
                <div style={styles.leftContainer}>
                    <div style={styles.space}>
                    <p>1445 Floral Ave. New York City,</p>
                    <p>United States</p>
                    </div>
                    <div style={styles.space}>
                    <p>Monday - Friday</p>
                    <p>6:00 AM to 9:00 PM</p>
                    </div>
                    <div style={styles.space}>
                    <p>Saturday - Sunday</p>
                    <p>10:00 AM to 8:00 PM</p>
                    </div>
                </div>
                <div>
                    <p>Contact: 1(800) - 888- 888 </p>
                    <h4>©️ Hugo Delgado </h4>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Footer;

const styles = {
    footerTitle: {
        marginTop: 0,
        fontFamily: "'Poppins', sans-serif",
        fontSize: 24,
    },
    container: {
        backgroundColor: '#EFE8E3',
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    textContainer: {
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '15%',
    },
    leftContainer: {
        paddingRight: '20%',
    },
    space: {
        paddingBottom: '2%',
    }
}