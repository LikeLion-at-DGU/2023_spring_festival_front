import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeafultImage from "../../../../components/image/common/booth_deafault.png"
import { BoothDetailContent, BoothDetailCotainer, BoothDetailHeader, BoothDetailHeaderWrapper, BoothDetailLine, BoothDetailLocation, BoothDetailLoveShareWrapper, BoothDetailMenuAllSee, BoothDetailMenuHeader, BoothDetailMenuTitle, BoothDetailMenuWrapper, BoothDetailOperator, BoothDetailSeparator, BoothDetailTime, BoothDetailTitle, BoothImageSlider, BoothImageWrapper, BoothLogoImage, BoothLogoWrapper, BoothMenuImage, CommentBtn, CommentContent, CommentContentInput, CommentHr, CommentId, CommentInfWrapper, CommentInput, CommentInputContainer, CommentInputWrapper, CommentListWrapper, CommentPassword, CommentWran, CommentWrapper, DetailHeart, DetailHeartCnt, DetailHeartWrapper, DetailRibbon, DetailShareIcon, ShareIcon } from './style';
import { BoothCardDetailHeartWrapper, CardDetailHeartCntWrapper, CardDetailHeartIcon, Ribbon } from '../search_style';
import Booth from '..';
import { faHeart, faShareNodes  } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart,faClock,faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot,faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { RankBoothDetailLocation } from '../style';
import CommentCard from 'components/booth/Comment';
import { API } from '@/pages/api';


export async function getServerSideProps(context) {
    const {id} = context.query;
    // 데이터를 가져오기 위한 비동기 작업을 수행합니다.
    const fetchBooths = async(id) => {
        try{
            const res = await API.get(`/store/info/${id}`)
            const boothData = res.data;
            return boothData;
        }catch(err){
            console.log(err)
            return null;
        }
    }

    const boothData = await fetchBooths(id);

    return {
      props: {
        myData: boothData,
      },
    };
  }



const BoothDetailPage = ({myData}) => {

    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [isLikeClick,setIsLikeClick] = useState(false);
    const [booth, setBooth] = useState([]);
   
  const handleHeartClick = async () => {
    const id = router.query.id
    console.log(id);
    console.log(booth.is_liked);
    if(booth.is_liked){
        try {
            // axios요청 보내기 
        console.log("하트 클릭");
        setIsLikeClick(i=>!i)
        const response = await API.delete(`/store/${id}/love`);
        if (response.status === 200) {
            console.log("하트 클릭 성공");
          } else {
            // Handle error case
            console.log("하트 클릭 실패");
          }
        } catch (error) {
          // Handle error case
        }
    }else{

        try {
            // axios요청 보내기 
            console.log("하트 클릭");
            const response = await API.post(`/store/${id}/love`);
    
          if (response.status === 200) {
            console.log("하트 클릭 성공");
            setIsLikeClick(i=>!i)
          } else {
            // Handle error case
            console.log("하트 클릭 실패");
          }
        } catch (error) {
          // Handle error case
        }
    }
  };

      
    // 댓글 내용
    const handleCommentContentChange = (event) => {
        const inputValue = event.target.value;
        setCommentContent(inputValue);
    }

    // 닉네임
    const handleNicknameChange = (event) => {
        const inputValue = event.target.value;
        setNickname(inputValue);
    }

    // 비번 
    const handlePasswordChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue)) {
          setPassword(inputValue);
  
        }
    }
    const [comment, setComment] = useState([]);
  


    const router = useRouter();
//   링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('현재 페이지의 링크가 복사되었습니다.');
  };

  const fetchComments = async() => {
    const id = router.query.id
    try {
      //해당 id comments 불러오기
      const response = await API.get(`/store/${id}/respond`);
      const commentData = response.data;
   
    setComment(commentData);
    console.log(commentData);
    } catch (error) {
      console.error('Error: ', error);
    }
  };



const fetchBooth = async() => {
    const sId = router.query.id
    try {
        // const response = await axios.get(`posts/${id}`);
        // const postData = response.data;
        const response = await API.get(`/store/info/${sId}`);
        const boothDetailData = response.data;
        setBooth(boothDetailData);
        //console.log(boothDetailData.is_liked)
    } catch (error) {
        console.error('Error: ', error);
    }
};

useEffect(() => {
    fetchBooth();
    fetchComments();
}, [isLikeClick]);

  // 댓글 등록
  const handleSubmission = (event) => {
    const sId = router.query.id
    event.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침을 방지합니다.

    const formData = {
        writer : nickname,
        password: password,
        content : commentContent,
      };
    // 욕설 필터링 
    
    // 욕설 안걸렸을 시 통과 

      // post보내기 
      API.post(`/store/${sId}/respond`, formData)
        .then((response) => {
        //   console.log(response.data);
        })
        .catch((error) => {
        //   console.log( "제보 제출에러!");
        // //   오류 처리 로직을 추가합니다.
        //   console.error('Error:', error);
        });

      // 성공했을시 ReportDone으로 이동          

    // 성공했을시 페이지 새로고침 
    window.location.reload();
  };


  return (
    <BoothDetailCotainer>
        <BoothLogoWrapper>
            <DetailRibbon type={booth.type}>{booth.type}</DetailRibbon>
            <BoothLogoImage src={DeafultImage} alt="부스로고이미지"/>
        </BoothLogoWrapper>
        <BoothDetailHeader>
            <BoothDetailHeaderWrapper>
                <BoothDetailOperator>
                    {booth.operator}
                </BoothDetailOperator>
                <BoothDetailTitle>
                    {booth.name}
                </BoothDetailTitle>
            </BoothDetailHeaderWrapper>
            <BoothDetailLoveShareWrapper>
                <DetailHeartWrapper>
                    <DetailHeart
                           icon={booth.is_liked ? faHeart : emptyHeart}
                           size="lg"
                           onClick={handleHeartClick}
                     />
                    <DetailHeartCnt>{booth.like_cnt}</DetailHeartCnt>
                </DetailHeartWrapper>
                
                <ShareIcon icon={faPaperPlane} size='lg' onClick={handleCopyLink}/>
            </BoothDetailLoveShareWrapper>

        </BoothDetailHeader>
        <BoothDetailContent>
            {booth.description}
        </BoothDetailContent>
        <BoothDetailLocation>
        <FontAwesomeIcon icon={faLocationDot} style={{marginRight:"10px"}}/>
            {booth.location}
        </BoothDetailLocation>
        <BoothDetailTime>
        <FontAwesomeIcon icon={faClock} style={{marginRight:"10px"}}/>
            {booth.start_at} ~ {booth.end_at}
        </BoothDetailTime>
        <BoothDetailSeparator />
        <BoothDetailMenuWrapper>
            <BoothDetailMenuHeader>
                <BoothDetailMenuTitle>
                    메뉴
                </BoothDetailMenuTitle>
                {/* <BoothDetailMenuAllSee>
                    전체메뉴 보기
                </BoothDetailMenuAllSee> */}
            </BoothDetailMenuHeader>
            <BoothImageSlider>
                <BoothMenuImage src={DeafultImage} 
                    alt="Booth Menu Image"
                    width={250}
                    height={250}
                    />
                <BoothMenuImage src={DeafultImage} 
                    alt="Booth Menu Image"
                    width={250}
                    height={250}
                    />
            </BoothImageSlider>
        </BoothDetailMenuWrapper>

        {/* 댓글 */}
        <CommentWrapper>
            <BoothDetailSeparator />
                <BoothDetailMenuTitle>
                    댓글 {comment.length}
            </BoothDetailMenuTitle>

            {/* 댓글 Form */}
            
            <CommentInputWrapper onSubmit={handleSubmission}>
                <CommentInfWrapper>
                    <CommentId>
                        작성자 명
                        <CommentInput placeholder='닉네임'value={nickname}
                  onChange={handleNicknameChange} required/>
                    </CommentId>
                    <CommentPassword>
                        비밀번호
                        <CommentInput placeholder='숫자 4자리' inputMode='numeric' minLength={4} maxLength={4} type='password' value={password}
                  onChange={handlePasswordChange} required />
                    </CommentPassword>
                </CommentInfWrapper>
                <CommentContent>
                    <CommentContentInput placeholder='댓글을 입력해주세요' required value={commentContent} onChange={handleCommentContentChange}/>
                <CommentBtn>게시</CommentBtn>
                </CommentContent>
                <CommentWran>
                <FontAwesomeIcon icon={faCircleExclamation} />
                &nbsp;욕설이나 비방의 댓글은 필터링 기능에 의해 게시되지 않습니다.
                </CommentWran>
            </CommentInputWrapper>
                
            <CommentListWrapper>
                {comment.map((comment) => (
                    <div key={comment.id}>
                    <CommentCard
                        key={comment.id}
                        commentId={comment.id}
                        writer={comment.writer}
                        content={comment.content}
                        created_at={comment.created_at}
                        reply = {comment.replies}
                    />
                    </div>
                    ))}
            </CommentListWrapper>
        </CommentWrapper>


    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;