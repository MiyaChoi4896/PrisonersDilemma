type GameTitleProps = { //TypeScript
    title: string;
    description: string;
  };
  
  export default function GameTitle({ //React 컴포넌트는 마크업을 반환하는 JavaScript 함수입니다.
    title,
    description,
  }: GameTitleProps) { 
    //JSX를 사용하면 마크업을 JavaScript 코드 안에 넣을 수 있습니다. 
    // 중괄호를 사용하면 JavaScript 코드로 다시 돌아가서 코드의 변수를 삽입하고 사용자에게 표시할 수 있습니다.
    return (
      <div> 
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }