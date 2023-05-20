import { BoothCardDetailWrapper, BoothCardImage, BoothCardWrapper } from "@/pages/booth/search_style";
import DeafultImage from "../image/common/booth_deafault.png"

function BoothCard({name,operator,logoImage,likeCnt,isLike,location}) {
    return (
        <BoothCardWrapper>
            <BoothCardImage src={DeafultImage}/>
            <BoothCardDetailWrapper>

            </BoothCardDetailWrapper>

            
        </BoothCardWrapper>
    );
}

export default BoothCard;