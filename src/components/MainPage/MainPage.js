import './MainPage.scss';
import logo from '../../images/send-w.png'

const MainPage = () => {
    return (
        <div className='title-page'>
            <h2 className='title-page__heading'>
                Messanger
            </h2>
            <div className="title-page__logo-wrap">
                <img src={logo} alt="logo" className='title-page__logo'/>
            </div>
        </div>
    )
}

export default MainPage;