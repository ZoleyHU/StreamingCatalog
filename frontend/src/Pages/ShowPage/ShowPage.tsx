import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Show } from 'streaming-availability';
import { getShow } from '../../api';
import StreamingOptions from '../../Components/StreamingOptions/StreamingOptions';
import Header from '../../Components/Header/Header';

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

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-600 to-slate-700'>
      <Header />
      <div className='w-4/5 h-full m-auto bg-slate-600 flex flex-col items-center text-3xl font-bold'>
          <p>{show?.title + " (" + (show?.releaseYear===undefined ? (show?.firstAirYear +"-"+ show?.lastAirYear) : show.releaseYear ) + ")"}</p>
          <div className='flex flex-row font-normal m-6'>
            <img src={show?.imageSet.verticalPoster.w240} alt={show?.title} />
            <StreamingOptions show={show!} country={country!}/>
        </div>
      </div>
        
    </div>
  )
}

export default ShowPage