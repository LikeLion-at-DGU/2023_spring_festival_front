import Layout from "components/layout/Layout";
import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const primaryColor = "#FC8CAE";
export const secondaryColor = "#525252";
export const subPinkColor = "#FFE9F0";

export default function App({ Component, pageProps }) {
  return (
    <Body className="Container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {`
          @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          menu,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          main,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            font-family: Helvetica;
          }
          /* HTML5 display-role reset for older browsers */
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          main,
          menu,
          nav,
          section {
            display: block;
          }
          /* HTML5 hidden-attribute fix for newer browsers */
          *[hidden] {
            display: none;
          }
          body {
            line-height: 1;
          }
          menu,
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          * {
            box-sizing: border-box;
          }

          a {
            text-decoration: none;
            color: inherit;
          }
          @font-face {
            font-family: "TmonMonsori";
            src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff")
              format("woff");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "yg-jalnan";
            src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
              format("woff");
            font-weight: normal;
            font-style: normal;
          }
          .notosanskr * {
            font-family: "Noto Sans KR", sans-serif;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          @-webkit-keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-webkit-keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .fadeIn {
            animation: fadeIn;
            animation-duration: 0.8s;
          }

          .fadeOut {
            animation: fadeOut;
            animation-duration: 0.8s;
          }
        `}
      </style>
    </Body>
  );
}
