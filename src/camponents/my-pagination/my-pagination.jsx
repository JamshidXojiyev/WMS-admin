import { H3, PaginationContainer, PaginationContent } from "./my-pagination";
import MySearch from "../../camponents/my-select/my-select";

export default function MyPagination(resp) {
  return (
    <PaginationContainer>
      <PaginationContent count={resp.limit} shape="rounded" />
      <H3>Показать на странице</H3>
      <MySearch
        width="80px"
        height="40px"
        data={["10", "20", "30", "50"]}
        onChange={(e) => console.log(e.target.value)}
      />
    </PaginationContainer>
  );
}
