import { Card } from "react-bootstrap";
import FavouriteButton from "../favourite-buttton/FavouriteButton";
import VoteButton from "../vote-button/VoteButton";
import classes from "./ImageCard.module.css";
import { Image } from "../../../models/Image";


type ImageCardProps = {
    image: Image,
    setFavourite: Function,
    setVote: Function
}

function ImageCard(props: ImageCardProps) {

    const favouriteClicked = (isFavourite: boolean) => {
        props.setFavourite(isFavourite, props.image);
    }

    const voteClicked = (value: number) => {
        props.setVote(value, props.image);
    }

    return <Card className={classes.ImageCard}>
        <Card.Img className={classes.Img} src={props.image.url}></Card.Img>
        <div className={classes.ActionContainer}>
            <VoteButton votes={props.image.votes} onVoteClick={(value: number) => voteClicked(value)} /><FavouriteButton onClick={(isFavourite: boolean) => favouriteClicked(isFavourite)} isFavourite={props.image.favouriteData !== null && props.image.favouriteData !== undefined} />
        </div>
    </Card>
}

export default ImageCard;