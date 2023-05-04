import { Button, AppBar } from '@material-ui/core'
import { ShoppingCartRounded } from '@material-ui/icons'
import { ReactElement } from 'react'
import styled from 'styled-components';

const CustomApp = styled(AppBar)`
    height: 200px;
    background: #3f51b5;
`

function MaterialComponent(): ReactElement {
    return (
        <div>
            <CustomApp>
                <h1>aaaa</h1>
            </CustomApp>
            <AppBar>
                <h1>eee</h1>
            </AppBar>
            <Button variant="text" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </Button>
            <Button variant="contained" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </Button>
            <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </Button>
        </div>
    )
}

export default MaterialComponent