import { h, FunctionalComponent } from "preact"
import * as style from "./style.scss"
import List from "./list"
import { Typography } from "antd"
import { Divider } from "antd"
import Logo from "../../assets/images/structure.png"

const { Text, Paragraph } = Typography
const Article: FunctionalComponent = () => (
  <div className={style.container}>
    <Text className={style.header}>Read what we write</Text>
    <div className={style.wrapperList}>
      <List />
      <Divider className={style.divider} />
      <List />
      <Divider className={style.divider} />
      <List />
    </div>
    <img
      src={Logo}
      className={style.img}
      alt=""
      loading="lazy"
    />
    <Text underline className={style.underline}>
      Browse our article
    </Text>
  </div>
)

export default Article
