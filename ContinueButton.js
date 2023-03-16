import { Button } from 'native-base';

function ContinueButton() {
    return (
        <Button 
        alignSelf="center"
        width="278"
        height="20"
        // marginTop=""
        marginTop="4"
        backgroundColor='#F2CC8F' 
        variant="solid"
        _text={{color: "#3D405B", fontSize: "24"}}
        borderRadius="30">
                Continue
        </Button>
    );

}

export default ContinueButton;