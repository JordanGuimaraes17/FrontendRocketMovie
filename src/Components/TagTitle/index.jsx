import { Container } from './style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Tag } from '../Tag'

export function TagTitle({ data, ...rest }) {
  const renderStars = () => {
    const filledStars = Math.floor(data.rating)
    const remainingStars = 5 - filledStars

    const stars = []

    for (let i = 0; i < filledStars; i++) {
      stars.push(<AiFillStar key={i} />)
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<AiOutlineStar key={filledStars + i} />)
    }

    return <span>{stars}</span>
  }

  return (
    <Container {...rest}>
      <h1>
        {data.title}
        {renderStars()}
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
