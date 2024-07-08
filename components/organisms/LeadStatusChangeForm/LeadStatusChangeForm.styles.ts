import Text from '@atoms/Text/Text';
import View from '@atoms/View/View';
import { styled } from '@utils/styled';
import { Pressable } from 'react-native';

export const FormsView = styled(View)`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 16px;
  margin: 0px 16px;
  border-radius: 8px;
`;

export const CancelButtonView = styled(Pressable)`
  margin-top: 40px;
  height: 48px;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.error};
  border-radius: 8px;
`;

export const CancelText = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;
