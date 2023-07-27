

import Products from '@/app/common/containers/Products';
import { useClient } from 'react-interactions';

export default function Home() {
  return (
    <main className="min-h-auto max-w-[1300px] m-auto">
      <Products/>
    </main>
  )
}
