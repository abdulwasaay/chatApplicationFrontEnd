import { LoadingButton } from '@mui/lab';
import React from "react"
import { appColour, textColours } from '../../constants/colours';

interface ButtonProps {
    text: String
    styles?: any
    loadings?: Boolean ,
    types?:any,
    onButtonClick: () => void
}

const CustomButton: React.FC<ButtonProps> = ({ text , types='button', styles = {}, loadings = false , onButtonClick}) => {

    const loading:any =loadings;
    
    return (
        <LoadingButton
            variant="contained"
            type={types}
            style={{background : textColours.lightBlue , ...styles}}
            loading={loading}
            onClick={onButtonClick}
            sx={{
                "&.Mui-disabled": {
                    backgroundColor: appColour.lightBLue, 
                }
            }}
        >

            {text}
        </LoadingButton>
    )
}

export default CustomButton