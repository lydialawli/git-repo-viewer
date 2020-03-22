import React, { useState } from 'react'
import { InputContainer, ButtonSubmit, SearchWrapper } from './Styles'


const Search = ({ onChangeName, onChangeRepoName }) => {
  const [name, setName] = useState('octocat')
  const [repoName, setRepoName] = useState('Hello-World')

  const handleSubmit = () => {
    console.log('yeayeya')
    onChangeName(name)
    onChangeRepoName(repoName)
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
