'use client';

export default function SpacerComponent({ height }: { height: number }) {
  return <div style={{ height: `${height}px` }} className="w-full" />;
}
