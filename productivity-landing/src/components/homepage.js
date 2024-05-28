import './homepage.css'
import clouds from '../img/clouds.svg'
import line from '../img/line.svg'
import circle from '../img/Ellipse 2.svg'
import vline from '../img/Line 2.svg'
import gradient from '../img/gradient.svg'
import one_of_stats from '../img/one of stats.svg'
import play_button from '../img/play button.svg'

function HomePage(){
    return(
        <div className="homepage">
            <div className="background">
                <img src={clouds} className="clouds" alt="clouds"/>
                <img src={line} className="line" alt="line"/>
                <img src={gradient} className="gradient" alt="gradient"/>
                <img src={circle} className="circle circle-1" alt="cirlce"/>
                <img src={circle} className="circle circle-2" alt="cirlce"/>
                <img src={circle} className="circle circle-3" alt="cirlce"/>
                <img src={circle} className="circle circle-4" alt="cirlce"/>
                <img src={vline} className="y-line y-line-1" alt="y-line"/>
                <img src={vline} className="y-line y-line-2" alt="y-line"/>
                <img src={vline} className="y-line y-line-3" alt="y-line"/>
                <img src={vline} className="y-line y-line-4" alt="y-line"/>
                <img src={one_of_stats} className="state" alt="state"/>
            </div>
            <div className="content">
                <p className="upper-title">PLAN YOUR LIFE</p>
                <p className="main-title">Increase your <b>productivity</b></p>
                <p className="content-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
                                        Usu <br/> atqui laudem an, insolens gubergren similique est cu. 
                                        Et vel modus <br/> congue vituperata.</p>
                <img src={play_button} className="play-button" alt="play-button"/>
            </div>
            

        </div>
    )
}
export default HomePage