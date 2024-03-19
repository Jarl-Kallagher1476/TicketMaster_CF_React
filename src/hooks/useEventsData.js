
import useEventsResult from "../state/events-result.js";

const useEventsData = () => {
    const {data, isLoading, error, fetchEvents} = useEventsResult()
    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents,
    }
}

export default useEventsData