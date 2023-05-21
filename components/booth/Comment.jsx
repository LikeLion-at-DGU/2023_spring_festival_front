import { CommentCardFirstRow, CommentCardSecondRow, CommentCardWrapper, CommentHr, NameDate, ReplyDelete } from "@/pages/booth/detail/style";
import { faTurnDownRight, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentCard({writer,content,created_at }) {
    return (
        <>
        <CommentHr/>
        <CommentCardWrapper>
            <CommentCardFirstRow>
                <NameDate>
                    {writer}&nbsp;{created_at}
                </NameDate>
                <ReplyDelete>
                    <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"10px"}}/>
                    <FontAwesomeIcon icon={faTrashCan} size="xs"/>
                </ReplyDelete>
            </CommentCardFirstRow>
            {content}
            <CommentCardSecondRow>
                
            </CommentCardSecondRow>
        </CommentCardWrapper>
        </>
    );
}

export default CommentCard;