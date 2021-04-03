import React, { useCallback, useState } from 'react'
import { Wrapper, Row, Mid, Container, Label } from './styled'
import { Icon } from 'atoms'
import { Theme } from 'utils'

const Checkbox = ({ checked, onChange, label, ...other }) => {
  const [draftCheck, setDraftCheck] = useState(false)

  const onChangeCheckbox = useCallback(() => {
    if (!!onChange) onChange(!draftCheck)
    setDraftCheck(!draftCheck)
  })

  const renderCheckbox = useCallback(() => {
    return (
      <Wrapper checked={!!checked ? checked : draftCheck}>
        <Mid>
          <Icon name={'check'} size={12} color={Theme.colors.light} />
        </Mid>
      </Wrapper>
    )
  }, [checked, draftCheck, onChangeCheckbox])

  return (
    <Container>
      <Row onPress={onChangeCheckbox} {...other}>
        {renderCheckbox()}
        <Label>{label}</Label>
      </Row>
    </Container>
  )
}

export default React.memo(Checkbox)
