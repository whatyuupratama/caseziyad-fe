import type { LoadingCardProps } from '@/types/components';

export function LoadingCard({ height = 'h-64' }: LoadingCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-gray-600 shadow-sm backdrop-blur ${height} animate-pulse`}
    />
  );
}
