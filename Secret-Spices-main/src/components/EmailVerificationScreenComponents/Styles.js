import { StyleSheet } from "react-native";

import AppStyles from "../../AppStyles";


export const textBoxStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    header: {
        color: AppStyles.primaryTextColor,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: AppStyles.primaryFontFamilyBold,
    },
    body: {
        color: AppStyles.secondaryTextColor,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppStyles.secondaryFontFamilyRegular,
        marginTop: 10,
    },
    bold: {
        color: AppStyles.secondaryColor,
        fontWeight: '700',
    },
});

