import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (ref.current) {
      setSearchQuery(ref.current.value);
    }
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        ref={ref}
        onClick={handleSearch}
        borderRadius={20}
        placeholder="Search Movies...."
        variant="filled"
      />
    </InputGroup>
  );
};
