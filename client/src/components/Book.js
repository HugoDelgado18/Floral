import Header from "./Header";
import Footer from './Footer';

function Book() {
    return (
        <>
        <Header/>
        <div style={styles.container}>
            <h1 style={styles.titleText}>BOOK A TABLE</h1>
            <p>Regardless of the occasion the auroma of coffee is always special at:</p>
            <p>FLORAL.</p>
            <div style={styles.formContainer}>
            {/* <form style={styles.formStyles}> */}
                <label style={styles.label}>First Name*</label>
                <input style={styles.input} placeholder='First Name' />
                <label style={styles.label}>Last Name</label>
                <input style={styles.input} placeholder='Last Name' />
                <label style={styles.label}>Email*</label>
                <input style={styles.input} placeholder='Email' />
                <label style={styles.label}>Message</label>
                <textarea style={styles.input} placeholder='Enter your message here' />
                <a href="/Book"><button style={styles.btn}>Submit</button></a>
            {/* </form> */}
            </div>
        </div>
        {/* <Footer/> */}

        </>
    );
};

export default Book;

const styles = {
    titleText: {
        marginTop: 0,
        fontFamily: "'Poppins', sans-serif",
        fontSize: 38
        },

    container: {
        width: '100%',
        height: '100%',
        paddingTop: '10%',
        paddingLeft: '15%',
        paddingBottom: '15%',
        backgroundColor: '#EEE8E3',
    },
    formContainer: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
    },
    formStyles: {

    },
    label: {
        paddingLeft: '1%',
        paddingTop: '3%',
        paddingBottom: '1%',
    },
    input: {
        backgroundColor: '#F0F1F0',
        border: 'none',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '2%',
        color: 'grey',
    },
    btn: {
        width: '30%',
        marginTop: '5%',
        paddingTop: '2%',
        paddingBottom: '2%',
        border: 'none',
        backgroundColor: "#191E20",
        color: 'white',
        fontFamily: 'sans serif',
    }
}