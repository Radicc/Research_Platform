import React, { useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}
const StocksAnalyzerSearch = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>StocksAnalyzer</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value.toUpperCase());
        }}
      >
        <input placeholder="Search for stocks" ref={ref} />
      </form>
    </>
  );
};

export default StocksAnalyzerSearch;
