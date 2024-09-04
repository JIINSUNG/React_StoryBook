import "./App.css";
import { BrandCard } from "./shared/atoms/components/BrandCard.tsx";
import { Button } from "./shared/atoms/components/Button.tsx";
import { Image } from "./shared/atoms/components/Image.tsx";
import "./tailwindcss.css";
function App() {
  return (
    <div>
      <Button label="button" backgroundColor="blue" />
      <Image src="https://picsum.photos/200/300" label="Image" />
      <BrandCard src="https://picsum.photos/200/300" alt="BrandImage" />
    </div>
  );
}

export default App;
