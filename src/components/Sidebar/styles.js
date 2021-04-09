import styled from 'styled-components'

export const SidebarContainer = styled.div`  
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const ListTile = styled.div`
  height: 100vmin;
  overflow-y: scroll;
`

export const ListTileItem = styled.button`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 0px;
  &:hover {
      background-color: #f1f1f1;
  }
  &:focus {
    outline:0;
  }
  
`
export const ItemInfoContainer = styled.div`
  margin: 16px;
`
export const ItemSubTitle = styled.p`
  color: #828282;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  letter-spacing: 0.0125em;
`
