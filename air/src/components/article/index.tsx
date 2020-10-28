import { h, FunctionalComponent } from "preact"
import * as style from "./style.scss"
import List from "./list"
import { Typography } from "antd"
import { Divider } from "antd"
import Logo from "../../assets/images/structure.png"

const { Text, Paragraph } = Typography
const Article: FunctionalComponent = () => (
  <div className={style.container}>
    <Text className={style.header}  data-aos="fade-up" data-aos-duration="500">Read what we write</Text>
    <div className={style.wrapperList}>
      <List  />
      <Divider className={style.divider}  data-aos="fade-up" data-aos-duration="600"/>
      <List  />
      <Divider className={style.divider} data-aos="fade-up" data-aos-duration="700"/>
      <List />
    </div>
    <img
      src={Logo}
      data-aos="fade-up"
      className={style.img}
      alt=""
      loading="lazy"
      data-aos-duration="800"
    />
    <Text underline className={style.underline}  data-aos="fade-up" data-aos-duration="900">
      Browse our article
    </Text>
  </div>
)

export default Article
