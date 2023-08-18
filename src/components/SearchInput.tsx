import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <Input borderRadius={20} placeholder="Search Movies" variant="filled" />
    </form>
  );
};
