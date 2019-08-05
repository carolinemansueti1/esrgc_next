import Layout from '../components/Layout';
import Footer from '../components/Footer';
const news = () => (
    <Layout>
        <div className="ui center aligned basic very padded segment">
            <div className='spaced'>
                Under Construction.
            </div>
        </div>
        <Footer />
        <style jsx>
            {`
            .spaced {
                height: 35vh;
                text-align: center;
            }`}
        </style>
    </Layout>
    
)

export default news;