import React from 'react'
import formatDate from 'date-fns/formatDate'

const FormattedDate = ({ date, format = 'MMMM D, YYYY' }) => (
  <time dateTime={formatDate(date, format)}>
    {formatDate(date, format)}
  </time>
)

export default FormattedDate
