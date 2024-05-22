import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Show } from 'streaming-availability';
import { getShow } from '../../api';

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
    <div>
        <p>{show?.title}</p>
        <img src={show?.imageSet.verticalPoster.w240} alt={show?.title} />
    </div>
  )
}

export default ShowPage