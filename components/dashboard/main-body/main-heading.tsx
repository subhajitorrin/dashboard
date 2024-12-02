import Image from 'next/image';
import seperate from '@/public/dashboard-assets/seperate.png';
import earning1 from '@/public/dashboard-assets/earning1.png';
import earning2 from '@/public/dashboard-assets/earning2.png';
import earning3 from '@/public/dashboard-assets/earning3.png';
import avatar1 from '@/public/dashboard-assets/avatar1.png';
import avatar2 from '@/public/dashboard-assets/avatar2.png';
import avatar3 from '@/public/dashboard-assets/avatar3.png';
import avatar4 from '@/public/dashboard-assets/avatar4.png';
import avatar5 from '@/public/dashboard-assets/avatar5.png';

const AVATARLIST = [avatar1, avatar2, avatar3, avatar4, avatar5];

const StatItem = ({
  icon,
  label,
  value,
  change,
  changeLabel,
  avatars,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: { value: string; direction: 'up' | 'down' };
  changeLabel?: string;
  avatars?: number;
}) => (
  <div className="flex h-[5.25rem] flex-col items-start bg-white sm:flex-row sm:items-center">
    {icon}
    <div className="ml-[1.25rem]">
      <p className="font-[400] leading-[1.313rem] tracking-[-0.01em] text-[#ACACAC]">
        {label}
      </p>
      <p className="mb-[0.375rem] mt-[0.25rem] text-[2rem] font-semibold leading-[2rem] tracking-[-0.01em]">
        {value}
      </p>
      {change && (
        <div className="flex items-center">
          {change.direction === 'up' ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17L10 5"
                stroke="#00AC4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16666 9.99999L10 4.16666L15.8333 9.99999"
                stroke="#00AC4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 3L10 15"
                stroke="#D0004B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10L10 15.8333L4.16668 10"
                stroke="#D0004B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span
            className={`ml-[0.188rem] text-[0.75rem] font-[700] ${
              change.direction === 'up' ? 'text-[#00AC4F]' : 'text-[#F04438]'
            }`}>
            {change.value}
          </span>
          &nbsp;
          {changeLabel && (
            <span className="text-[0.75rem] font-[400]">{changeLabel}</span>
          )}
        </div>
      )}
      {avatars && (
        <div className="mt-2 flex -space-x-2">
          {AVATARLIST.slice(0, avatars).map((avatar, i) => (
            <div
              key={i}
              className="h-6 w-6 overflow-hidden rounded-full border-2 border-white">
              <Image
                src={avatar}
                alt={`User ${i + 1}`}
                className="h-[1.625rem] w-[1.625rem] object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function StatsCard() {
  return (
    <div className="flex justify-between rounded-[30px] bg-white pb-[2.063rem] pl-[3.125rem] pr-[5.5rem] pt-[1.938rem]">
      <StatItem
        icon={
          <Image
            src={earning1}
            alt="users"
            className="h-[5.25rem] w-[5.25rem] object-cover"
          />
        }
        label="Total Customers"
        value="5,423"
        change={{ value: '16%', direction: 'up' }}
        changeLabel="this month"
      />
      <Image src={seperate} alt="seperate" height={87} />
      <StatItem
        icon={
          <Image
            src={earning2}
            alt="users"
            className="h-[5.25rem] w-[5.25rem] object-cover"
          />
        }
        label="Members"
        value="1,893"
        change={{ value: '1%', direction: 'down' }}
        changeLabel="this month"
      />
      <Image src={seperate} alt="seperate" height={87} />
      <StatItem
        icon={
          <Image
            src={earning3}
            alt="users"
            className="h-[5.25rem] w-[5.25rem] object-cover"
          />
        }
        label="Active Now"
        value="189"
        avatars={5}
      />
    </div>
  );
}
