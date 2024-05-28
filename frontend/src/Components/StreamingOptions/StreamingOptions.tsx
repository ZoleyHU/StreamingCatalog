import React from 'react'
import { Show, StreamingOption } from 'streaming-availability'

interface Props {
    show: Show;
    country: string;
}

const StreamingOptions = ({show, country}: Props) => {
    const renderStreamingOptions = (streaming: StreamingOption) => {
        if (streaming.type === "addon") {
          return <p>Available through addon: {streaming.addon?.name}</p>
        }
        else if (streaming.type === "rent") {
          return <p>Available for rent in {streaming.quality} for {streaming.price?.amount} {streaming.price?.currency}</p>
        }
        else if (streaming.type === "buy"){
          return <p>Available to buy in {streaming.quality} for {streaming.price?.amount} {streaming.price?.currency}</p>
        }
        else if (streaming.type === "subscription") {
          return <p>Available with active subscription</p>
        }
        else { //streaming.type === "free"
          return <p>Available for free</p>
        }
      }

  return (
    <div className='w-2/5 bg-white text-center'>
        <p className='text-3xl'>Currently streaming on:</p>               
        <ul>
            {
            (show !== undefined && show.streamingOptions[country!] !== undefined) ? show.streamingOptions[country!].map((streaming) => {
                return (
                    <li>
                    <div>
                        <img src={streaming.service.imageSet.lightThemeImage} alt={streaming.service.name} />
                        {
                        renderStreamingOptions(streaming)
                        } 
                    </div>
                    
                    </li>)
                }) : <p>No streaming information currently available</p>
            }
        </ul>
    </div>
  )
}

export default StreamingOptions