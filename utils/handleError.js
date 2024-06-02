export const handleHttpError = (res, message = 'Something wrong happened!', code = 403) => {
  res.status(code)
  res.send({ error: message })
}