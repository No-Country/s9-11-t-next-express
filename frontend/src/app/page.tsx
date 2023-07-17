import Main from "./common/components/Main/Main"
import Products from "./common/containers/Products"
import { useClient } from 'react-interactions';

export default function Home() {
  return (
    <main className="min-h-[78vh] max-w-[1300px] m-auto">
      {/* <Main /> */}
      <Products/>
    </main>
  )
}
