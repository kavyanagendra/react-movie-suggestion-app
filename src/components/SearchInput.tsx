import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";

interface Props{
    onSearch: (searchText: string)=> void;
}

export const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        ref={ref}
        onKeyDown={handleKeyPress}
        borderRadius={20}
        placeholder="Search Movies...."
        variant="filled"
      />
    </InputGroup>
  );
};
