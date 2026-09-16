import S1 from "./components/s1-cold-open";
import SplashScreen from "./components/splash-screen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
        <S1 />
      </div>
    </>
  );
}
