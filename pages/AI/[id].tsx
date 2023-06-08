import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { useSidebar } from '../../contexts/SidebarContext';

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('AISidebar');
  }, [toggleSidebar]);

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
