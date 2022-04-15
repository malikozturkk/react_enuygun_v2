import "../assets/scss/Header.css"
import Dropdown from "./Dropdown";
import Icons from "../assets/icons/Icons";
import { PropTypes } from 'prop-types';
import { Component } from 'react';

    class Header extends Component {
        state = {isVisible:false}
        showHideDropdown = (e) => {
            this.setState({
                isVisible: !this.state.isVisible
            });
        } 
        render () {
            const {
                first,
                second,
                third,
                fourth
            } = this.props;

            const {isVisible} = this.state;
        
            return (
                <header className="Header">
                    <nav>
                        <div className="Container">
                            <a className="header-logo" href="https://www.enuygun.com"><Icons/></a>
                            <a className="header-items active" href="https://www.enuygun.com/ucak-bileti">{first}</a>
                            <a className="header-items passive" href="https://www.enuygun.com/otobus-bileti">{second}</a>
                            <a className="header-items passive" href="https://www.enuygun.com/otel">{third}</a>
                            <a className="header-items passive" href="https://www.enuygun.com/ucak-bileti/sikca-sorulan-sorular/">{fourth}</a>
                            <a className="dot" href="#" onClick={this.showHideDropdown.bind(this)}>
                                ...
                                {
                                    isVisible ?
                                    <Dropdown first="Kart Puanlarını Aktar" second="Sigorta" third="Vize" fourth="Hediye Kart" fifth="Gezgin" sixth="Kredi" seventh="Araç Kiralama" eighth="Mevduat" ninth="İnternet" tenth="GSM" eleventh="İletişim" twelfth="Yardım" links="https://www.enuygun.com/ucak-bileti" />
                                    : null
                                }
                            </a>
                        </div>
                    </nav>
                </header>
                
            );
        }
        
    }
        


export default Header;