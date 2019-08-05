
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ( props ) => {
    return (
        <div>
            <Head>
                <title>ESRGC</title>
                <link 
                    rel="stylesheet" 
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </Head>
            <Navigation />
            <body>
                {props.children}
            </body>
            
            <style jsx>
                {` body {
                    margin-top: 16vh;
                    overflow: visible;
                }
                    a {
                        text-decoration: none;
                    }

                    body.h1 {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
}

export default Layout;