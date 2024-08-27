import image from '../assets/react.svg'

type ImageProps = {
  onClick: () => void
}

export const Image = (props: ImageProps) => {
  return <img src={image} {...props} />
}
