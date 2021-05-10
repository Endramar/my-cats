import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import catImage from '../../../assets/images/cat.jpg';
import classes from './ImageUploader.module.css';

type ImageUploaderProps = {
    children?: any,
    text: string,
    onFileUploaded: Function
}

function ImageUploader(props: ImageUploaderProps) {

    const fileInput = useRef<HTMLInputElement>(null);

    const onUploadClickHandler = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    const onFileUploadChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            props.onFileUploaded(event.target.files[0]);
        }
    }

    return <div className={classes.ImageUploader}>
        <Card className={classes.Card}>
            <Card.Img className={classes.Img} src={catImage} alt="Cat Image"></Card.Img>
            <Card.ImgOverlay className={classes.ImgOverlay}>
                <div onClick={onUploadClickHandler} className={classes.UploadButton}>
                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                </div>
            </Card.ImgOverlay>
            <div className={classes.TextContainer}>
                <p>{props.text}</p>
            </div>
            <input ref={fileInput} type="file" name="file" onChange={onFileUploadChangeHandler} className={classes.FileInput} ></input>
        </Card>
    </div>
}


export default ImageUploader;