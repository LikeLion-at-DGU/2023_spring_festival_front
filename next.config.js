/** @type {import('next').NextConfig} */

const APIURL = "3.35.61.159";

const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            /* 멋쟁이 사자처럼 동국대학교 인스타 계정 연결 URL */
            {
                source: "/dgu-likelion-instar",
                destination:
                    "https://instagram.com/likelion_dongguk?igshid=MzRlODBiNWFlZA==",
                permanent: false,
            },

            /* 멋쟁이 사자처럼 동국대학교 깃허브 링크 URL */
            {
                source: "/dgu-likelion-github",
                destination: "https://github.com/LikeLion-at-DGU",
                permanent: false,
            },

            /* SK DEVOCEAN 링크 URL */
            {
                source: "/skdevocean",
                destination:
                    "https://instagram.com/skdevocean?igshid=MzRlODBiNWFlZA==",
                permanent: false,
            },
        ];
    },

    async rewrites() {
        return [
            // Booth 관련 API
            {
                // 부스 리스트 (GET)
                source: "/store/list",
                destination: `http://${APIURL}/api/booths`,
            },
            {
                // 각 부스 디테일 정보 (GET)
                source: "/store/info/:store_id",
                destination: `http://${APIURL}/api/booths/:store_id`,
            },
            {
                // 부스 좋아요 TOP3 or TOP5 (GET)
                source: "/store/top",
                destination: `http://${APIURL}/api/booths/hot`,
            },
            {
                // 각 부스 랜덤 추천 (GET)
                source: "/store/random",
                destination: `http://${APIURL}/api/booths/recommend`,
            },

            // Booth 댓글 관련 API
            {
                // 각 부스 댓글 리스트 (GET)
                // 각 부스 댓글 생성 (POST)
                source: "/store/:store_id/respond",
                destination: `http://${APIURL}/api/booths/:store_id/comments`,
            },
            {
                // 각 부스 댓글 삭제 (DELETE)
                source: "/respond/:respond_id",
                destination: `http://${APIURL}/api/comments/:respond_id`,
            },

            // Booth 댓글의 답글 관련 API
            {
                // 각 댓글의 답글 생성 (POST)
                source: "/respond/:respond_id/reaction",
                destination: `http://${APIURL}/api/comments/:respond_id/replies`,
            },
            {
                // 각 댓글의 답글 삭제 (DELETE)
                source: "/reaction/:reaction_id",
                destination: `http://${APIURL}/api/replies/:reaction_id`,
            },

            // Booth 좋아요 관련 API
            {
                // 좋아요 생성 (POST)
                // 좋아요 삭제 (DELETE)
                source: "/store/:store_id/love",
                destination: `http://${APIURL}/api/booths/:store_id/likes`,
            },

            // Notice 관련 API
            {
                // 공지 리스트 (GET)
                source: "/alarm",
                destination: `http://${APIURL}/api/notifications`,
            },
            {
                // 공지 디테일 (GET)
                source: "/alarm/:alarm_id",
                destination: `http://${APIURL}/api/notifications/:alarm_id`,
            },
        ];
    },
};

module.exports = nextConfig;
