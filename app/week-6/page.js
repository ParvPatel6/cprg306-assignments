import ItemList from './item-list';

export default function Page() {
  return (
    <main>
      <h1 className='text-3xl bg-slate-900 text-white font-bold py-2'>Shopping List</h1>
      <ItemList />
    </main>
  );
}