import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push('/basicos/home');
  });

  return (
    <div>
      <h1>Principal</h1>
    </div>
  )

}