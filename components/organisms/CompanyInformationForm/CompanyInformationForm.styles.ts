import Button from '@atoms/Button/Button';
import Text from '@atoms/Text/Text';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';

export const ButtonSubmit = styled(Button)<{ valid: boolean }>`
  height: 48px;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ valid, theme }) =>
    valid ? theme.colors.primaryColor : theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

export const KeyboardAwareScrollViewContainer = styled(KeyboardAwareScrollView)`
  min-height: 90%;
  position: relative;
  z-index: 1;
`;

export const ContainerView = styled(View)`
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 16px;
`;
export const SubContainerView = styled(View)`
  width: 100%;
  flex: 0.5;
  z-index: 2;
`;

export const FormButtonText = styled(Text)`
  font-weight: 700;
  color: ${({ valid, theme }) =>
    valid ? theme.colors.primaryColor : theme.colors.lightGray};
`;
