import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full pb-[50px]">
      <Header />
      <Calendar />
    </div>
  );
}
