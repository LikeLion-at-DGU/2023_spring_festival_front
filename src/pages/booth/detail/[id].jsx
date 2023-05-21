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




const BoothDetailPage = () => {

    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [commentContent, setCommentContent] = useState('');

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
    const [booth, setBooth] = useState([]);
    const [comment, setComment] = useState([]);
    

  const router = useRouter();
  const { id } = router.query;

//   링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('지금 있는 페이지의 링크가 복사되었습니다.');
  };


  const fetchComments = async() => {
    try {
      // const data = await response.json();
      // 해당 id comments 불러오기
    //   const response = await axios.get(`posts/${id}/comments`);
    //   const commentData = response.data;
    const commentData  = [
        {
            id: 1,
            writer: "chan",
            content: "zzzz",
            created_at: "2023-05-21T21:24:42.354552",
            replies: [
                {
                    id: 1,
                    writer: "adss",
                    content: "대박",
                    created_at:"2023-05-21T21:24:42.354552"
                },
            ]
        },
        {
            id: 2,
            writer: "mens",
            content: "zzzz",
            created_at: "2023-05-21T21:24:42.354552",
            replies: [
                {
                    id: 1,
                    writer: "adss",
                    content: "대박",
                    created_at:"2023-05-21T21:24:42.354552"
                },
                {
                    id: 2,
                    writer: "adss",
                    content: "대박",
                    created_at:"2023-05-21T21:24:42.354552"
                },
            ]
        },
        {
            id: 3,
            writer: "mens",
            content: "zzzz",
            created_at: "2023-05-23",
            replies: [

            ]
        },

    ]
    setComment(commentData);
    console.log(commentData);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

const fetchBooths = async() => {
    try {
        // const response = await axios.get(`posts/${id}`);
        // const postData = response.data;
        const boothData = 
            {
                id: 1,
                name: "으아아앙악..",
                type: "주간부스",
                operator: "멋쟁이사자처럼",
                logo_image: [],
                like_cnt: 18,
                start_at: "2023-05-23",
                end_at: "2023-05-23",
                location: "원흥관 9번",
                section: "1",
                description: "나는 ㅋㅋ너",
                menu: {
                    "메뉴1":2000,
                    "메뉴2":3000,
                    "메뉴3":4000,
                    },
                menu_image: ["https://url.kr/c8j4ag","https://url.kr/c8j4ag","https://url.kr/c8j4ag"],
                is_liked: false
            }
            setBooth(boothData);
            console.log(boothData)
    } catch (error) {
        console.error('Error: ', error);
    }
};

useEffect(() => {
    fetchBooths();
    fetchComments();
}, []);

  // 댓글 등록
  const handleSubmission = (event) => {
    event.preventDefault(); // 폼 제출의 기본 동작인 페이지 새로고침을 방지합니다.

    const formData = {
        writer : nickname,
        password: password,
        content : commentContent,
      };
      const dummyCommentData = {
        writer : nickname,
        password: password,
        content : commentContent,
      }

      console.log(dummyCommentData);

    // 욕설 필터링 
    
    // 욕설 안걸렸을 시 통과 

    //   // post보내기 
    //   axios.post('reports', formData)
    //     .then((response) => {
    //       // console.log(response.data);
    //     })
    //     .catch((error) => {
    //       // console.log( "제보 제출에러!");
    //       // 오류 처리 로직을 추가합니다.
    //       console.error('Error:', error);
    //     });

      // 성공했을시 ReportDone으로 이동          

    // 성공했을시 페이지 새로고침 
    // window.location.reload();
  };

  return (
    <BoothDetailCotainer>
        <BoothLogoWrapper>
            <DetailRibbon type={booth.type}>{booth.type}</DetailRibbon>
            <BoothLogoImage src={DeafultImage}/>
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
                    <DetailHeart icon={booth.is_liked ? faHeart : emptyHeart} size='lg'/>
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
            <BoothImageWrapper>
             <BoothMenuImage src={DeafultImage}/>
            </BoothImageWrapper>
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
            </CommentInputWrapper>xw
                
            <CommentListWrapper>
                {comment.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        commentId={comment.id}
                        writer={comment.writer}
                        content={comment.content}
                        created_at={comment.created_at}
                        reply = {comment.replies}
                    />
                    ))}
            </CommentListWrapper>
        </CommentWrapper>


    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;
