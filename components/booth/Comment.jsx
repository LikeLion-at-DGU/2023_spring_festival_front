import { CommentCardFirstRow, CommentCardSecondRow, CommentCardWrapper, CommentHr, NameDate, ReplyContent, ReplyDelete, ReplyFrist, ReplySecond, ReplyWrapper } from "@/pages/booth/detail/style";
import { faTurnDownRight, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CommentCard({writer,content,created_at,reply }) {
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

            
            <>
            {reply && reply.map((reply) => (
            <ReplyWrapper>
                <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"7px",color:"#FC8CAE",marginTop:"7px"}}/>
                <CommentCardSecondRow
                key={reply.id}
                >
                    <ReplyFrist>
                        <NameDate>
                            {reply.writer}&nbsp;{reply.created_at}
                        </NameDate>
                        <ReplyDelete>
                            <FontAwesomeIcon icon={faTrashCan} size="xs"/>
                        </ReplyDelete>
                    </ReplyFrist>
                    <ReplySecond>

                        {reply.content}
                    </ReplySecond>
                </CommentCardSecondRow>
            </ReplyWrapper>
          ))}
            </>
        </CommentCardWrapper>
        </>
    );
}

export default CommentCard;