import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {format} from "date-fns";
import {es} from "date-fns/locale";

import styles from './Detail.module.css'

console.log(import.meta.env)

const Detail = () => {
    const {eventId} = useParams();
    const [eventData, setEventData] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
                const data = await response.json()
                setEventData(data)
                setIsLoading(false)
                console.log(data)
            } catch (error){
                setEventData({})
                setError(error)
                setIsLoading(false)
            }
        }
        fetchEventData()
    }, []);

    if(isLoading && Object.keys(eventData) === 0) {
        return <div>Cargando Evento...</div>
    }

    if(Object.keys(error)>0) {
        return <div>Ha ocurrido un error...</div>
    }

    console.log(eventData)
    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img className={styles.eventImage} src={eventData.images?.[0].url} alt={eventData.name}/>
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.eventInfoParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ?
                    <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm ', {locale: es})}hrs</p> : null}
            </div>

            <div className={styles.seatInfoContainer}>
                <h5 className={styles.seatMapTitle}>Mapa del Evento</h5>
                <img src={eventData.seatmap?.staticUrl} alt='SeatMap Event'/>
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Rango de
                    precios: {eventData.priceRanges?.[0].min} - {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url}>
                Ir por tus boletos
            </a>
        </div>

    )
}

export default Detail