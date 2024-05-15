import * as streamingAvailability from "streaming-availability";

export const searchShows = async (title: string, country: string) => {
    try {
        const RAPID_API_KEY = process.env.REACT_APP_STREAMING_AVAILABILITY_API_KEY;
        const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: RAPID_API_KEY
        }));
        const data = await client.showsApi.searchShowsByTitle({
            title: title,
            country: country
        })
        return data;
    } catch (error) {
        console.log("error: ", error);
        return "An error has occured. Please try again later."
    }
}
