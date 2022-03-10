import styles from './Ticket.module.css'

const Ticket = ({image, title}) => {
    return (
        <div className={styles.ticket} style={{backgroundImage: `url(${image})`}}>
            <h4 className={styles.ticketName}>{title}</h4>
        </div>
    )
}

export default Ticket;