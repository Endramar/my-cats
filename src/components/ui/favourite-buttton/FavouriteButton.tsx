import classes from "./FavouriteButton.module.css";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type FavouriteButtonProps = {
    onClick: Function,
    isFavourite: boolean
}

function FavouriteButton(props: FavouriteButtonProps) {
    const onFavouriteClickHandler = () => {
        let newValue = !props.isFavourite;
        props.onClick(newValue);
    }

    let className = classes.UnFavouriteButton;

    if (props.isFavourite) {
        className = classes.FavouriteButton;
    }

    return <span onClick={onFavouriteClickHandler} className={className}>
        <FontAwesomeIcon icon={faHeart} />
    </span>
}

export default FavouriteButton;