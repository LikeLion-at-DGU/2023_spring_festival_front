import { CommentCardFirstRow, CommentCardSecondRow, CommentCardWrapper, CommentHr, CommentId, CommentInfWrapper, CommentInput, CommentPassword, NameDate, ReplyCommentId, ReplyCommentInfWrapper, ReplyContent, ReplyContentWrapper, ReplyDelete, ReplyForm, ReplyFrist, ReplyFromContainer, ReplyInputContent, ReplyInputContentBtn, ReplySecond, ReplyWrapper } from "@/pages/booth/detail/style";
import { faTurnDownRight, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";



function CommentCard({commentId,writer,content,created_at,reply }) {
    
    const [replyPassword, setReplyPassword] = useState('');
    const [replyNickname, setReplyNickname] = useState('');
    const [replyCommentContent, setReplyCommentContent] = useState('');
    const [showReplyForm, setShowReplyForm] = useState(false); // 답글 폼의 표시 여부를 관리하기 위한 상태
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [deletePassword, setDeletePassword] = useState("");
    const [isReply, setIsReply] = useState(false); // 답글인지 댓글인지 구분하기 위한 상태
    const [replyId, setReplyId] = useState('')

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

      const handleDeleteModalClose = () => {
        setShowDeleteModal(false);
      };
      
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
          console.log(formData);
      };


      const handleDeleteModalConfirm = () => {
        // 서버에 DELETE 요청 보내는 로직 작성
        console.log(isReply);
        const deleteRequest = async () => {
            try {
                let endpoint;
                if (isReply) {
                  // reply의 삭제버튼을 클릭한 경우

                  // reply id 로 삭제 보내기
                  endpoint = `/api/replies/${reply}`;
                  console.log("답글 삭제");
                  console.log(replyId);
                } else {
                    // 댓글의 삭제버튼을 클릭한 경우
                    endpoint = `/api/comments/${commentId}`;
                    console.log("댓글 삭제");
                }
                
                const response = await fetch(endpoint, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ password: deletePassword }),
                });
          
                if (response.ok) {
                  // 삭제 성공 시 필요한 동작 수행
                  alert("댓글이 삭제되었습니다.");
                } else {
                  // 삭제 실패 시 필요한 동작 수행 
                  alert("비밀번호가 틀렸습니다.");
                }
              } catch (error) {
                console.error("Error deleting comment:", error);
              }
        };
    
        deleteRequest();
        setShowDeleteModal(false);
      };
    
      const handleDeleteButtonClick = () => {
        setIsReply(false);
        setShowDeleteModal(true);
        console.log(isReply);
      };

      const handleReplyDeleteButtonClick = (replyId) =>{
        setReplyId(replyId);
        console.log(replyId);
        setIsReply(true);
        setShowDeleteModal(true);
        console.log(isReply);
      }
    
      const handleDeletePasswordChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue)) {
            setDeletePassword(inputValue);
        }
      };


    const filterDate = created_at.split("T")[0]; // "T"를 기준으로 문자열을 분할하여 날짜 부분을 추출
    const filterTime = String(created_at.split("T")[1]).slice(0,5);


    return (
        <>
        <CommentHr/>
        <CommentCardWrapper>
            <CommentCardFirstRow>
                <NameDate>
                    {writer}&nbsp;{filterDate}&nbsp;{filterTime}
                </NameDate>
                <ReplyDelete>
                    <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"10px"}} 
                        onClick={handleReplyButtonClick} />

                    <FontAwesomeIcon icon={faTrashCan} size="xs"
                    onClick={handleDeleteButtonClick}
                    />
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
                            {reply.writer}&nbsp;{String(reply.created_at).split("T")[0]}&nbsp;{String(reply.created_at).split("T")[1].slice(0,5)}
                        </NameDate>
                        <ReplyDelete>
                            <FontAwesomeIcon icon={faTrashCan} size="xs" style={{color:"#525252"}}
                            onClick={()=>handleReplyDeleteButtonClick(reply.id)}/>
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
                <ReplyFromContainer>
                <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"7px",color:"#FC8CAE",marginTop:"7px",display:""}}/>
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
          </ReplyFromContainer>
        )}

        </CommentCardWrapper>
        {showDeleteModal && (
        <div className="delete-modal">
          <div className="delete-modal-content">
            <h3>댓글 삭제</h3>
            <p>댓글을 삭제하시겠습니까?</p>
            <input
                required
              type="password"
              placeholder="비밀번호"
              value={deletePassword}
              onChange={handleDeletePasswordChange}
            />
            <div className="delete-modal-buttons">
              <button onClick={handleDeleteModalClose}>취소</button>
              <button onClick={handleDeleteModalConfirm}>확인</button>
            </div>
          </div>
        </div>
      )}

        </>
    );
}

export default CommentCard;