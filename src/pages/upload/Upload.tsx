import React from 'react';
import ImageUploader from '../../components/app/image-uploader/ImageUploader';
import httpClient from '../../http/http-client';

function Upload(props: any) {

    const onFileUploadedHandler = (file: File) => {
        const data = new FormData();
        data.append('file', file);

        httpClient.postForm('images/upload', data)
            .then(response => {
                props.history.push('/');
            })
    }

    return <div><ImageUploader onFileUploaded={onFileUploadedHandler} text={'Please upload a cat image.'} /></div>
}

export default Upload;