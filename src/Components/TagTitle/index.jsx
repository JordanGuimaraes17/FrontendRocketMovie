import { Container } from './style'
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai'
import { Tag } from '../Tag'

export function TagTitle({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>
        {data.title}
        <span>
          {[
            <AiFillStar key="1" />,
            <AiFillStar key="2" />,
            <AiFillStar key="3" />,
            <AiFillStar key="4" />,
            <AiOutlineStar key="5" />
          ]}
        </span>
      </h1>
      <h2>{data.description}</h2>

      {data.movie_tags && (
        <footer>
          {data.movie_tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
