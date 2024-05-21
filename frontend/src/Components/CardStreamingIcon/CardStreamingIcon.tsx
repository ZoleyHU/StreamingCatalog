import React from 'react'
import { Show } from 'streaming-availability'

interface Props {
    show: Show;
    country: string;
}

const IconList = ({show, country}: Props) => {
  return (
    <div>
        {                
            (Array.isArray(show.streamingOptions[country]) && show.streamingOptions[country].length > 0) ? 
            (
                <div>
                    <img src={show.streamingOptions[country][0].service.imageSet.lightThemeImage} alt={show.streamingOptions[country][0].service.name} /> 
                    <p>Click for more info!</p>
                </div>
            ) :
            <p>Not available on any of the supported streaming platforms in your region</p>
        }          
    </div>
  )
}

export default IconList