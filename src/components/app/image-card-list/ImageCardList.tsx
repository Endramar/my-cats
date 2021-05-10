import { Image } from '../../../models/Image';
import ImageCard from '../../ui/image-card/ImageCard';
import { Row, Col } from 'react-bootstrap';
import classes from './ImageCardList.module.css';
import httpClient from '../../../http/http-client';
import { Favourite } from '../../../models/Favourite';
import { actions, AppState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Vote } from '../../../models/Vote';


function ImageCardList() {

    const dispatch = useDispatch();
    const imageList = useSelector((state: AppState) => state.allImages);

    const setFavouriteHandler = (isFavourite: boolean, image: Image) => {
        if (isFavourite) {
            let request = {
                image_id: image.id
            };

            httpClient.postJson("favourites", request).then((data: any) => {
                let currentImages = [...imageList];
                let index = currentImages.findIndex(x => x.id === image.id);
                let favouriteData: Favourite = { id: data.id, image_id: image.id };
                if (index >= 0) {
                    currentImages[index] = { ...currentImages[index], favouriteData };
                    dispatch(actions.setImages(currentImages));
                }
            });

        } else {
            httpClient.delete("favourites", image.favouriteData.id).then(() => {
                let currentImages = [...imageList];
                let index = currentImages.findIndex(x => x.id === image.id);
                if (index >= 0) {
                    currentImages[index] = { ...currentImages[index], favouriteData: null as any };
                    dispatch(actions.setImages(currentImages));
                }
            });
        }

    }

    const setVoteHandler = (value: number, image: Image) => {
        let request = {
            image_id: image.id,
            value: value
        };

        httpClient.postJson("votes", request).then((data: any) => {
            let currentImages = [...imageList];
            let index = currentImages.findIndex(x => x.id === image.id);
            let votes: Vote[] = [...image.votes] || [];
            votes.push({ id: data.id, value: value, image_id: image.id });
            if (index >= 0) {
                currentImages[index] = { ...image, votes };
                let copy = [...currentImages];
                dispatch(actions.setImages(copy));
            }
        });
    }

    const renderImages = () => {
        console.log("All images", imageList);
        if (imageList && imageList.length > 0) {
            let columns = [];
            for (let image of imageList) {
                columns.push(<Col key={image.id} className={'col-md-4 col-sm-6 col-xs-12 ' + classes.Col}>
                    <ImageCard setVote={(voteValue: number, image: Image) => setVoteHandler(voteValue, image)} setFavourite={(isFavourite: boolean, image: Image) => setFavouriteHandler(isFavourite, image)} image={image} />
                </Col>)
            }
            return <Row>
                {columns}
            </Row>
        } else {
            return <div>
                Please visit "Catload" page and upload some cute cats to display here :)
           </div>
        }
    }

    return renderImages();
}

export default ImageCardList;