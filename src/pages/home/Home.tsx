import classes from './Home.module.css';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ImageCardList from '../../components/app/image-card-list/ImageCardList';
import httpClient from '../../http/http-client';
import { Image } from '../../models/Image';
import { Favourite } from '../../models/Favourite';
import { useDispatch, useSelector } from 'react-redux';
import { actions, AppState } from '../../store/store';
import { Vote } from '../../models/Vote';

function Home() {

    const dispatch = useDispatch();
    const allImages = useSelector((state: AppState) => state.allImages);

    useEffect(() => {
        httpClient.get('images?limit=100').then((imageData: any) => {

            let images = imageData as Image[];
            // Since there is no is_favourite flag inside image list. I had to call the favourites seperately. 
            // Note : include_favourite flag did not work. Tried with the post man collection
            httpClient.get('favourites').then((favouriteData: any) => {
                let favouriteList = favouriteData as Favourite[];
                if (favouriteList && favouriteList.length > 0 && imageData) {
                    images.forEach((image: any, index: number) => {
                        let favouriteData = favouriteList.find(x => x.image_id === image.id);
                        if (favouriteData) {
                            images[index] = { ...image, favouriteData };
                        }
                    });
                }

                let stateList = [...images];
                dispatch(actions.setImages(stateList));
            });

            httpClient.get('votes').then((votes: any) => {
                let voteList = votes as Vote[];
                if (voteList && voteList.length > 0 && imageData) {
                    images.forEach((image: any, index: number) => {
                        let imageVotes = voteList.filter(x => x.image_id === image.id);
                        if (imageVotes) {
                            images[index] = { ...image, votes: imageVotes };
                        }
                    });
                }

                let stateList = [...images];
                dispatch(actions.setImages(stateList));
            });


        });
    }, [])

    return <Container className={classes.Home}>
        {
            allImages.length > 0 &&
            <>
                <h3>Cats</h3>
                <ImageCardList />
            </>
        }
    </Container>
}

export default Home;