

import Products from '@/app/common/containers/Products';
import { useClient } from 'react-interactions';

export default function Home() {
  return (
    <main className="min-h-[78vh] max-w-[1300px] m-auto">

      <Products/>
    </main>
  )
}
