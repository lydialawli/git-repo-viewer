import React, { useState } from 'react'
import { InputContainer, ButtonSubmit, SearchWrapper } from './Styles'


const Search = ({ onSubmitSearch }) => {
  const [name, setName] = useState('')
  const [repoName, setRepoName] = useState('')

  const handleSubmit = () => {
    onSubmitSearch({ name: name, repoName: repoName })
  }

  return (
    <SearchWrapper >
      <InputContainer onChange={e => {
        setName(e.target.value)
      }} type='text' placeholder={'name...'} />
      <h2 style={{ marginLeft: 10, marginRight: 10 }}>/</h2>
      <InputContainer onChange={e => {
        setRepoName(e.target.value)
      }} type='text' placeholder={'repo...'} />
      <ButtonSubmit onClick={handleSubmit}>SEARCH</ButtonSubmit>
    </SearchWrapper>
  )
}

export default Search
