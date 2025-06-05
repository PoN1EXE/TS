import React from 'react'
interface ErrorMessageProps {
  error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className='text-center'>{error}</p>
}

export { ErrorMessage }
