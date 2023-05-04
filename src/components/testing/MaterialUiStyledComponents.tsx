import { Button } from '@material-ui/core'
import { ShoppingCartRounded } from '@material-ui/icons'
import { ReactElement } from 'react'
import styled from 'styled-components';

const PrimerBoton = styled(Button)`
    width: 25%;
`
const ContainerCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const item = {};
function MaterialUiStyledComponents(): ReactElement {
    return (
        <ContainerCart>
            {
                item ? (
                    <img
                        style={{
                            width: 210,
                            height: 118,
                        }}
                    />
                ) : (
                    <>
                        <h1>muestra algo</h1>
                    </>
                )
            }

            <PrimerBoton variant="text" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </PrimerBoton>
            <PrimerBoton variant="contained" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </PrimerBoton>
            <PrimerBoton variant="outlined" startIcon={<ShoppingCartRounded />}>
                Add to Cart
            </PrimerBoton>
        </ContainerCart>
    )
}

export default MaterialUiStyledComponents