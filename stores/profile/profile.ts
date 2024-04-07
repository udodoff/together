import { isValueSet } from '@/lib/guards';
import { profileDomain } from './domain';
import { User } from '@/lib/user';

export type ProfileState = {
    user: Nullable<User>;
};

const profileInitialState: ProfileState = {
    user: null,
};

export const $profile = profileDomain.createStore<ProfileState>(profileInitialState);

export const $isLoggedIn = $profile.map<boolean>(({ user }) => isValueSet(user));
