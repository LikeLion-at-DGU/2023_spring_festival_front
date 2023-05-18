/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return[
      /* 멋쟁이 사자처럼 동국대학교 인스타 계정 연결 URL */
      {
        source : "/dgu-likelion-instar",
        destination : "https://instagram.com/likelion_dongguk?igshid=MzRlODBiNWFlZA==",
        permanent : false,
      },

      /* 멋쟁이 사자처럼 동국대학교 깃허브 링크 URL */
      {
        source : "/dgu-likelion-github",
        destination : "https://github.com/LikeLion-at-DGU",
        permanent : false,
      },
    ]
  }
}

module.exports = nextConfig
