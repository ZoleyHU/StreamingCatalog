import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Show } from 'streaming-availability';
import { getShow } from '../../api';
import StreamingOptions from '../../Components/StreamingOptions/StreamingOptions';

interface Props {}

const ShowPage = (props: Props) => {
    let {country, showId} = useParams();
    const [show, setShow] = useState<Show>();

    useEffect(() => {
        const initShowData = async () => {
            const result = await getShow(showId!, country!);
            setShow(result);
        }
        initShowData();
    }, [showId, country]);

//TODO: add back button
  return (
    <div className='w-full h-full '>
      <div className='w-3/4 self-center float-left bg-gray-500'>
        <p>{show?.title}</p>
        <img src={show?.imageSet.verticalPoster.w240} alt={show?.title} />
        <StreamingOptions show={show!} country={country!}/>
      </div>
        
    </div>
  )
}

export default ShowPage