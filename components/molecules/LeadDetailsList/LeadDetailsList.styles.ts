import Text from "@atoms/Text/Text";
import View from "@atoms/View/View";
import { Platform } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const Flexed = styled(View)`
  flex: 1;
`;

export const FlatListContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.positionBg};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.positionBg};
  border-radius: ${Platform.select({ default: 8, ios: 8 })}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin: 5px;
  padding: 2px 5px 4px 5px;
  width: fit-content;
`;

export const ShowLeadText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ListContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;
