import Image from 'next/image';
import earning1 from '@/public/dashboard-assets/earning1.png';
import earning2 from '@/public/dashboard-assets/earning2.png';
import earning3 from '@/public/dashboard-assets/earning3.png';
import avatar1 from '@/public/dashboard-assets/avatar1.png';
import avatar2 from '@/public/dashboard-assets/avatar2.png';
import avatar3 from '@/public/dashboard-assets/avatar3.png';
import avatar4 from '@/public/dashboard-assets/avatar4.png';
import avatar5 from '@/public/dashboard-assets/avatar5.png';
import { Icon12, Icon13 } from '@/lib/icons/icons';

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
  <div className=" flex flex-col items-center bg-white text-center sm:flex-row sm:items-center md:h-[5.25rem] md:items-start md:text-left">
    {icon}
    <div className="md:ml-[1.25rem] ">
      <p className="text-xs font-[400] leading-[1.313rem] tracking-[-0.01em] text-[#ACACAC] md:text-[1rem]">
        {label}
      </p>
      <p className="mt-[0.25rem] text-xl font-semibold leading-[2rem] tracking-[-0.01em] md:mb-[0.375rem] md:text-[2rem]">
        {value}
      </p>
      {change && (
        <div className="flex items-center">
          {change.direction === 'up' ? (
            <Icon12 />
          ) : (
            <Icon13 />
          )}
          <span
            className={`ml-[0.188rem] text-[0.75rem] font-[700] ${change.direction === 'up' ? 'text-[#00AC4F]' : 'text-[#F04438]'
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
        <div className="flex -space-x-2 md:mt-2">
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
    <div className="flex justify-between rounded-[30px] bg-white p-5 shadow-[0px_10px_60px_0px_#E2ECF980] md:pb-[2.063rem] md:pl-[3.125rem] md:pr-[5.5rem] md:pt-[1.938rem]">
      <StatItem
        icon={
          <Image
            src={earning1}
            alt="users"
            className="h-[3rem] w-[3rem] object-cover md:h-[5.25rem] md:w-[5.25rem]"
          />
        }
        label="Total Customers"
        value="5,423"
        change={{ value: '16%', direction: 'up' }}
        changeLabel="this month"
      />
      <Image src={"/dashboard-assets/seperate.png"} alt="seperate" height={87} width={1} />
      <StatItem
        icon={
          <Image
            src={earning2}
            alt="users"
            className="h-[3rem] w-[3rem] object-cover md:h-[5.25rem] md:w-[5.25rem]"
          />
        }
        label="Members"
        value="1,893"
        change={{ value: '1%', direction: 'down' }}
        changeLabel="this month"
      />
      <Image src={"/dashboard-assets/seperate.png"} alt="seperate" height={87} width={1} />
      <StatItem
        icon={
          <Image
            src={earning3}
            alt="users"
            className="h-[3rem] w-[3rem] object-cover md:h-[5.25rem] md:w-[5.25rem]"
          />
        }
        label="Active Now"
        value="189"
        avatars={5}
      />
    </div>
  );
}
