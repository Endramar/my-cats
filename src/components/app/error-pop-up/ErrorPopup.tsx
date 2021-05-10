import classes from "./ErrorPopup.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actions, AppState } from "../../../store/store";


function ErrorPopup() {

    const dispatch = useDispatch();
    const currentError = useSelector((state: AppState) => state.currentError);

    const onHide = () => {
        dispatch(actions.clearError());
    }

    return <Modal show={currentError !== null && currentError !== undefined}
        keyboard={false}
        onHide = {onHide}
        animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <p className={classes.Text}>{currentError}</p>
        </Modal.Body>
    </Modal>
}

export default ErrorPopup