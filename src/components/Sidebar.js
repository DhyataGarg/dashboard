import { FaBell, FaHeadphonesAlt, FaChartLine } from 'react-icons/fa'
import styles from './Sidebar.module.css';
import commonStyles from './CommonStyles.module.css'

const Sidebar = () => {
    return (
        <>
            <div className={styles.main}>
                <button className={commonStyles.button} ><FaChartLine /> Dashboard</button>
                <button className={commonStyles.button} ><FaHeadphonesAlt /> Support</button>
                <button className={commonStyles.button} ><FaBell /> Notification</button>
            </div>
        </>
    )
}

export default Sidebar;