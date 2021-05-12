import { CategoryTitleWrap, CategoryText } from "./Styled";

export const CategoryTitle = (props) => {
  return (
    <CategoryTitleWrap>
      <CategoryText>{props.title}</CategoryText>
    </CategoryTitleWrap>
  );
};
