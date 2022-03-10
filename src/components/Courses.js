import Ticket from './Ticket';
import styles from './Courses.module.css';
import technology from '../assets/technology.jpeg';
import history from '../assets/history.jpg';
import agriculture from '../assets/agriculture.jpeg';
import medical from '../assets/medical.jpg';


const DUMMYDATA = [
    {image: technology, title: 'Technology'},
    {image: history, title: 'History'},
    {image: agriculture, title: 'Agriculture'},
    {image: medical, title: 'Medical'},
    {image: technology, title: 'Technology'},
    {image: history, title: 'History'},
    {image: agriculture, title: 'Agriculture'},
    {image: medical, title: 'Medical'},
    {image: technology, title: 'Technology'},
    {image: history, title: 'History'},
    {image: agriculture, title: 'Agriculture'},
    {image: medical, title: 'Medical'}    
]

const Courses = () => {
    return (
        <>
            <span className={styles.heading}>Select Topic</span><br/>
            <span className={styles.subHeading}>Featured Category</span>
            <div className={styles.ticketDiv}>
                {DUMMYDATA.map(item => <Ticket image = {item.image} title={item.title}></Ticket>)}
            </div>
        </>
    )
}

export default Courses;