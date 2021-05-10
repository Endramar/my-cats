import classes from "./VoteButton.module.css";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Vote } from "../../../models/Vote";

type VoteButtonProps = {
    onVoteClick: Function,
    votes: Vote[]
}

function VoteButton(props: VoteButtonProps) {

    const onThumsupClickHandler = () => {
        props.onVoteClick(1);
    }

    const onThumsdownClickHandler = () => {
        props.onVoteClick(0);
    }

    let score = 0;

    if (props.votes && props.votes.length > 0) {
        let ups = props.votes.filter(x => x.value === 1).length;
        let downs = props.votes.filter(x => x.value === 0).length;
        score = ups - downs;
    }

    let scoreClass = classes.Score;

    if (score > 0) {
        scoreClass = scoreClass + " " + classes.Up;
    }
    else if (score < 0) {
        scoreClass = scoreClass + " " + classes.Down;
    }

    return <div className={classes.VoteButton}>
        <span onClick={onThumsupClickHandler} className={classes.Thumbsup}><FontAwesomeIcon icon={faThumbsUp} /></span>
        <span onClick={onThumsdownClickHandler} className={classes.Thumbsdown}><FontAwesomeIcon icon={faThumbsDown} /></span>
        <span className={scoreClass}>Score :  {score}</span>
    </div>
}

export default VoteButton;