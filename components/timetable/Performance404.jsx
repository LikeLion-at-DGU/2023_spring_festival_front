import { SubItem404, ToggleSub } from "@/timeTable";
import { faRepublican } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Performance404({
  nowPerf24,
  nowPerf25,
  clickedDate,
  isOpen,
}) {
  if (clickedDate <= 24) {
    if (nowPerf24) {
      return;
    } else if (!nowPerf24) {
      return (
        <ToggleSub isOpen={isOpen}>
          <SubItem404>
            <FontAwesomeIcon icon={faRepublican} />
            현재 공연 중인 정보가 없습니다
            <FontAwesomeIcon icon={faRepublican} />
          </SubItem404>
        </ToggleSub>
      );
    }
  } else if (clickedDate === 25) {
    if (nowPerf25) {
      return;
    } else if (!nowPerf25) {
      return (
        <ToggleSub isOpen={isOpen}>
          <SubItem404>
            <FontAwesomeIcon icon={faRepublican} />
            현재 공연 중인 정보가 없습니다
            <FontAwesomeIcon icon={faRepublican} />
          </SubItem404>
        </ToggleSub>
      );
    }
  }
}
