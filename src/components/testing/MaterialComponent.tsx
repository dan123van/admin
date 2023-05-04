import { Button, AppBar } from '@material-ui/core'
import { ShoppingCartRounded } from '@material-ui/icons'
import { ReactElement } from 'react'

function MaterialComponent(): ReactElement {
    return (
        <div>
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