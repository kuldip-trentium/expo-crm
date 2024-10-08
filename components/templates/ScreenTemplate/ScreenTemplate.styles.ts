import Text from '@atoms/Text/Text';
import { styled } from '@utils/styled';
import { SafeAreaView, TouchableOpacity } from 'react-native';

export const Container = styled(SafeAreaView)<{
  backgroundColor?: string;
}>`
  flex: 1;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.bgColor};
`;

export const AddButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 30px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const AddText = styled(Text)`
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.bgColor};
  font-weight: 700;
`;
