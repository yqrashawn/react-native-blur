import React from 'react';
import { ViewProps, View } from 'react-native';
declare type BlurType = 'dark' | 'light' | 'xlight' | 'transparent' | 'prominent' | 'regular' | 'extraDark' | 'chromeMaterial' | 'material' | 'thickMaterial' | 'thinMaterial' | 'ultraThinMaterial' | 'chromeMaterialDark' | 'materialDark' | 'thickMaterialDark' | 'thinMaterialDark' | 'ultraThinMaterialDark' | 'chromeMaterialLight' | 'materialLight' | 'thickMaterialLight' | 'thinMaterialLight' | 'ultraThinMaterialLight';
export declare type BlurViewProps = ViewProps & {
    blurType?: BlurType;
    blurAmount?: number;
    reducedTransparencyFallbackColor?: string;
};
declare const BlurView: React.ForwardRefExoticComponent<ViewProps & {
    blurType?: BlurType | undefined;
    blurAmount?: number | undefined;
    reducedTransparencyFallbackColor?: string | undefined;
} & React.RefAttributes<View>>;
export default BlurView;
