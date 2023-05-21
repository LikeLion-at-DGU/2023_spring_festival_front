import { CommentCardFirstRow, CommentCardSecondRow, CommentCardWrapper, CommentHr, CommentId, CommentInfWrapper, CommentInput, CommentPassword, NameDate, ReplyCommentId, ReplyCommentInfWrapper, ReplyContent, ReplyContentWrapper, ReplyDelete, ReplyForm, ReplyFrist, ReplyInputContent, ReplyInputContentBtn, ReplySecond, ReplyWrapper } from "@/pages/booth/detail/style";
import { faTurnDownRight, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";



function CommentCard({writer,content,created_at,reply }) {

    const [replyPassword, setReplyPassword] = useState('');
    const [replyNickname, setReplyNickname] = useState('');
    const [replyCommentContent, setReplyCommentContent] = useState('');


    const [showReplyForm, setShowReplyForm] = useState(false); // 답글 폼의 표시 여부를 관리하기 위한 상태


        // 댓글 내용
        const handleCommentContentChange = (event) => {
            const inputValue = event.target.value;
            setReplyCommentContent(inputValue);
        }

        
        // 닉네임
        const handleNicknameChange = (event) => {
            const inputValue = event.target.value;
            setReplyNickname(inputValue);
        }

            // 비번 
    const handlePasswordChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue)) {
            setReplyPassword(inputValue);
  
        }
    }
        
    const handleReplyButtonClick = () => {
      setShowReplyForm(!showReplyForm); // 답글 버튼 클릭 시 답글 폼의 표시 여부를 토글
    };


    const handleSubmitReply = (event) => {
        event.preventDefault();
        // 답글을 제출하는 로직을 작성하세요
        
        const formData = {
            writer : replyNickname,
            password: replyPassword,
            content : replyCommentContent,
          };
          console.log(dummyCommentData);
      };

    return (
        <>
        <CommentHr/>
        <CommentCardWrapper>
            <CommentCardFirstRow>
                <NameDate>
                    {writer}&nbsp;{created_at}
                </NameDate>
                <ReplyDelete>
                    <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"10px"}} 
                        onClick={handleReplyButtonClick} />

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
                            <FontAwesomeIcon icon={faTrashCan} size="xs" style={{color:"#525252"}}/>
                        </ReplyDelete>
                    </ReplyFrist>
                    <ReplySecond>
                        {reply.content}
                    </ReplySecond>
                </CommentCardSecondRow>
            </ReplyWrapper>
          ))}
            </>
            {/* Reply 눌렀을때 */}
            {showReplyForm && (
          <ReplyForm onSubmit={handleSubmitReply}>
            <ReplyCommentInfWrapper>
                <ReplyCommentId>
                    작성자 명
                    <CommentInput placeholder='닉네임'value={replyNickname}
                    onChange={handleNicknameChange} required/>
                </ReplyCommentId>
                <CommentPassword style={{color:"#808080", fontSize:"12px"}}>
                    비밀번호
                    <CommentInput placeholder='숫자 4자리' inputMode='numeric' minLength={4} maxLength={4} type='password' value={replyPassword}
                    onChange={handlePasswordChange} required />
                </CommentPassword>
            </ReplyCommentInfWrapper>
            <ReplyContentWrapper>
                <ReplyInputContent
                    placeholder="댓글을 작성해주세요."
                    required
                    value={replyCommentContent}
                    onChange={handleCommentContentChange}
                />
                <ReplyInputContentBtn type="submit">게시</ReplyInputContentBtn>
            </ReplyContentWrapper>
          </ReplyForm>
        )}

        </CommentCardWrapper>
        </>
    );
}

export default CommentCard;