import styles from './EventItem.module.css'

import useLikeEvents from "../../../../hooks/useLikeEvents.js";
import HeartFilled from '../../../../assets/hearth-filled.png'
import HeartUnFilled from '../../../../assets/hearth-unfilled.png'

const EventItem = ({info, id, name, image, onEventClick}) => {
    const {isEventLiked, toggleEventLike} = useLikeEvents(id)

    const handleSeeMoreClick = (e) => {
        e.stopPropagation()
        onEventClick(id)
    }

    const handleHearthClick = () => {
        toggleEventLike()
    }

    return(
        <div onClick={() => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HeartFilled : HeartUnFilled} alt='Heart Button' className={styles.hearthImage} onClick={handleHearthClick}/>
                <img className={styles.eventImage} src={image} alt={name} width={200} height={200}/>
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>Ver más</button>
            </div>
        </div>
    )
}

export default EventItem