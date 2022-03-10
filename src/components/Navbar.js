import {Row, Col, Image} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import User from '../assets/user.png'
import styles from './Navbar.module.css';
import commonStyles from './CommonStyles.module.css'

const Navbar = () => {
    return (
        <>
            <Row className={styles.navbarRow}>
                <Col className={styles.navbarCol} md={3}>
                    <span className={styles.navbarTitle}>Quiz Time</span>
                </Col>
                <Col className={styles.navbarCol} md={4}>
                    <input placeholder='Search...' className={styles.navbarSearch} />
                    <FaSearch className={styles.searchIcon} />
                </Col>
                <Col className={styles.navbarCol} md={2}>
                    <button className={commonStyles.button}>Start Quiz</button>
                </Col>
                <Col className={styles.navbarCol} md={3}>
                    <Image className={styles.navbarAvtar} src={User} alt='User' />
                    <span className={styles.navbarUserName}>&nbsp; User Name</span>
                </Col>
            </Row>
        </>
    )
}

export default Navbar;