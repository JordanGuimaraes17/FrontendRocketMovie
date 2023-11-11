import { Container } from "./style";
import {AiFillStar,AiOutlineStar} from "react-icons/ai"

export function TagTitle({title, children}){
  return(
    <Container >
      <h2>{title}</h2>
      <div>
          {[
        <AiFillStar key="1" />,
        <AiFillStar key="2" />,
        <AiFillStar key="3" />,
        <AiFillStar key="4" />,
        <AiOutlineStar key="5"/>
      ]}
          </div>
          {children}
         
      
    </Container>
  )
}