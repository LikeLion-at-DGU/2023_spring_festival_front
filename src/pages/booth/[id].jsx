import { useRouter } from 'next/router';

const BoothDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch booth details using the `id` from the router query
  // ...

  return (
    <div>
      {/* Render the booth details */}
      <h1>Booth Details</h1>
      <p>ID: {id}</p>
      {/* Render other booth details */}
    </div>
  );
};

export default BoothDetailPage;
