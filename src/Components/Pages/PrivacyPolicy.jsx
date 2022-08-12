import React from 'react'
import Logo from '../../static/Icons/TAf Logo.png'
import Banner from '../../static/Images/bgBanner.png'
import BackIcon from '../../static/Icons/BackIcon.png'

function PrivacyPolicy() {
  return (
    <div className='d-flex flex-column align-items-center px-5'>
        <div className="d-flex flex-column align-items-center justify-content-center my-3">
            <img src={Logo} style={{width: "5rem"}} alt="" />
            <div className="fs-4">TAfCreate</div>
        </div>

        <div className="policy-container border-3 bg-light rounded-3" style={{paddingRight: "2.5rem", width: "70%", zIndex:"1", boxShadow: "3px 2px 3px gray"}}>
            <div className='d-flex flex-column align-items-center justify-content-center pt-4'>
                <div className="display-6 fw-bolder">Privacy Policy</div>
                <div className='fw-bolder' style={{fontSize: ".7rem", color: "#636363"}}>Updated on 9th August</div>
            </div>

            <div className='policy py-3 px-5' style={{maxHeight: "55vh", overflowY: "scroll"}}>
                <div className='terms-of-use mb-4'>
                    <div style={{fontSize: "2rem", fontWeight:500, color: "#4CB2A2"}}>Terms Of Use</div>
                    <ul style={{fontSize: ".6rem", color: "#8B8B8B"}}>
                        <li>Any suspicious activity such as unusual traffic through a third-party source may lead to permanent account suspension and other legal actions.</li>
                        <li>Every creator is restricted to a certain amount of posts in a period of time I.e once in 2 days. Any creator not following the “No Spam Policy” may lead to permanent account suspension with other legal actions.
</li>
                        <li>The platform is based on the idea of “Always and forever “ and we as a platform get solid confirmation from the user before a user decides to follow a creator; thus we are not liable for a change in decision by any user, reason whatsoever.</li>
                        <li>No Creator is allowed to influence people through our Platform Politically, such activities may lead to the deactivation of the account.</li>
                        <li>If you think we made a mistake you may contact us at admin@tafcreate.com </li>
                    </ul>
                </div>

                <div className='privacy-policy mb-4'>
                    <div style={{fontSize: "2rem", fontWeight:500, color: "#4CB2A2"}}>Privacy Policy</div>
                    <div style={{fontSize: ".6rem", fontWeight:500, color: "#8B8B8B"}}>What we collect and how we use it</div>
                    <ul style={{fontSize: ".6rem", color: "#8B8B8B"}}>
                        <li>From a regular user on our platform, we do not collect any personal information as for the Creators we collect information like their names, and contacts for better communication and notification purposes.</li>
                        <li>TAfCreate is obliged to protect the sensitive information of its users and will never intentionally sell or hand over their private and sensitive information to any other party in any case whatsoever.</li>
                    </ul>
                </div>

                <div className='no-spam mb-3'>
                    <div style={{fontSize: "2rem", fontWeight:500, color: "#4CB2A2"}}>No Spam Policy</div>
                    <ul style={{fontSize: ".6rem", color: "#8B8B8B"}}>
                        <li>No Creator is allowed to post multiple posts/ Notification(referred to as Spam) in a 2 days period I.e A creator is only allowed to post once every 2 days and not following the “No Spam policy” by using any malicious means like a third party app, website or any other means may lead to permanent account suspension and legal actions on the offender.</li>
                    </ul>
                </div>

                <div style={{color: "white"}}>empty text just for fix margin bug</div>
            </div>
        </div>

        <div style={{height: "50vh", maxWidth:"100vw", position: "absolute", overflow: "hidden", zIndex:"-1000"}}>
            <div className='' style={{backgroundColor: "black"}}>
                <img src={BackIcon} width="4.5%" alt="" />
            </div>
            <img src={Banner} width="100%" alt="" />
        </div>
    </div>
  )
}

export default PrivacyPolicy