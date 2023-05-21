import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeafultImage from "../../../../components/image/common/booth_deafault.png"
import { BoothDetailContent, BoothDetailCotainer, BoothDetailHeader, BoothDetailHeaderWrapper, BoothDetailLine, BoothDetailLocation, BoothDetailLoveShareWrapper, BoothDetailMenuAllSee, BoothDetailMenuHeader, BoothDetailMenuTitle, BoothDetailMenuWrapper, BoothDetailOperator, BoothDetailSeparator, BoothDetailTime, BoothDetailTitle, BoothImageSlider, BoothImageWrapper, BoothLogoImage, BoothLogoWrapper, BoothMenuImage, CommentBtn, CommentContent, CommentContentInput, CommentId, CommentInfWrapper, CommentInput, CommentInputContainer, CommentInputWrapper, CommentPassword, CommentWrapper, DetailHeart, DetailHeartCnt, DetailHeartWrapper, DetailRibbon, DetailShareIcon, ShareIcon } from './style';
import { BoothCardDetailHeartWrapper, CardDetailHeartCntWrapper, CardDetailHeartIcon, Ribbon } from '../search_style';
import Booth from '..';
import { faHeart, faShareNodes  } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart,faClock,faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { RankBoothDetailLocation } from '../style';




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
    const [booth, setBooth] = useState(
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
    );
    const [comment, setComment] = useState([
        {
            id: 1,
            writer: "chan",
            content: "zzzz",
            created_at: "2023-05-23",
            replies: [
                {
                    id: 1,
                    writer: "adss",
                    content: "대박",
                    created_at:"zzzzzz"
                },
            ]
        },
    ]
    );
    

  const router = useRouter();
  const { id } = router.query;

//   링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('지금 있는 페이지의 링크가 복사되었습니다.');
  };


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
                    <CommentContentInput placeholder='숫자 4자리' required value={commentContent} onChange={handleCommentContentChange}/>
                <CommentBtn>게시</CommentBtn>
                </CommentContent>
                
            </CommentInputWrapper>
        </CommentWrapper>


    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;
