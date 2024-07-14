import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'

const Playlist = () => {
    const [selectedPlaylist, setSelectedPlaylist] = useState('PLzWN9eQngmILWyHXdB5-IZlATVcG_G2wR')
    const [videos, setVideos] = useState([]);

    const playlists = [
        { id: 'PLzWN9eQngmILWyHXdB5-IZlATVcG_G2wR', name: 'Del Monte Kitchenomics' },
        { id: 'PLe2Zq7EovWR2n1gvvaDtEUzp25rinXIyS', name: 'Panlasang Pinoy' },
        { id: 'PLZrolWigUub_JeRELVPAN2jSK7ZNsHQQH', name: 'Knorr Pork Recipes' },
        { id: 'PLZrolWigUub-p-FYRZy9AOTHbM84idMuQ', name: 'Knorr Chicken Recipes' },
        { id: 'PLZrolWigUub81kurOJHeeIswrG7_tNl3v', name: 'Knorr Beef Recipes' },
        { id: 'PLhKJ5Y1qktYRXV_eaDJFESGEVrHAO6vUx', name: 'Kuya Fern\'s Cooking Pork Recipes'},
        { id: 'PLhKJ5Y1qktYTaK_onmfDY10JuoqmAPNGR', name: 'Kuya Fern\'s Cooking Veggies Recipes'},
        { id: 'PLhKJ5Y1qktYRGlNGcsEegKi4yySha9zrW', name: 'Kuya Fern\'s Cooking Seafood Recipes'},
    ]

    const opts = {
        height: '400px',
        width: '370px',
        playerVars: {
            listType: 'playlist',
            list: selectedPlaylist,
            autoplay: 0,
            playsinline: 0,

        },
    };

    const opts_md = {
        height: '500px',
        width: '600px',
        playerVars: {
            listType: 'playlist',
            list: selectedPlaylist,
            autoplay: 0,
            playsinline: 0,

        },
    };


    useEffect(() => {
        fetchVideos();
    }, [selectedPlaylist]);

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    playlistId: selectedPlaylist,
                    key: 'AIzaSyDhk8JrPJQjyAHuIFxXb_CGShZzfK10KjE',
                }
            });

            setVideos(response.data.items);
        } catch (error) {
            console.error('Failed to fetch videos', error);
        }
    };

    return (
        <div className='container pt-40'>
            <div className='pb-3'>
            <Dropdown onSelect={(key) => setSelectedPlaylist(key)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Cooking Playlist
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {playlists.map((playlist, index) => (
                        <Dropdown.Item key={index} eventKey={playlist.id}>
                            {playlist.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className='md:hidden'>
            <YouTube opts={opts} />
            </div>

            <div className='hidden md:flex w-full rounded-sm'>
            <YouTube opts={opts_md} />
            </div>
        </div>
    )
}

export default Playlist;