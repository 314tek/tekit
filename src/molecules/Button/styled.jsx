import styled from 'styled-components/native'
import { Text, Pressable, MidView } from 'atoms'
import { Constant, Theme } from 'utils'

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`

export const Wrapper = styled(Pressable)`
  height: 46px;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
`

export const Label = styled(Text)`
  text-align: center;
  margin-horizontal: 10px;
  color: ${Theme.colors.light};
`
export const ColBox = styled(MidView)`
  width: 46px;
  height: 100%;
  background-color: ${Theme.colors.black_transparent};
`
