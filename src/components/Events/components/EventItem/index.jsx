import styles from './EventItem.module.css'

const EventItem = ({info, id, name, image, onEventClick}) => {
    const handleSeeMoreClick = (e) => {
        e.stopPropagation()
        onEventClick(id)
    }

    return(
        <div onClick={() => onEventClick(id)} className={styles.eventItemContainer}>
            <img className={styles.eventImage} src={image} alt={name} width={200} height={200}/>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>Ver más</button>
            </div>
        </div>
    )
}

export default EventItem