import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
   ${({ theme }) => css`
      flex:1;
      background-color: ${theme.COLORS.GRAY_600};
      padding: 24px;
   `}
`;


