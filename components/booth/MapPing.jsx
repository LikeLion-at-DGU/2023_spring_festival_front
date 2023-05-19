import mainMapIcon from '../image/pin.png'
import Image from 'next/image'

export const MapPing = (key)=> {
    switch (key) {
        case '만해광장':
          //오키
        return (
            <>
                <Image
                    src={`${mainMapIcon}`}
                    className="fadeIn"
                    style={{
                        position: 'absolute',
                        transition: '0.5s all',
                        width: '15%',
                        right: '86px',
                        bottom: '9rem',
                    }}
                />
            </>
            );
        case '대운동장':
          // okay
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '240px',
                  bottom: '10rem',
                }}
              />
            </>
          );
        case '팔정도':
          //오키
          return (
            <>
              <Image
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  left: '10.7rem',
                  bottom: '9.3rem',
                }}
              />
            </>
          );
        case '명진관':
          // 오키
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '181px',
                  bottom: '10.7rem',
                }}
              />
            </>
          );
        case '원흥관':
          //오키
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '92.2px',
                  bottom: '10.8rem',
                }}
              />
            </>
          );
        case '학생회관':
          //오키
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '53.7px',
                  bottom: '11.2rem',
                }}
              />
            </>
          );
        case '학림관':
          //okay
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '66px',
                  bottom: '6.7rem',
                }}
              />
            </>
          );
        case '다향관':
          //okay
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '136px',
                  bottom: '8.5rem',
                }}
              />
            </>
          );
        case '법학관':
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '190px',
                  bottom: '8.3rem',
                }}
              />
            </>
          );
        case '혜화관':
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '230px',
                  bottom: '7.4rem',
                }}
              />
            </>
          );
        case '사회과학관':
          //okay
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '253px',
                  bottom: '6.5rem',
                }}
              />
            </>
          );
        case '잉카페앞':
          // okday
          return (
            <>
              <img
                src={`${mainMapIcon}`}
                className="fadeIn"
                style={{
                  position: 'absolute',
                  transition: '0.5s all',
                  width: '15%',
                  right: '246px',
                  bottom: '8.4rem',
                }}
              />
            </>
          );
    
        default:
          break;
      }
}

export default MapPing;