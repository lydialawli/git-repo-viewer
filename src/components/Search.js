import React, { useState } from 'react'
import { InputContainer, ButtonSubmit, SearchWrapper } from './Styles'


const Search = () => {
  const [name, setName] = useState('')
  const [repo, setRepo] = useState('')

  console.log({ name, repo })
  return (
    <SearchWrapper >
      <InputContainer onChange={e => {
        setName(e.target.value)
      }} type='text' placeholder={'name...'} />
      <h2 style={{ marginLeft: 10, marginRight: 10 }}>/</h2>
      <InputContainer onChange={e => {
        setRepo(e.target.value)
      }} type='text' placeholder={'repo...'} />
      <ButtonSubmit>SEARCH</ButtonSubmit>
    </SearchWrapper>
  )
}

export default Search
