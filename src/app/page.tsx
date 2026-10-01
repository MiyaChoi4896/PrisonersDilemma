import GameTitle from "@/components/GameTitle";
import PlayerChoice from "@/components/PlayerChoice";

export default function Home() {
  return (
    <main>
      <GameTitle //다른 컴포넌트 안에 중첩할 수 있습니다. 
      //React 컴포넌트 이름은 항상 대문자로 시작해야 하지만, HTML 태그는 소문자로 시작해야 합니다.
        title="Prisoner's Dilemma"
        description="What will you choose?"
      />

      <PlayerChoice />
    </main>
  );
}