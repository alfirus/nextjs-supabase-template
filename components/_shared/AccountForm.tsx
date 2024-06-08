'use client';

import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateRandomImageName } from '@/utils/generateRandom';
import { usePathname, useRouter } from 'next/navigation';
import { getPublicUrlFromBrowserClient } from '@/utils/getPublicUrlFromStorage';

export default function AccountForm({ profile }: { profile: Profile }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayname] = useState<string | null>(profile.displayname ?? '');
  const [userName, setUsername] = useState<string | null>(profile.username ?? '');
  const [website, setWebsite] = useState<string | null>(profile.website ?? '');
  const [avatarImg, setAvatarImg] = useState<string | null>(getPublicUrlFromBrowserClient('avatars', profile.avatar_img ?? ''));
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  async function updateProfile() {
    try {
      setLoading(true);
      if (userName === null || userName === '') {
        alert('Username is required');
        return;
      }
      const supabaseClient = createClient();
      const avatarPath = await uploadAvatar();

      const { error } = await supabaseClient
        .from('profiles')
        .update({
          displayname: displayName,
          username: userName,
          website: website,
          avatar_img: avatarPath ? avatarPath : profile.avatar_img,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', profile.user_id);
      if (error) throw error;
      if (pathname === '/first-setting-account') {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      // alert('Error updating the data!');
    } finally {
      setLoading(false);
    }
  }

  const uploadAvatar = async () => {
    if (avatarFile) {
      try {
        const formData = new FormData();
        formData.append('avatar', avatarFile);
        const extension = avatarFile.name.split('.').pop();
        if (!extension) {
          throw new Error('Invalid file extension');
        }
        const imageName = generateRandomImageName(extension);

        const supabaseClient = createClient();
        const { data, error } = await supabaseClient.storage.from('avatars').upload(`${imageName}`, formData);
        if (error) {
          console.log(error);
          throw error;
        }
        return data.path;
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    } else {
      return null;
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 pb-24 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Account Setting</h1>
        <p className="text-sm text-muted-foreground">Update your account information</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" value={profile.email} disabled />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="fullName">Display Name</Label>
          <Input
            id="displayname"
            name="displayname"
            type="text"
            value={displayName || ''}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" type="text" value={userName || ''} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" type="url" value={website || ''} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="picture">Avatar</Label>

          <Avatar className="mx-auto h-20 w-20">
            <AvatarImage src={avatarImg || ''} alt="Avatar" />
            <AvatarFallback>
              <span className="sr-only">Avatar Fallback</span>
              <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </AvatarFallback>
          </Avatar>
          <Input id="picture" type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <Button className="w-full" onClick={updateProfile} disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </Button>
      </div>
    </div>
  );
}
