import { h, FunctionalComponent } from "preact"
import Logo from "../../assets/images/logo.svg"
import * as style from "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer: FunctionalComponent = () => (
  <footer className={style.footer}>
    <div className={style.container}>
      <img src={Logo} className={style.img} />
      <div className={style.container_icon}>
        <FontAwesomeIcon icon={faFacebookF} className={style.icon_fb} />
        <FontAwesomeIcon icon={faTwitter} className={style.icon_tw} />
      </div>
    </div>
  </footer>
)
export default Footer
