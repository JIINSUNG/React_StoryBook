import "./App.css";
import { BrandCard } from "./shared/atoms/BrandCard.tsx";
import { Button } from "./shared/atoms/Button.tsx";
import Image from "./shared/atoms/Image.tsx";
import "./tailwindcss.css";
function App() {
  return (
    <div>
      <Button label="button" backgroundColor="blue" />
      <Image src="https://picsum.photos/200/300" label="Image" />
      <BrandCard src="https://picsum.photos/200/300" alt="Image" />
    </div>
  );
}

export default App;
