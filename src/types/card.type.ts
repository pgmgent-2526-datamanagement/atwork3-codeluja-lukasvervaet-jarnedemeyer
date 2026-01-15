interface StatsCardProps {
  title: string;
  value: string;
  subtext: string;
  Icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  trendIcon?: boolean;
}

interface LargeCardProps {
  title: string;
  value: string;
  subtext: string;
  children: React.ReactNode;
}
export type { StatsCardProps, LargeCardProps };
