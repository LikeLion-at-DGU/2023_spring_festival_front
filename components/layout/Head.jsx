import Head from "next/head";

export default function HeadTitle(){
    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <title>Re:Spring</title>
            <meta name="description" content="2023 둥국대학교 대동제 다시 봄 축제사이트입니다." />
        </Head>
    )
}