interface ErrorMessageProps {
  error: string
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className='text-center'>{error}</p>
}
