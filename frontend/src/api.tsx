import * as streamingAvailability from "streaming-availability";

export const searchShows = async (query: string) => {
    try {
        const RAPID_API_KEY = process.env.REACT_APP_STREAMING_AVAILABILITY_API_KEY;
        const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: RAPID_API_KEY
        }));
        const data = await client.showsApi.getShow({
            id: "tt0068646",
        });
        return data;
    } catch (error) {
        console.log("error: ", error);
    }
}
