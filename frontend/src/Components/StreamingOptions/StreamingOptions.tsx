import React from 'react'
import { Show, StreamingOption } from 'streaming-availability'

interface Props {
    show: Show;
    country: string;
}

const StreamingOptions = ({show, country}: Props) => {
    const renderStreamingOptions = (streaming: StreamingOption) => {
        const style = "ml-5 mr-5 text-xl";
        if (streaming.type === "addon") {
          return <p className={style}>Available through addon: {streaming.addon?.name}</p>
        }
        else if (streaming.type === "rent") {
          return <p className={style}>Available for rent in {streaming.quality} for {streaming.price?.amount} {streaming.price?.currency}</p>
        }
        else if (streaming.type === "buy"){
          return <p className={style}>Available to buy in {streaming.quality} for {streaming.price?.amount} {streaming.price?.currency}</p>
        }
        else if (streaming.type === "subscription") {
          return <p className={style}>Available with active subscription</p>
        }
        else { //streaming.type === "free"
          return <p>Available for free</p>
        }
      }

  return (
    <div className='w-fit h-fit text-center flex flex-col m-10'>
        <p className='text-3xl'>Currently streaming on:</p>               
            {
            (show !== undefined && show.streamingOptions[country!] !== undefined) ? show.streamingOptions[country!].map((streaming) => {
                return (
                    <div className='flex flex-row items-center text-lg'>
                        <a href={streaming.link} target='_blank' rel='noreferrer'>
                          <img src={streaming.service.imageSet.darkThemeImage} alt={streaming.service.name}/>
                        </a> 
                        {
                        renderStreamingOptions(streaming)
                        } 
                    </div>
                    )
                }) : <p>No streaming information currently available</p>
            }
    </div>
  )
}

export default StreamingOptions