import { useRouter } from 'next/router';
import Link from 'next/link';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch profile data here based on the ID, or get it from your state management solution

  return (
    <div>
      <h3>Profile {id}</h3>
      <p>
        This is a placeholder for AI profiles. user can define his or her own AI
        settings and save them under a named profile
      </p>
      <p>
        <Link href="/">
          <button>Go to Listof AI Profiles</button>
        </Link>
      </p>
    </div>
  );
};

export default ProfilePage;
