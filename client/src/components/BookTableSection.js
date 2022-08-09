



function BookTableSection() {
    return (

        <div style={styles.aboutContainer}>
            <div style={styles.listHolder}>
                <h1 style={styles.titleText}>BOOK A TABLE</h1>
                <p style={{ color: 'white' }}>Breakfast, lunch, or weekend brunch,</p>
                <p style={{color: 'white'}}>we’re always open for reservations.</p>
                <a href="/Book"><button style={styles.btn}> Book Table </button></a>
            </div>
        </div>

    );
};

export default BookTableSection;

const styles = {
    aboutContainer: {
        backgroundColor: '#191E20',
    },
    titleText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 40,
        fontFamily: "'Poppins', sans-serif",
        marginBottom: '3%',
    },
    listHolder: {
        margin: 0,
        paddingTop: "8%",
        paddingBottom: "8%",
        paddingLeft: "15%",
    },
    btn: {
        color: '#191E20',
        fontSize: 16,
        paddingBottom: "1%",
        paddingTop: '1%',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginTop: '3%',
    },
}