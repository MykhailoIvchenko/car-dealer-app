import FilterPage from '@/components/filter.page/filter.page';
import Loader from '@/components/loader/loader';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Vehicle Filter</h1>

      <Suspense fallback={<Loader />}>
        <FilterPage />
      </Suspense>
    </div>
  );
}
