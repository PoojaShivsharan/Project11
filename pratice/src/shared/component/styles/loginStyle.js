import { StyleSheet } from 'react-native';
import { DARKGREY,BGRED, BLACK, DARK_BLUE, GRAY_BLACK, LBLUE, LIGHTGREY, LIGHT_BLUE, MDBLUE, MGRAY, WHITE} from '../constant/theme';
// import { BGRED, BLACK, DARKGREY, DARK_BLUE, GRAY_BLACK, LBLUE, LIGHTGREY, LIGHT_BLUE, MDBLUE, MGRAY, WHITE } from '../constant/color';

export const loginStyle = StyleSheet.create({
    headerWrapper: {
        alignItems: "center"
    },
    termsAndConditionHeader: {
        alignItems: "center"
    },
    information: {
        alignSelf: "center",
        marginHorizontal: "6%",
        marginBottom: "10%"
    },
    loginInformation: {
        alignSelf: "center",
        color: DARKGREY
    },
    loginInformation1: {
        alignSelf: "center",
        width: "90%",
        color: DARKGREY
    },
    textInformation: {
        marginHorizontal: 2,
        marginVertical: 5,
        fontSize: 14,
        lineHeight: 22,
        color: GRAY_BLACK,
        textAlign: "center"
    },
    registerText: {
        marginHorizontal: 2,
        marginVertical: 10,
        lineHeight: 22,
        fontSize: 14,
        color: MDBLUE,
        textAlign: "center"
    },
    inputText: {
        marginVertical: 10,
        paddingVertical: 15,
        marginHorizontal: 30,
        fontSize: 14,
        backgroundColor: LIGHTGREY,
        borderRadius: 5,
        color: BLACK,
    },
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    resOtp: {
        paddingHorizontal: "25%",
        backgroundColor: MDBLUE,
        paddingVertical: 20,
        borderRadius: 5,
        alignSelf: "center",
    },
    resendOTPTxt: {
        textDecorationLine: "underline",
        color: WHITE,
        marginHorizontal: 45
    },
    CreateButton: {
        paddingHorizontal: "20%",
        backgroundColor: MDBLUE,
        paddingVertical: 20,
        borderRadius: 5,
        alignSelf: "center",
    },
    createButtonText: {
        textDecorationLine: "underline",
        color: WHITE,
        marginHorizontal: 45
    },
    termConditions: {
        bottom: 0,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        flexDirection: "row",
        width: "90%",
        marginLeft: 15
    },
    termConditionsText: {
        color: GRAY_BLACK,
        fontSize: 14
    },
    termConditionsSecondText: {
        textDecorationLine: "underline",
        color: LIGHT_BLUE,
        fontSize: 14
    },
    errorText: {
        color: BGRED
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 20,
    },
    iconButton: {
        padding: 10,
    },
    logoimage: {
        alignSelf: "center",
    },
    forgetPasswordText: {
        textAlign: "center"
    },
    checkBoxContainer: {
        flexDirection: "row",
        marginHorizontal: 40,
        marginTop: "20%"
    },
    button: {
        backgroundColor: MDBLUE,
        width: "85%",
        paddingVertical: 18,
        marginVertical:"20%",
        borderRadius: 4,
        alignSelf: "center"
    },
    buttonText: {
        color: WHITE,
        alignSelf: "center"
    },
    forgetText: {
        marginHorizontal: 30,
        fontSize: 12,
        bottom: 10,
        color: MGRAY
    },
    welcomeText: {
        fontSize: 30,
        marginVertical: 0,
        lineHeight: 35,
        color:LBLUE
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 30,
        top: 35,
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 10,
    },
    verticalLine: {
        borderColor: MDBLUE,
        borderWidth: 2,
        width: 10,
        height: 20
        // height: '100%',
    },
    mobileText: {
        fontSize: 16,
        color: GRAY_BLACK,
        marginLeft: 5,
        // justifyContent:"center",
        textAlignVertical: "center"
    },
    verticleLine: {
        height: 52,
        width: 3,
        left: 30,
        bottom: "10%",
        position: "absolute",
        backgroundColor: MDBLUE,
    },
    verticleLine1: {
        height: 52,
        width: 3,
        left: 30,
        bottom: "10%",
        backgroundColor: MDBLUE,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
      },
      verticalLine: {
        borderLeftWidth: 4,
        borderLeftColor: MDBLUE,
        height: '100%',
        left: 31
      },
      buttonTextMd: {
        fontSize: 14,
        lineHeight: 15,
        color:BLACK
      },
});
