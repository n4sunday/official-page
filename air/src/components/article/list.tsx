import { h, FunctionalComponent } from "preact"
import * as style from "./style.scss"
import { Typography } from "antd"
const { Text, Paragraph } = Typography
const List: FunctionalComponent = () => (
  <div className={style.list}  data-aos="fade-up">
    <div className={style.gird_col}>
      <Text className={style.date}>12/01</Text>
      <div className={style.gird_row}>
        <Text className={style.title}>
          Our take on using React with modern application platform
        </Text>
        <Text className={style.detail}>
          As we speak, our company have been strive to be the best in a company
          that serve yourr need whenever
        </Text>
      </div>
    </div>
  </div>
)

export default List
