type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  return <button {...props}>{props.label}</button>
}
