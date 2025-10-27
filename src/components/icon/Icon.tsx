import React from 'react';
import ArrowTop from './icons/ArrowTop';
import Close from './icons/Close';
import Delete from './icons/Delete';
import Follow from './icons/Follow';
import Like from './icons/Like';
import Logout from './icons/Logout';
import Message from './icons/Message';
import Music from './icons/Music';
import News from './icons/News';
import NoPost from './icons/NoPosts';
import OptionPost from './icons/OptionPost';
import Pencil from './icons/Pencil';
import Picture from './icons/Picture';
import Profile from './icons/Profile';
import Remember from './icons/Remember';
import Search from './icons/Search';
import Settings from './icons/Setting';
import Unfollow from './icons/Unfollow';
import Upload from './icons/Upload';
import Users from './icons/Users';

const icons = {
  arrowTop: ArrowTop,
  close: Close,
  delete: Delete,
  follow: Follow,
  like: Like,
  logout: Logout,
  message: Message,
  music: Music,
  news: News,
  noPost: NoPost,
  optionPost: OptionPost,
  pencil: Pencil,
  picture: Picture,
  profile: Profile,
  remember: Remember,
  search: Search,
  setting: Settings,
  unfollow: Unfollow,
  upload: Upload,
  users: Users,
};

const Icon = ({ name }: { name: string }) => {
  const IconComponent = icons[name as keyof typeof icons];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent />;
};

export default Icon;
