import React from 'react'
import styled from 'styled-components'
import { List, ListItem, ListItemText } from '@material-ui/core'

const StyledList = styled(List)`
  background-color: #325FCF;
  padding: 16px;
  border-radius: 4px;
`

const AdminComponent = ({ data }: any) => {
  return (
    <StyledList>
      {!!data
        ? data.map((data: any) => (
            <ListItem key={data.id}>
              <ListItemText primary={data.nombre} />
            </ListItem>
          ))
        : []}
    </StyledList>
  )
}

export default AdminComponent
