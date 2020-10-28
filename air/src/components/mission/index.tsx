import { h, FunctionalComponent } from "preact"
import * as style from "./style.scss"
import { Typography, Space } from "antd"
import Mission1 from "../../assets/images/mission_1.png"
import Mission2 from "../../assets/images/mission_2.png"
import Mission3 from "../../assets/images/mission_3.png"
import Mission4 from "../../assets/images/mission_4.png"
const { Text, Paragraph } = Typography
const Mission: FunctionalComponent = () => (
  <div className={style.container}>
    <div className={style.content}>
      <Space data-aos="fade-up" data-aos-duration="300" >
        <Text className={style.headerBold}>
          Our mission{" "}
          <Text className={style.headerSlim}>
            is to <br />
            be number one
          </Text>
        </Text>
      </Space>
      <Paragraph className={style.paragraph} data-aos="fade-up" data-aos-duration="400">
        As we speak, our company have been strive to be the best in a company
        that serve yourr need whenever, whatever you’ll need in your business
      </Paragraph>
      <img src={Mission1} className={style.img1} alt="" loading="lazy" data-aos="fade-right" data-aos-duration="450"/>
      <img src={Mission2} className={style.img2} alt="" loading="lazy" data-aos="fade-up" data-aos-duration="550"/>
      <img src={Mission3} className={style.img3} alt="" loading="lazy" data-aos="fade-down" data-aos-duration="650"/>
      <img src={Mission4} className={style.img4} alt="" loading="lazy" data-aos="fade-left" data-aos-duration="750"/>

    </div>
  </div>
)

export default Mission
