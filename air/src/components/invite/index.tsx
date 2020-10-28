import { h, FunctionalComponent } from "preact"
import * as style from "./style.scss"
import { Typography, Space } from "antd"
const { Text, Paragraph } = Typography
const About: FunctionalComponent = () => (
  <div className={style.container}>
    <div className={style.content}>
      <Text className={style.title}>Work with us</Text>
      <Paragraph className={style.paragraph}>
        As we speak, our company have been strive to be the best in a company
        that serve your need whenever, whatever you’ll need in your business
      </Paragraph>
      <Text underline className={style.underline}>
        See our opening position
      </Text>
    </div>
  </div>
)

export default About
