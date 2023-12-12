import { Container } from './style'
import { Tag } from '../Tag'

export function TagTitle({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
