import { Container } from './style'

export function Tag({ title, ...rest }) {
  console.log('Inside Tag component')
  console.log('Rendering Tag with title:', title)
  return <Container {...rest}>{title}</Container>
}
