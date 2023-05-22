import { CommentCardFirstRow, CommentCardSecondRow, CommentCardWrapper, CommentHr, CommentId, CommentInfWrapper, CommentInput, CommentPassword, MdoalBtn, ModalDelBtnWrapper, ModalDelDes, ModalDelHeader, ModalDelInput, ModalDelWrapper, NameDate, ReplyCommentId, ReplyCommentInfWrapper, ReplyContent, ReplyContentWrapper, ReplyDelete, ReplyForm, ReplyFrist, ReplyFromContainer, ReplyInputContent, ReplyInputContentBtn, ReplySecond, ReplyWrapper } from "@/pages/booth/detail/style";
import { faTurnDownRight, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from 'react-modal';
import { ModalWrapper } from "components/nav/styled";
import { API } from "@/pages/api";
import { Alert } from "@mui/material";




function CommentCard({commentId,writer,content,created_at,reply }) {
    
    const [replyPassword, setReplyPassword] = useState('');
    const [replyNickname, setReplyNickname] = useState('');
    const [replyCommentContent, setReplyCommentContent] = useState('');
    const [showReplyForm, setShowReplyForm] = useState(false); // 답글 폼의 표시 여부를 관리하기 위한 상태
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [deletePassword, setDeletePassword] = useState("");
    const [isReply, setIsReply] = useState(false); // 답글인지 댓글인지 구분하기 위한 상태
    const [replyId, setReplyId] = useState('')

    const customModalStyles = {
        content: {
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          background: '#fff',
          height: '300px', // 원하는 높이 값으로 수정해주세요
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '1000',
        },
      };
      
    
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
        setDeletePassword("");
      };
      
    const handleReplyButtonClick = () => {
      setShowReplyForm(!showReplyForm); // 답글 버튼 클릭 시 답글 폼의 표시 여부를 토글
    };


    const handleSubmitReply = (event) => {
        event.preventDefault();
        
        const formData = {
            writer : replyNickname,
            password: replyPassword,
            content : replyCommentContent,
          };
          console.log(commentId);
          API.post(`/respond/${commentId}/reaction`,formData)
          .then((response) => {
            alert("댓글이 작성되었습니다.");
            window.location.reload();
          })
          .catch((error) => {
          //   오류 처리 로직을 추가합니다.
            console.error('Error:', error);
          });
      };



      const handleDeleteModalConfirm = () => {
        // 서버에 DELETE 요청 보내는 로직 작성
        console.log(isReply);
        const deleteRequest = async () => {
            try {
                if (isReply) {
                  // reply의 삭제버튼을 클릭한 경우

                  // reply id 로 삭제 보내기
                const response = await API.delete(`/reaction/${replyId}`, {
                    data: {
                        password: deletePassword,
                    },
                })

                if(response.status === 200){
                    alert("댓글이 삭제됐습니다.");
                    window.location.reload();
                }
            
                } else {
                    // 댓글의 삭제버튼을 클릭한 경우
                    // 삭제완 
                    const response = await API.delete(`/respond/${commentId}`, {
                        data: {
                            password: deletePassword,
                        },  
                })
                    if(response.status === 200){
                        alert("댓글이 삭제됐습니다.");
                        window.location.reload();
                    }
                }
                
                
                // const response = await fetch(endpoint, {
                //   method: "DELETE",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify({ password: deletePassword }),
                // });
          
                if (response.ok) {
                  // 삭제 성공 시 필요한 동작 수행
                  alert("댓글이 삭제되었습니다.");
                  window.location.reload();
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
      };

      const handleReplyDeleteButtonClick = (replyId) =>{
        setReplyId(replyId);
        console.log(replyId);
        setIsReply(true);
        setShowDeleteModal(true);
      }
    
      const handleDeletePasswordChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue)) {
            setDeletePassword(inputValue);
        }
      };

      // 비밀번호 입력이 유효한지 확인하는 함수
const isInputValid = () => {
    // 비밀번호가 4자리인지 확인
    if (deletePassword.length !== 4) {
        console.log("!");
      return false;
    }
    
    // 여기에 추가적인 유효성 검사 로직을 작성할 수 있습니다.
    // 필요에 따라 비밀번호 패턴, 조건 등을 확인할 수 있습니다.
    
    return true; // 모든 유효성 검사 통과 시 true 반환
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
                {content !== "삭제된 댓글입니다." ? (
                            <div>
                            <FontAwesomeIcon
                                icon={faTurnUp}
                                size="xs"
                                rotation={90}
                                style={{ marginRight: "10px" }}
                                onClick={handleReplyButtonClick}
                            />
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                size="xs"
                                onClick={handleDeleteButtonClick}
                            />
                            </div>
                        ) : (
                            <p></p>
                        )}
                </ReplyDelete>
            </CommentCardFirstRow>
            {content}
            <>
            {reply && reply.map((reply) => (
            <ReplyWrapper key={reply.id}>
                <FontAwesomeIcon icon={faTurnUp} size="xs" rotation={90} style={{marginRight:"7px",color:"#FC8CAE",marginTop:"7px"}}/>
                <CommentCardSecondRow
                key={reply.id}
                >
                    <ReplyFrist>
                        <NameDate>
                            {reply.writer}&nbsp;{String(reply.created_at).split("T")[0]}&nbsp;{String(reply.created_at).split("T")[1].slice(0,5)}
                        </NameDate>
                        <ReplyDelete>
                            {
                                reply.content !== "삭제된 댓글입니다." &&(
                                    <FontAwesomeIcon icon={faTrashCan} size="xs" style={{color:"#525252"}}
                                    onClick={()=>handleReplyDeleteButtonClick(reply.id)}/>
                                )
                            }
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
<Modal isOpen={showDeleteModal} onRequestClose={handleDeleteModalClose} style={customModalStyles} contentLabel="댓글 삭제">
    <form onSubmit={handleDeleteModalConfirm}>
    <ModalDelWrapper>
            <ModalDelHeader>
                {isReply ? "답글 삭제" : "댓글 삭제"}
            </ModalDelHeader>
            <ModalDelDes>
                댓글을 삭제하시겠습니까?
            </ModalDelDes>
            <ModalDelInput
                required
                type="password"
                placeholder="비밀번호"
                inputMode='numeric' 
                minLength={4}
                maxLength={4} 
                value={deletePassword}
                onChange={handleDeletePasswordChange}
            />
            <ModalDelBtnWrapper>
                <MdoalBtn onClick={handleDeleteModalClose}>
                뒤로가기
                </MdoalBtn>
                <MdoalBtn>
                제출하기
                </MdoalBtn>
            </ModalDelBtnWrapper>
    </ModalDelWrapper>
    </form>
</Modal>
    

        </>
    );
}

export default CommentCard;