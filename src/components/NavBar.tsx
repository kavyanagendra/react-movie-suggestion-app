import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" padding="5px" />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};
