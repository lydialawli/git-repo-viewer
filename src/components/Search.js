import React from 'react'
import { InputContainer, ButtonSubmit, SearchWrapper } from './Styles'


const Search = () => {

  return (
    <SearchWrapper >
      <InputContainer onChange={() => { }} type='text' placeholder={'name...'} />
      <h2 style={{ marginLeft: 10, marginRight: 10 }}>/</h2>
      <InputContainer onChange={() => { }} type='text' placeholder={'repo...'} />
      <ButtonSubmit>SEARCH</ButtonSubmit>
    </SearchWrapper>
  )
}

export default Search
