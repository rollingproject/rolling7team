import { InputName } from "../components/inputs/InputName";

export function PostPage() {
  return (
    <form action="">
      <InputName>To.</InputName>
      <span>배경화면을 선택해 주세요.</span>
      <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
    </form>
  );
}
